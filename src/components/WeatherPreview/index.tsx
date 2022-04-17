import { useState } from "react";
import { useWeather } from "../../hooks/useWeather";

import { Content, Header } from "./styles";

export function WeatherPreview() {
  const [unitType, setUnitType] = useState("celsius");
  const { formattedWeatherData } = useWeather();

  const weatherImages = formattedWeatherData
    ?.slice(1)
    .map((item, index) => (
      <img
        key={index}
        className="card__image"
        src={require(
          `../../assets/images/${item.weatherStateNameFormatted}.png`
        )}
        alt="Weather state"
      />
    ));

  return (
    <>
      <Header>
        <div className="header__container">
          <button
            type="button"
            className={`header__button ${
              unitType === "celsius" ? "active" : ""
            }`}
            onClick={() => setUnitType("celsius")}
          >
            &deg;C
          </button>

          <button
            type="button"
            className={`header__button ${
              unitType === "fahrenheit" ? "active" : ""
            }`}
            onClick={() => setUnitType("fahrenheit")}
          >
            &deg;F
          </button>
        </div>
      </Header>

      <Content>
        <div className="container">
          {formattedWeatherData?.slice(1).map((item, index) => (
            <div className="card" key={index}>
              <span className="card__title">{item.formattedDate}</span>

              <div className="card__image--box">{weatherImages[index]}</div>

              <div className="card__temperature">
                <p className="card__temperature--max">
                  {item.minTempFormatted} &deg;C
                </p>
                <p className="card__temperature--min">
                  {item.maxTempFormatted} &deg;C
                </p>
              </div>
            </div>
          ))}
        </div>
      </Content>
    </>
  );
}
