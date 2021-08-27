var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var primary = colors[Math.floor(Math.random() * colors.length)];
var styleString = `--theme-primary:var(--${primary}); --theme-primary-rgb:var(--${primary}-rgb);`;

Array.from(document.getElementsByTagName("body")).forEach((e) => {
  e.style = styleString;
});
