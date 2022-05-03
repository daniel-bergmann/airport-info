import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getHNapi = async () => {
      const getNews = await fetchNews();
      setData(getNews);
    };
    getHNapi();
  }, []);

  const fetchNews = async () => {
    const r = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    const newsData = await r.json();
    return newsData;
  };

  console.log(data.slice(0, 10));
  return (
    <>
      {data.slice(0, 10).map((a) => {
        return <h1>{a}</h1>;
      })}
    </>
  );
}

export default App;
