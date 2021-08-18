export const getColor = () => {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  const primary: string = colors[Math.floor(Math.random() * colors.length)];
  const styleString: string = `--theme-primary:var(--${primary}); --theme-primary-rgb:var(--${primary}-rgb);`;
  const favicon: string = `/style/favicon/${primary.toUpperCase()}.svg`;

  return {
    styleString,
    favicon,
  };
};
