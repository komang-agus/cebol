import {Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame} from "remotion";
import {BrandBackground} from "../components/BrandBackground";
import {CornerLabel} from "../components/CornerLabel";

export const PackScene = () => {
  const frame = useCurrentFrame();

  return (
    <BrandBackground paper>
      <Interactive.Div
        name="Pack heading"
        style={{
          position: "absolute",
          top: 98,
          left: 82,
          right: 82,
          color: "#07180f",
          fontSize: 92,
          fontWeight: 950,
          letterSpacing: -5,
          lineHeight: 0.96,
          textTransform: "uppercase",
          opacity: interpolate(frame, [0, 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [0, 24], ["0px 90px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        MAU SATU?<br /><span style={{color: "#f2299b"}}>ATAU PAKET 4?</span>
      </Interactive.Div>
      <div
        style={{
          position: "absolute",
          top: 430,
          left: 70,
          right: 70,
          height: 710,
        }}
      >
        {[0, 1, 2, 3].map((index) => (
          <Img
            key={index}
            name={`Pack box ${index + 1}`}
            src={staticFile("assets/packaging-front.png")}
            style={{
              position: "absolute",
              top: index % 2 === 0 ? 20 : 160,
              left: 52 + index * 210,
              width: 310,
              height: 386,
              objectFit: "cover",
              border: "5px solid #07180f",
              boxShadow: "16px 18px 0 rgba(7,24,15,.22)",
              rotate: `${-12 + index * 7}deg`,
              opacity: interpolate(frame, [12 + index * 9, 34 + index * 9], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              scale: interpolate(frame, [12 + index * 9, 40 + index * 9], [0.45, 1], {
                easing: Easing.spring({damping: 11}),
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                output: "perceptual-scale",
              }),
              translate: interpolate(frame, [12 + index * 9, 40 + index * 9], ["0px 150px", "0px 0px"], {
                easing: Easing.bezier(0.16, 1, 0.3, 1),
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          />
        ))}
        <Interactive.Div name="No duplicates sticker" style={{position: "absolute", right: 0, bottom: 10, rotate: "6deg"}}>
          <CornerLabel pink>tanpa duplikat*</CornerLabel>
        </Interactive.Div>
      </div>
      <Interactive.Div
        name="Pack facts"
        style={{
          position: "absolute",
          top: 1220,
          right: 70,
          left: 70,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 18,
          opacity: interpolate(frame, [60, 88], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [60, 88], ["0px 100px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div style={{border: "5px solid #07180f", borderRadius: 24, padding: "30px 28px", backgroundColor: "#ffc31e", color: "#07180f"}}>
          <div style={{fontSize: 92, fontWeight: 950, lineHeight: 1}}>1</div>
          <div style={{fontSize: 30, fontWeight: 900, textTransform: "uppercase"}}>box = 1 karakter acak</div>
        </div>
        <div style={{border: "5px solid #07180f", borderRadius: 24, padding: "30px 28px", backgroundColor: "#f2299b", color: "#07180f"}}>
          <div style={{fontSize: 92, fontWeight: 950, lineHeight: 1}}>4</div>
          <div style={{fontSize: 30, fontWeight: 900, textTransform: "uppercase"}}>box = 4 karakter berbeda</div>
        </div>
      </Interactive.Div>
      <Interactive.Div
        name="Pack footnote"
        style={{
          position: "absolute",
          bottom: 100,
          left: 82,
          color: "#07180f",
          fontSize: 28,
          fontWeight: 800,
          opacity: interpolate(frame, [82, 104], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        *Berlaku dalam satu paket isi 4. Karakter tetap dipilih secara acak.
      </Interactive.Div>
    </BrandBackground>
  );
};
