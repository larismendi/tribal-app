export default function getContents({ keyword = "" } = {}) {
  const apiURL = `http://localhost:8000/api/search?q=${keyword}`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const contents = data.map((info) => {
          const {} = info;
          return {};
        });
        return contents;
      }
    });
}
