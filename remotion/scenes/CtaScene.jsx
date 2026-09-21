import {Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame} from "remotion";
import {BrandBackground} from "../components/BrandBackground";
import {Wordmark} from "../components/Wordmark";

export const CtaScene = () => {
  const frame = useCurrentFrame();

  return (
    <BrandBackground>
      <Interactive.Div
        name="Yellow corner shape"
        style={{
          position: "absolute",
          top: -110,
          right: -170,
          width: 650,
          height: 650,
          borderRadius: "50%",
          backgroundColor: "#ffc31e",
          scale: interpolate(frame, [0, 38], [0.35, 1], {
            easing: Easing.spring({damping: 14}),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      />
      <Interactive.Div
        name="CTA wordmark"
        style={{
          position: "absolute",
          top: 98,
          left: 82,
          opacity: interpolate(frame, [0, 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <Wordmark />
      </Interactive.Div>
      <Interactive.Div
        name="CTA pink backdrop"
        style={{
          position: "absolute",
          top: 280,
          left: 105,
          width: 870,
          height: 930,
          borderRadius: "48% 52% 45% 55%",
          backgroundColor: "#f2299b",
          rotate: interpolate(frame, [0, 144], ["-10deg", "4deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 34], [0.6, 1], {
            easing: Easing.spring({damping: 12}),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      />
      <Img
        name="Final package"
        src={staticFile("assets/packaging-front.png")}
        style={{
          position: "absolute",
          top: 315,
          left: 285,
          width: 510,
          height: 635,
          objectFit: "cover",
          border: "7px solid #07180f",
          boxShadow: "34px 36px 0 rgba(7,24,15,.34)",
          rotate: interpolate(frame, [0, 34, 90, 144], ["18deg", "-4deg", "3deg", "-2deg"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 38], [0.35, 1], {
            easing: Easing.spring({damping: 11}),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      />
      <Interactive.Div
        name="Coming soon label"
        style={{
          position: "absolute",
          top: 1030,
          left: 82,
          right: 82,
          color: "#fff7ec",
          fontSize: 132,
          fontWeight: 950,
          letterSpacing: -7,
          lineHeight: 0.9,
          textAlign: "center",
          textTransform: "uppercase",
          opacity: interpolate(frame, [30, 58], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [30, 58], ["0px 110px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        SEGERA<br /><span style={{color: "#ffc31e"}}>HADIR.</span>
      </Interactive.Div>
      <Interactive.Div
        name="CTA line"
        style={{
          position: "absolute",
          top: 1350,
          left: 115,
          right: 115,
          border: "5px solid #fff7ec",
          borderRadius: 999,
          padding: "30px 38px 26px",
          color: "#fff7ec",
          fontSize: 42,
          fontWeight: 950,
          letterSpacing: 1,
          lineHeight: 1.1,
          textAlign: "center",
          textTransform: "uppercase",
          opacity: interpolate(frame, [58, 86], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [58, 86], [0.82, 1], {
            easing: Easing.spring({damping: 14}),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      >
        Kenali koleksinya.<br />Buka kotaknya.
      </Interactive.Div>
      <Interactive.Div
        name="Collaboration credit"
        style={{
          position: "absolute",
          bottom: 106,
          left: 82,
          right: 82,
          color: "#ffc31e",
          fontSize: 34,
          fontWeight: 950,
          letterSpacing: 5,
          textAlign: "center",
          textTransform: "uppercase",
          opacity: interpolate(frame, [82, 110], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        ceBol × KAPLIK
      </Interactive.Div>
    </BrandBackground>
  );
};
