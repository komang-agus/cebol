import {mkdirSync, writeFileSync} from "node:fs";
import {dirname, resolve} from "node:path";
import {Buffer} from "node:buffer";

const sampleRate = 44100;
const durationSeconds = 18.8;
const samples = Math.ceil(sampleRate * durationSeconds);
const pcm = Buffer.alloc(samples * 2);
let seed = 739391;

const random = () => {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
};

const midiToHz = (note) => 440 * 2 ** ((note - 69) / 12);
const bassNotes = [40, 40, 43, 38, 40, 47, 43, 38];
const sceneHits = [0, 2.83, 6.33, 10.33, 13.83];

for (let index = 0; index < samples; index += 1) {
  const time = index / sampleRate;
  const beat = time * (112 / 60);
  const beatPhase = beat % 1;
  const eighth = Math.floor(beat * 2);
  const bassFrequency = midiToHz(bassNotes[Math.floor(beat / 2) % bassNotes.length]);
  const bassEnvelope = Math.exp(-beatPhase * 5.2);
  const bass = Math.sin(2 * Math.PI * bassFrequency * time) * bassEnvelope * 0.22;
  const pluckFrequency = midiToHz([64, 67, 71, 74][eighth % 4]);
  const pluckPhase = (beat * 2) % 1;
  const pluckEnvelope = Math.exp(-pluckPhase * 10);
  const pluck = (Math.sin(2 * Math.PI * pluckFrequency * time) + Math.sin(2 * Math.PI * pluckFrequency * 2 * time) * 0.35) * pluckEnvelope * 0.08;
  const kickEnvelope = Math.exp(-beatPhase * 28);
  const kickFrequency = 54 + 60 * Math.exp(-beatPhase * 35);
  const kick = Math.sin(2 * Math.PI * kickFrequency * time) * kickEnvelope * 0.52;
  const clapBeat = (beat + 0.5) % 2;
  const clapPhase = clapBeat % 1;
  const clapEnvelope = clapBeat < 0.16 ? Math.exp(-clapPhase * 36) : 0;
  const clap = (random() * 2 - 1) * clapEnvelope * 0.08;
  const hatPhase = (beat * 2) % 1;
  const hat = (random() * 2 - 1) * Math.exp(-hatPhase * 44) * 0.025;

  let accent = 0;
  for (const hit of sceneHits) {
    const delta = time - hit;
    if (delta >= 0 && delta < 0.55) {
      accent += Math.sin(2 * Math.PI * (280 + delta * 520) * delta) * Math.exp(-delta * 8) * 0.18;
    }
  }

  const fadeIn = Math.min(1, time / 0.3);
  const fadeOut = Math.min(1, Math.max(0, (durationSeconds - time) / 1.25));
  const sample = Math.max(-1, Math.min(1, (bass + pluck + kick + clap + hat + accent) * fadeIn * fadeOut));
  pcm.writeInt16LE(Math.round(sample * 32767), index * 2);
}

const header = Buffer.alloc(44);
header.write("RIFF", 0);
header.writeUInt32LE(36 + pcm.length, 4);
header.write("WAVE", 8);
header.write("fmt ", 12);
header.writeUInt32LE(16, 16);
header.writeUInt16LE(1, 20);
header.writeUInt16LE(1, 22);
header.writeUInt32LE(sampleRate, 24);
header.writeUInt32LE(sampleRate * 2, 28);
header.writeUInt16LE(2, 32);
header.writeUInt16LE(16, 34);
header.write("data", 36);
header.writeUInt32LE(pcm.length, 40);

const output = resolve("public/audio/cebol-launch.wav");
mkdirSync(dirname(output), {recursive: true});
writeFileSync(output, Buffer.concat([header, pcm]));
process.stdout.write(`Generated ${output} (${durationSeconds}s, mono WAV)\n`);
