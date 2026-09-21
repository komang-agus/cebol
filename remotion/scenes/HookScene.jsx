import {Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {BrandBackground} from "../components/BrandBackground";
import {Wordmark} from "../components/Wordmark";

export const HookScene = () => {
  const frame = useCurrentFrame();

  return (
    <BrandBackground>
      <Interactive.Div
        name="Pink orbit"
        style={{
          position: "absolute",
          top: 180,
          left: -180,
          width: 1420,
          height: 1420,
          border: "150px solid #f2299b",
          borderRadius: "44% 56% 52% 48%",
          opacity: interpolate(frame, [0, 28], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 38, 104], [0.72, 1, 1.06], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
          rotate: interpolate(frame, [0, 104], ["-14deg", "8deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
      <Interactive.Div name="Top wordmark" style={{position: "absolute", top: 105, left: 82}}>
        <Wordmark />
      </Interactive.Div>
      <Interactive.Div
        name="Question mark"
        style={{
          position: "absolute",
          top: 225,
          right: 95,
          color: "#ffc31e",
          fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
          fontSize: 160,
          fontWeight: 900,
          rotate: interpolate(frame, [0, 34], ["25deg", "-8deg"], {
            easing: Easing.spring({damping: 10}),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 34], [0, 1], {
            easing: Easing.spring({damping: 10}),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      >
        ?
      </Interactive.Div>
      <Interactive.Div
        name="Main hook"
        style={{
          position: "absolute",
          top: 590,
          left: 82,
          right: 82,
          color: "#fff7ec",
          fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
          fontSize: 154,
          fontWeight: 900,
          letterSpacing: -10,
          lineHeight: 0.92,
          opacity: interpolate(frame, [8, 34], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [8, 34], ["0px 120px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        JANGAN<br />INTIP.
      </Interactive.Div>
      <Interactive.Div
        name="Hook subline"
        style={{
          position: "absolute",
          top: 980,
          left: 88,
          right: 120,
          color: "#fff7ec",
          fontSize: 54,
          fontWeight: 900,
          lineHeight: 1.08,
          textTransform: "uppercase",
          opacity: interpolate(frame, [28, 52], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [28, 52], ["-70px 0px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Biar kotaknya<br />yang memilihmu.
      </Interactive.Div>
      <Interactive.Div
        name="Product type"
        style={{
          position: "absolute",
          bottom: 115,
          left: 82,
          borderTop: "3px solid rgba(255,247,236,.6)",
          paddingTop: 18,
          color: "#fff7ec",
          fontSize: 30,
          fontWeight: 900,
          letterSpacing: 4,
          textTransform: "uppercase",
          opacity: interpolate(frame, [48, 74], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Blind box gantungan kunci
      </Interactive.Div>
    </BrandBackground>
  );
};
