export const getImage = () => {
  const imageSources = [
    "/img/bench.png",
    "/img/dorm.png",
    "/img/glasses.png",
    "/img/vassar hoodie.png",
  ];
  const altTexts = [
    "Dan sittin' on a bench.",
    "Dan cheekily holding a bouquet of flowers.",
    "Dan wearing his beloved blue light glasses and programming.",
    "Dan in college during a global pandemic.",
  ];
  const index = Math.floor(Math.random() * altTexts.length);

  return {
    imageSource: imageSources[index],
    imageAltText: altTexts[index],
  };
};
