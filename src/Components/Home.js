import axios from "axios";
import "../Styles/Home.css";
import Background from "../images/BACKGROUND.jpg";
import { useState } from "react";
const Home = () => {
  const [weatherDetails, setWeatherDetails] = useState({});
  const [name, setName] = useState("");
  const fetchWeatherDetails = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=5a210c3b0ed22223b2a5d19b5a3879f1`
      )
      .then((respond) => {
        setWeatherDetails(respond.data);
        console.log("respond", respond.data);
      })
      .then((error) => {
        console.log(error);
      });
    setName("");
  };

  return (
    <>
      <div className="homeMain">
        <nav className="navbar navbar-expand-lg navbar-light navbarMain">
          <div className="container-fluid">
            <p className="navbar-brand text-bold ">WEATHER FINDER</p>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"></li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Your City"
                  aria-label="Search"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={fetchWeatherDetails}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      {/* main div */}
      <div>
        <div className="weatherDetailsMain">
          <img className="backgroundImg" src={Background} alt="background" />
        </div>
        <div className="details">
          <div className="cityName">
            <h1>{weatherDetails?.name}</h1>
          </div>
        </div>
        <div className="details">
          <div className="cityName">
            <h2 className="degree">
              {weatherDetails.main ? (
                <h2>{weatherDetails.main.temp}&#8451;</h2>
              ) : null}{" "}
            </h2>
          </div>
        </div>

        <div className="details">
          <div className="cityName">
          {weatherDetails.weather ? (
             <img
             className="weatherImage"
            src={`http://openweathermap.org/img/w/${weatherDetails.weather[0].icon}.png`}
             alt="weather"
           />
          ) : null}


           
          </div>
        </div>
        <div className="details">
          <div className="cityName">
            {weatherDetails.weather ? (
              <h2>{weatherDetails.weather[0].main}</h2>
            ) : null}
          </div>
        </div>

        <div className="details">
          {weatherDetails.weather ? (
            <h2>Des:- {weatherDetails.weather[0].description}</h2>
          ) : null}
          <div className="cityName"></div>
        </div>

        {weatherDetails.name != undefined && (
          <div className="otherDetails">
            <div className="smallContent">
              <p>current pressure:</p>
              {weatherDetails.main ? (
                <h2>{weatherDetails.main.pressure}</h2>
              ) : null}
            </div>
            <div>
              <p>wind speed:</p>
              {weatherDetails.wind ? (
                <h2>{weatherDetails.wind.speed}</h2>
              ) : null}
            </div>
            <div>
              <p>Minimum Temp:</p>
              {weatherDetails.main ? (
                <h2>{weatherDetails.main.temp_min}</h2>
              ) : null}
            </div>
            <div>
              <p>Maximum Temp:</p>
              {weatherDetails.main ? (
                <h2>{weatherDetails.main.temp_max}</h2>
              ) : null}
            </div>
            <div className="innerSmall">
              <p>Humidity Level:</p>
              {weatherDetails.main ? (
                <h2>{weatherDetails.main.humidity}</h2>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
