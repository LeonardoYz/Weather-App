import { IconContext } from "react-icons/lib";

import { MdMyLocation } from "react-icons/md"
import { IoMdPin } from "react-icons/io"
import showerImg from "../../assets/images/Shower.png"
import cloudBgImg from "../../assets/images/Cloud-background.png"

import { Content, Header } from "./styles";

export function SideBar() {
  return (
    <>
      <Header>
        <div className="container">
          <button
            type="button" 
            className="header__button--search"
          >
            Search for places
          </button>

          <button
            type="button" 
            className="header__button--location"
          >
            <IconContext.Provider 
              value={{ className: "location-icon" }}
            >
              <MdMyLocation />
            </IconContext.Provider>
          </button>
        </div>    
      </Header> 

      <Content cloudBgImg={cloudBgImg}>
        <div className="sidebar__image">
          <img src={showerImg} alt="Temperature status" />
        </div>

        <div className="sidebar__text">
          <h1 className="sidebar__degree">
            15<span>&deg;C</span>
          </h1>

          <strong className="sidebar__temperature">Shower</strong>

          <div className="sidebar__date">
            <span>Today</span>
            <span></span>
            <span>Fri, 5 Jun</span>
          </div>

          <div className="sidebar__location">
            <IoMdPin size={24} color="#87859d" />
            <span>Helsinki</span>
          </div>
        </div>
      </Content>
    </>
  )
}