import { useMenu } from "../../hooks/useMenu";
import { useWeather } from "../../hooks/useWeather";
import { IconContext } from "react-icons";

import { IoMdClose } from "react-icons/io"
import { MdOutlineSearch, MdKeyboardArrowRight } from "react-icons/md"
import closeIcon from "../../assets/images/close-icon.svg"

import { Content, SearchForm } from "./styles";

export function Menu() {
  const { handleCloseMenu, menuIsOpen } = useMenu()
  const { locationNameRef, handleChangeLocation } = useWeather()

  return (
    <Content menuIsOpen={menuIsOpen}>
      <button 
        type="button"
        className="close-button"
        onClick={handleCloseMenu}
      >
        <IoMdClose size={28} color="#e6e6ea"/>
      </button>

      <SearchForm closeIcon={closeIcon}>
        <div className="form__input-group">
          <input 
            type="search" 
            placeholder="search location" 
            className="form__input"
            ref={locationNameRef}
          />

          <IconContext.Provider value={{ className: "form__input--icon"}}>
            <MdOutlineSearch />
          </IconContext.Provider>
        </div>

        <button 
          type="button"
          className="form__search"
          onClick={handleChangeLocation}
        >
          Search
        </button>
      </SearchForm>

      <div className="suggestion">
        <div className="suggestion__container">
          <button 
            type="button"
            className="suggestion__option"
          >
            London

            <IconContext.Provider value={{ className: "suggestion__icon"}}>
              <MdKeyboardArrowRight />
            </IconContext.Provider>
          </button>

          <button 
            type="button"
            className="suggestion__option"
          >
            Barcelona

            <IconContext.Provider value={{ className: "suggestion__icon"}}>
              <MdKeyboardArrowRight />
            </IconContext.Provider>
          </button>

          <button 
            type="button"
            className="suggestion__option"
          >
            Long Beach

            <IconContext.Provider value={{ className: "suggestion__icon"}}>
              <MdKeyboardArrowRight />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </Content>
  )
}