const apiKey = "66a8ea07";

function search(title) {
  return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`, {
    method: "GET",
  })
    .then(r => r.json())
    .then(r => r.Search || [])
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error);
      return [];
    });
}

export { search };
