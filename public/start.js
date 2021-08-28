var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var primary = colors[Math.floor(Math.random() * colors.length)];
var styleString = `--theme-primary:var(--${primary}); --theme-primary-rgb:var(--${primary}-rgb);`;
var favicon = `/favicon/${primary.toUpperCase()}.svg`;

Array.from(document.getElementsByTagName("body")).forEach((e) => {
  e.style = styleString;
});

function setFavicons(favImg, rel) {
  let headTitle = document.querySelector("head");
  let setFavicon = document.createElement("link");
  setFavicon.setAttribute("rel", rel);
  setFavicon.setAttribute("href", favImg);
  headTitle.appendChild(setFavicon);
}
setFavicons(favicon, "shortcut icon");
setFavicons(favicon, "apple-touch-icon");
