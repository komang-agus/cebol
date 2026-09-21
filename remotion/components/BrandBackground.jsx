import {AbsoluteFill, Interactive, interpolate, useCurrentFrame} from "remotion";

export const BrandBackground = ({paper = false, children}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        backgroundColor: paper ? "#fff7ec" : "#06140c",
        color: paper ? "#07180f" : "#fff7ec",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <Interactive.Div
        name="Fine dot texture"
        style={{
          position: "absolute",
          inset: 0,
          opacity: paper ? 0.12 : 0.2,
          backgroundImage: paper
            ? "radial-gradient(rgba(7,24,15,.55) 1.2px, transparent 1.2px)"
            : "radial-gradient(rgba(255,247,236,.42) 1.2px, transparent 1.2px)",
          backgroundSize: "14px 14px",
          translate: interpolate(frame, [0, 180], ["0px 0px", "14px 14px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
      {children}
    </AbsoluteFill>
  );
};
