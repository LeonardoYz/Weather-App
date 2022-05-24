import { IconContext } from "react-icons";
import { useWeather } from "../../hooks/useWeather";

import { FaLocationArrow } from "react-icons/fa";

import { Content } from "./styles";

export function WeatherStats() {
  const { formattedWeatherData } = useWeather();

  return (
    <Content>
      {formattedWeatherData && (
        <>
          <h2 className="title">Today's Highlights</h2>

          <div className="container">
            <div className="card wind">
              <span className="card__title">Wind Status</span>
              <strong className="card__detail">
                {formattedWeatherData[0].windSpeedFormatted} <span>mph</span>
              </strong>

              <div className="wsw">
                <div className="wsw__icon--box">
                  <IconContext.Provider value={{ className: "wsw__icon" }}>
                    <FaLocationArrow
                      style={{
                        transform: `rotate(${formattedWeatherData[0].wind_dir}deg)`,
                      }}
                    />
                  </IconContext.Provider>
                </div>

                <span>wsw</span>
              </div>
            </div>

            <div className="card humidity">
              <span className="card__title">Humidity</span>
              <strong className="card__detail">
                {formattedWeatherData[0].humidity}
                <span>%</span>
              </strong>

              <div className="level">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>

              <div className="bar--bg">
                <div
                  className="bar--fill"
                  style={{ width: `${formattedWeatherData[0].humidity}%` }}
                ></div>
              </div>

              <span className="percentage-char">%</span>
            </div>

            <div className="card">
              <span className="card__title">Visibility</span>
              <strong className="card__detail">
                {formattedWeatherData[0].visibilityFormatted} <span>miles</span>
              </strong>
            </div>

            <div className="card">
              <span className="card__title">Air Pressure</span>
              <strong className="card__detail">
                {formattedWeatherData[0].airPressureFormatted} <span>mb</span>
              </strong>
            </div>
          </div>
        </>
      )}
    </Content>
  );
}
