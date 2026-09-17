const supportedIcons = new Set([
  "arrow-up",
  "arrow-up-right",
  "collection",
  "plus",
  "spark",
]);

export function Icon({ name, className = "" }) {
  if (!supportedIcons.has(name)) return null;

  return (
    <span
      className={`ui-icon ui-icon-${name}${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    />
  );
}
