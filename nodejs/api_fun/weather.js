const start = async () => {
  const result = await fetch(
    "https://api.weather.gov/gridpoints/TOP/31,80/forecast"
  );
  const data = await result.json();
  const detailedForecast = data.properties.periods[1].detailedForecast;
  console.log(detailedForecast);
};
start();
