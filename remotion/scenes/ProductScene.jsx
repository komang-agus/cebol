import {Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame} from "remotion";
import {BrandBackground} from "../components/BrandBackground";
import {CornerLabel} from "../components/CornerLabel";
import {Wordmark} from "../components/Wordmark";

export const ProductScene = () => {
  const frame = useCurrentFrame();

  return (
    <BrandBackground paper>
      <Interactive.Div name="Top wordmark" style={{position: "absolute", top: 100, left: 82}}>
        <Wordmark dark />
      </Interactive.Div>
      <Interactive.Div
        name="Pink product backdrop"
        style={{
          position: "absolute",
          top: 265,
          left: 60,
          width: 960,
          height: 1040,
          borderRadius: "52% 48% 44% 56%",
          backgroundColor: "#f2299b",
          rotate: interpolate(frame, [0, 124], ["-7deg", "3deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 28], [0.8, 1], {
            easing: Easing.spring({damping: 14}),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      />
      <Img
        name="ceBol package front"
        src={staticFile("assets/packaging-front.png")}
        style={{
          position: "absolute",
          top: 325,
          left: 230,
          width: 620,
          height: 772,
          objectFit: "cover",
          border: "7px solid #07180f",
          boxShadow: "34px 40px 0 rgba(7,24,15,.32)",
          rotate: interpolate(frame, [0, 30, 72, 124], ["-22deg", "-5deg", "3deg", "-2deg"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 34], [0.55, 1], {
            easing: Easing.spring({damping: 12}),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
          translate: interpolate(frame, [0, 34], ["0px 210px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
      <Interactive.Div
        name="One out of five sticker"
        style={{
          position: "absolute",
          top: 290,
          right: 50,
          rotate: "9deg",
          scale: interpolate(frame, [30, 58], [0, 1], {
            easing: Easing.spring({damping: 10}),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      >
        <CornerLabel>satu dari lima</CornerLabel>
      </Interactive.Div>
      <Interactive.Div
        name="Mystery question"
        style={{
          position: "absolute",
          top: 930,
          left: 72,
          width: 210,
          height: 210,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "7px solid #07180f",
          borderRadius: 26,
          backgroundColor: "#ffc31e",
          color: "#07180f",
          fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
          fontSize: 152,
          fontWeight: 900,
          rotate: "-12deg",
          scale: interpolate(frame, [40, 68], [0, 1], {
            easing: Easing.spring({damping: 9}),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      >
        ?
      </Interactive.Div>
      <Interactive.Div
        name="Product headline"
        style={{
          position: "absolute",
          top: 1340,
          left: 82,
          right: 82,
          color: "#07180f",
          fontSize: 94,
          fontWeight: 950,
          letterSpacing: -5,
          lineHeight: 0.95,
          textTransform: "uppercase",
          opacity: interpolate(frame, [45, 70], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [45, 70], ["0px 85px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Siapa yang<br /><span style={{color: "#f2299b"}}>kamu dapat?</span>
      </Interactive.Div>
      <Interactive.Div
        name="Product subline"
        style={{
          position: "absolute",
          bottom: 118,
          left: 82,
          right: 82,
          color: "#07180f",
          fontSize: 36,
          fontWeight: 800,
          lineHeight: 1.2,
          opacity: interpolate(frame, [70, 96], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Satu kotak. Satu karakter acak. Kejutannya baru terbuka saat kotaknya dibuka.
      </Interactive.Div>
    </BrandBackground>
  );
};
