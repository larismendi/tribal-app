export default function getContents({ keyword = "" } = {}) {
  const apiURL = `http://localhost:8000/api/search?q=${keyword}`
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { result = [] } = response
      if (Array.isArray(result)) {
        const contents = result.map((info) => {
          const { id, provider, name, link, description, image, country, date, price } = info;
          return { id, provider, name, link, description, image, country, date, price };
        });
        return contents
      }
    });
}
