import { useState } from "react";

import hailImg from "../../assets/images/Hail.png"
import thunderstormWithSunImg from "../../assets/images/ThunderstormWithSun.png"
import lightCloudImg from "../../assets/images/LightCloud.png"
import heavyRain from "../../assets/images/HeavyRain.png"

import { Content, Header } from "./styles";

export function WeatherPreview() {
  const [unitType, setUnitType] = useState("celsius");

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
          <div className="card">
            <span className="card__title">Tomorrow</span>
            <img 
              className="card__image" 
              src={hailImg} 
              alt="Weather status" 
            />

            <div className="card__temperature">
              <p className="card__temperature--max">16 &deg;C</p>
              <p className="card__temperature--min">11 &deg;C</p>
            </div>
          </div>

          <div className="card">
            <span className="card__title">Sun, 7 Jun</span>
            <img 
              className="card__image" 
              src={hailImg} 
              alt="Weather status" 
            />

            <div className="card__temperature">
              <p className="card__temperature--max">16 &deg;C</p>
              <p className="card__temperature--min">11 &deg;C</p>
            </div>
          </div>

          <div className="card">
            <span className="card__title">Mon, 8 Jun</span>
            <img 
              className="card__image" 
              src={thunderstormWithSunImg} 
              alt="Weather status" 
            />

            <div className="card__temperature">
              <p className="card__temperature--max">16&deg;C</p>
              <p className="card__temperature--min">11&deg;C</p>
            </div>
          </div>

          <div className="card">
            <span className="card__title">Tue, 9 Jun</span>
            <img 
              className="card__image" 
              src={lightCloudImg} 
              alt="Weather status" 
            />

            <div className="card__temperature">
              <p className="card__temperature--max">16 &deg;C</p>
              <p className="card__temperature--min">11 &deg;C</p>
            </div>
          </div>

          <div className="card">
            <span className="card__title">Wed, 10 Jun</span>
            <img 
              className="card__image" 
              src={heavyRain} 
              alt="Weather status" 
            />

            <div className="card__temperature">
              <p className="card__temperature--max">16 &deg;C</p>
              <p className="card__temperature--min">11 &deg;C</p>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
