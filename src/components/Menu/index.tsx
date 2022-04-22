import { useMenu } from "../../hooks/useMenu";
import { useWeather } from "../../hooks/useWeather";
import { IconContext } from "react-icons";
import { useState } from "react";
import locations from "../../util/locations.json";

import { IoMdClose } from "react-icons/io";
import { MdOutlineSearch, MdKeyboardArrowRight } from "react-icons/md";
import closeIcon from "../../assets/images/close-icon.svg";

import { Content, SearchForm } from "./styles";

export function Menu() {
  const { handleCloseMenu, menuIsOpen } = useMenu();
  const { 
    locationNameRef, 
    handleChangeLocation, 
    setSearchInputValue 
  } = useWeather();
  const [onChangeSearchInputValue, setOnChangeSearchInputValue] = useState("");
  
  function handleAutocompleteSearchInput(location: string) {
    handleCloseMenu();
    setSearchInputValue(location);

    if (locationNameRef.current) locationNameRef.current.value = "";
  }

  return (
    <Content menuIsOpen={menuIsOpen}>
      <button 
        type="button" 
        className="close-button" 
        onClick={handleCloseMenu}
      >
        <IoMdClose size={28} color="#e6e6ea" />
      </button>

      <SearchForm closeIcon={closeIcon} onSubmit={handleChangeLocation}>
        <div className="form__input-group">
          <input
            type="search"
            placeholder="search location"
            className="form__input"
            ref={locationNameRef}
            onChange={event =>
              setOnChangeSearchInputValue(event.target.value)
            }
          />

          <IconContext.Provider value={{ className: "form__input--icon" }}>
            <MdOutlineSearch />
          </IconContext.Provider>
        </div>

        <button type="submit" className="form__search">
          Search
        </button>
      </SearchForm>

      <div className="suggestion">
        <div className="suggestion__container">
          {locations
            .filter(item => item.toLowerCase().includes(onChangeSearchInputValue))
            .map((item, index) => (
              <button
                type="button"
                className="suggestion__option"
                onClick={() => handleAutocompleteSearchInput(item)}
                key={index}
              >
                {item}

                <IconContext.Provider value={{ className: "suggestion__icon" }}>
                  <MdKeyboardArrowRight />
                </IconContext.Provider>
              </button>
            ))}
        </div>
      </div>
    </Content>
  );
}
