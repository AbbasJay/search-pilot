export const getRandomIds = (gifs, numberOfGifs) => {
  let gifIds = [];

  for (let i = 0; i < numberOfGifs; i++) {
    const randomId = Math.floor(Math.random() * gifs.length);

    gifIds.push(gifs[randomId].id);
    gifs.splice(randomId, 1);
  }
  return gifIds;
};
