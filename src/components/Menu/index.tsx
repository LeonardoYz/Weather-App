import { useEffect, useState } from "react";
import { useMenu } from "../../hooks/useMenu";
import { useWeather } from "../../hooks/useWeather";
import { IconContext } from "react-icons";

import _ from "lodash";
import axios from "axios";

import { IoMdClose } from "react-icons/io";
import { MdOutlineSearch, MdKeyboardArrowRight } from "react-icons/md";
import closeIcon from "../../assets/images/close-icon.svg";

import { Content, SearchForm } from "./styles";

interface LocationsData {
  id: number;
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export function Menu() {
  const { handleCloseMenu, menuIsOpen } = useMenu();
  const { setSearchInputValue } = useWeather();
  const [onChangeSearchInputValue, setOnChangeSearchInputValue] = useState("");
  const [locations, setLocations] = useState<LocationsData[]>([]);

  useEffect(() => {
    if (onChangeSearchInputValue.length === 0) return;

    const searchInputValueWithoutWordAccents = _.deburr(
      onChangeSearchInputValue
    );

    async function getLocationsSearched() {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_SEARCH_AUTOCOMPLETE_API_KEY}&q=${searchInputValueWithoutWordAccents}`
      );

      setLocations(data);
    }

    getLocationsSearched();
  }, [onChangeSearchInputValue]);

  function handleChangeLocation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    handleCloseMenu();
    setSearchInputValue(onChangeSearchInputValue);
    setOnChangeSearchInputValue("");
  }

  function handleAutocompleteSearchInput(lat: number, lon: number) {
    handleCloseMenu();
    setSearchInputValue([lat, lon]);
    setOnChangeSearchInputValue("");
  }

  return (
    <Content menuIsOpen={menuIsOpen}>
      <button type="button" className="close-button" onClick={handleCloseMenu}>
        <IoMdClose size={28} color="#e6e6ea" />
      </button>

      <SearchForm closeIcon={closeIcon} onSubmit={handleChangeLocation}>
        <div className="form__input-group">
          <input
            type="search"
            placeholder="search location"
            className="form__input"
            onChange={(event) =>
              setOnChangeSearchInputValue(event.target.value)
            }
            value={onChangeSearchInputValue}
          />

          <IconContext.Provider value={{ className: "form__input--icon" }}>
            <MdOutlineSearch />
          </IconContext.Provider>
        </div>

        <button
          type="submit"
          className="form__search"
          disabled={onChangeSearchInputValue.length === 0}
        >
          Search
        </button>
      </SearchForm>

      <div className="suggestion">
        <div className="suggestion__container">
          {locations.map((item) => (
            <button
              key={item.id}
              type="button"
              className="suggestion__option"
              onClick={() => handleAutocompleteSearchInput(item.lat, item.lon)}
            >
              {item.name}, {item.country}
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
