import { IconContext } from "react-icons/lib";
import { Menu } from "../Menu";
import { useMenu } from "../../hooks/useMenu";
import { useWeather } from "../../hooks/useWeather";

import { MdMyLocation } from "react-icons/md";
import { IoMdPin } from "react-icons/io";
import cloudBgImg from "../../assets/images/Cloud-background.png";

import { Container, Content, Header } from "./styles";

export function SideBar() {
  const { handleOpenMenu } = useMenu();
  const { formattedWeatherData, currentLocation } = useWeather();

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

          <button type="button" className="header__button--location">
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
              <img
                src={require(`../../assets/images/${formattedWeatherData[0].weatherStateNameFormatted}.png`)}
                alt="Weather state"
              />
            </div>

            <div className="sidebar__text">
              <h1 className="sidebar__degree">
                {formattedWeatherData[0].currentWeatherFormatted}
                <span>&deg;C</span>
              </h1>

              <strong className="sidebar__temperature">Shower</strong>

              <div className="sidebar__date">
                <span>Today</span>
                <span></span>
                <span>{formattedWeatherData[0].formattedDate}</span>
              </div>

              <div className="sidebar__location">
                <IoMdPin size={24} color="#87859d" />
                <span>{currentLocation[0].title}</span>
              </div>
            </div>
          </>
        )}
      </Content>
      
      <Menu />
    </Container>
  );
}
