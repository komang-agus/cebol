import {Interactive} from "remotion";

export const CornerLabel = ({children, pink = false}) => {
  return (
    <Interactive.Div
      name="Corner label"
      style={{
        display: "inline-flex",
        border: "3px solid #07180f",
        borderRadius: 999,
        padding: "12px 22px 10px",
        backgroundColor: pink ? "#f2299b" : "#ffc31e",
        color: "#07180f",
        fontSize: 28,
        fontWeight: 950,
        letterSpacing: 1.5,
        lineHeight: 1,
        textTransform: "uppercase",
        boxShadow: "7px 7px 0 #07180f",
      }}
    >
      {children}
    </Interactive.Div>
  );
};
