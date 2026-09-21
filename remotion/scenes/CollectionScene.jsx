import {Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame} from "remotion";
import {BrandBackground} from "../components/BrandBackground";
import {CornerLabel} from "../components/CornerLabel";

const characters = [
  {name: "SEKOLAH", src: "assets/character-sekolah.png", rotate: "-3deg"},
  {name: "POLOSAN", src: "assets/character-polosan.png", rotate: "3deg"},
  {name: "PKL", src: "assets/character-pkl.png", rotate: "2deg"},
  {name: "SENIMAN", src: "assets/character-seniman.png", rotate: "-2deg"},
];

export const CollectionScene = () => {
  const frame = useCurrentFrame();

  return (
    <BrandBackground>
      <Interactive.Div
        name="Collection heading"
        style={{
          position: "absolute",
          top: 94,
          left: 82,
          right: 82,
          color: "#fff7ec",
          fontSize: 96,
          fontWeight: 950,
          letterSpacing: -5,
          lineHeight: 0.96,
          textTransform: "uppercase",
          opacity: interpolate(frame, [0, 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [0, 24], ["-80px 0px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        4 REGULER.<br /><span style={{color: "#f2299b"}}>1 SECRET.</span>
      </Interactive.Div>
      <Interactive.Div name="Collection label" style={{position: "absolute", top: 310, right: 70, rotate: "4deg"}}>
        <CornerLabel>kenali gengnya</CornerLabel>
      </Interactive.Div>
      <div
        style={{
          position: "absolute",
          top: 430,
          left: 72,
          right: 72,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 26,
        }}
      >
        {characters.map((character, index) => (
          <Interactive.Div
            name={`Character ${character.name}`}
            key={character.name}
            style={{
              position: "relative",
              height: 420,
              overflow: "hidden",
              border: "6px solid #fff7ec",
              borderRadius: 26,
              backgroundColor: "#f2299b",
              boxShadow: "14px 14px 0 rgba(242,41,155,.3)",
              rotate: character.rotate,
              opacity: interpolate(frame, [18 + index * 10, 42 + index * 10], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              scale: interpolate(frame, [18 + index * 10, 48 + index * 10], [0.6, 1], {
                easing: Easing.spring({damping: 12}),
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                output: "perceptual-scale",
              }),
            }}
          >
            <Img
              src={staticFile(character.src)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                imageRendering: "auto",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 16,
                bottom: 16,
                left: 16,
                borderRadius: 999,
                padding: "12px 18px 10px",
                backgroundColor: "#fff7ec",
                color: "#07180f",
                fontSize: 27,
                fontWeight: 950,
                letterSpacing: 1,
                textAlign: "center",
              }}
            >
              ceBol {character.name.toLowerCase()}
            </div>
          </Interactive.Div>
        ))}
      </div>
      <Interactive.Div
        name="Secret strip"
        style={{
          position: "absolute",
          right: 72,
          bottom: 88,
          left: 72,
          height: 320,
          display: "flex",
          alignItems: "center",
          gap: 34,
          border: "6px solid #fff7ec",
          borderRadius: 30,
          padding: "32px 38px",
          backgroundColor: "#07180f",
          boxShadow: "18px 18px 0 #f2299b",
          opacity: interpolate(frame, [76, 106], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [76, 106], ["0px 100px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            width: 220,
            height: 220,
            flex: "0 0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: "#ffc31e",
            color: "#07180f",
            fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
            fontSize: 160,
            fontWeight: 900,
          }}
        >
          ?
        </div>
        <div>
          <div style={{color: "#f2299b", fontSize: 30, fontWeight: 950, letterSpacing: 2, textTransform: "uppercase"}}>
            Secret character
          </div>
          <div style={{marginTop: 8, color: "#fff7ec", fontSize: 56, fontWeight: 950, lineHeight: 1}}>
            Identitas tetap terkunci.
          </div>
        </div>
      </Interactive.Div>
    </BrandBackground>
  );
};
