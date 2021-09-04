const apiKey = process.env.REACT_APP_PUBLIC_API_KEY;

const getGifs = ({ keyword = "batman" } = {}) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
};

export default getGifs;
