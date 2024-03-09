import axios from "axios";
import { useState } from "react";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("kolkata");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperialr&appid=f8ba1d9534c0233d22b13e5036f20e38`;
  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((resp) => {
        setData(resp.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <h1>{data.main?.temp.toFixed()}°F</h1>
          </div>
          <div className="description">
            <h3>{data?.weather[0]?.main}</h3>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">{data?.main?.feels_like}°F</p>
            <p>FEELS LIKE</p>
          </div>
          <div className="humidity">
            <p className="bold">{data?.main?.humidity}%</p>
            <p>HUMIDITY</p>
          </div>
          <div className="wind">
            <p className="bold">{data?.wind?.speed} MPH</p>
            <p>WIND SPEED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
