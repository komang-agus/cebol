import {Interactive} from "remotion";

export const Wordmark = ({dark = false}) => {
  return (
    <Interactive.Div
      name="ceBol wordmark"
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        color: dark ? "#07180f" : "#fff7ec",
        fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
        fontSize: 76,
        fontWeight: 900,
        letterSpacing: -8,
        lineHeight: 1,
        rotate: "-4deg",
      }}
    >
      ce<span style={{color: "#f2299b"}}>B</span>ol
    </Interactive.Div>
  );
};
