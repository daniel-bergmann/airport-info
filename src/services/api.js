// fetching flight information from the Airport info Api

// IATA is the airport code of each airport

export const getAirportInfo = async (iata) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
      "X-RapidAPI-Key": import.meta.env.VITE_AIRPORTINFO_KEY,
    },
  };
  const res = await fetch(import.meta.env.VITE_AIRPORTINFO_API + iata, options);
  const flightData = await res.json();

  return flightData;
};
