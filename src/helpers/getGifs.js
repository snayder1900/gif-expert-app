export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=AKWLNb9ygc3xHJQ9pOdo4GGgA8lrdi0p&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  console.log(resp)
  console.log(data)

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))



  return gifs;
}
