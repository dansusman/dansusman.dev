var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var primary = colors[Math.floor(Math.random() * colors.length)];
var styleString = `--theme-primary:var(--${primary}); --theme-primary-rgb:var(--${primary}-rgb);`;
var favicon = `/favicon/${primary}.svg`;

Array.from(document.getElementsByTagName("body")).forEach((e) => {
  e.style = styleString;
});

document.getElementById("dynamic-fav").setAttribute("href", favicon);
document.getElementById("dynamic-apple-fav").setAttribute("href", favicon);

// function setFavicons(favImg, rel) {
//   let headTitle = document.querySelector("head");
//   let setFavicon = document.createElement("link");
//   setFavicon.setAttribute("rel", rel);
//   setFavicon.setAttribute("href", favImg);
//   headTitle.appendChild(setFavicon);
// }
// setFavicons(favicon, "shortcut icon");
// setFavicons(favicon, "apple-touch-icon");
