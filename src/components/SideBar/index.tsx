import { IconContext } from "react-icons/lib";
import { Menu } from "../Menu";
import { useMenu } from "../../hooks/useMenu";
import { useWeather } from "../../hooks/useWeather";
import { WeatherImage } from "../WeatherImage";

import { weatherImagesMapped } from "../../util/weatherImageSourceByCode";

import { MdMyLocation } from "react-icons/md";
import { IoMdPin } from "react-icons/io";
import cloudBgImg from "../../assets/images/Cloud-background.png";

import { Container, Content, Header } from "./styles";

export function SideBar() {
  const { handleOpenMenu } = useMenu();
  const {
    formattedWeatherData,
    unitType,
    successfulLocationRequest,
    locationRequestFailed,
  } = useWeather();

  function requestUserCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      successfulLocationRequest,
      locationRequestFailed
    );
  }

  return (
    <Container>
      <Header>
        <div className="container">
          <button
            type="button"
            className="header__button--search"
            onClick={handleOpenMenu}
          >
            Search for places
          </button>

          <button
            type="button"
            className="header__button--location"
            aria-label="Button for request location"
            onClick={requestUserCurrentPosition}
          >
            <IconContext.Provider value={{ className: "location-icon" }}>
              <MdMyLocation />
            </IconContext.Provider>
          </button>
        </div>
      </Header>

      <Content cloudBgImg={cloudBgImg}>
        {formattedWeatherData && (
          <>
            <div className="sidebar__image">
              <WeatherImage
                code={
                  formattedWeatherData[0].weather
                    .code as keyof typeof weatherImagesMapped
                }
                imageCode={formattedWeatherData[0].weather.icon}
                alt="Weather state"
              />
            </div>

            <div className="sidebar__text">
              <h1 className="sidebar__degree">
                {formattedWeatherData[0].currentTempFormatted}
                <span>&deg;{unitType === "celsius" ? "C" : "F"}</span>
              </h1>

              <strong className="sidebar__temperature">
                {formattedWeatherData[0].weather.description}
              </strong>

              <div className="sidebar__date">
                <span>Today</span>
                <span></span>
                <span>{formattedWeatherData[0].formattedDate}</span>
              </div>

              <div className="sidebar__location">
                <IoMdPin size={24} color="#87859d" />
                <span>{formattedWeatherData[0].currentCityName}</span>
              </div>
            </div>
          </>
        )}
      </Content>

      <Menu />
    </Container>
  );
}
