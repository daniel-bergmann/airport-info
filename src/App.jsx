import { useState, useEffect } from "react";

// API
import { getAirportInfo } from "./services/api";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const api = async () => {
      const r = await getAirportInfo('KEF');
      console.log(r);
      setData(r);
    };
    api();
  }, []);

  

  return (
    <>
      <h1>hallo</h1>
    </>
  );
}

export default App;
