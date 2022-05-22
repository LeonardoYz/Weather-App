import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

import { useMenu } from "./useMenu";

import { api } from "../services/weatherApiBaseUrl";
import { formatDate } from "../util/formatDate";
import { toast } from "react-toastify";
import axios from "axios";

interface WeatherContextProps {
  setSearchInputValue: (arg: Array<number> | string) => void;
  locationNameRef: React.MutableRefObject<HTMLInputElement | null>;
  handleChangeLocation: (arg: React.FormEvent<HTMLFormElement>) => void;
  formattedWeatherData: Array<{
    formattedDate: string;
    windSpeedFormatted: number;
    maxTempFormatted: number;
    minTempFormatted: number;
    currentTempFormatted: number;
    airPressureFormatted: number;
    visibilityFormatted: string;
  }>;
  isLoading: boolean;
  unitType: string;
  handleChangeUnitType: (arg: string) => void;
  successfulLocationRequest: (arg: Position) => void;
  locationRequestFailed: () => void;
}

interface WeatherProviderProps {
  children: ReactNode;
}

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}

interface Weather {
  city_name: string;
  data: Array<{
    valid_date: string;
    wind_spd: number;
    max_temp: number;
    min_temp: number;
    temp: number;
    wind_dir: number;
    pres: number;
    hr: number;
    vis: number;
    weather: {
      icon: string;
      description: string;
    };
  }>;
}

const WeatherContext = createContext({} as WeatherContextProps);

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [searchInputValue, setSearchInputValue] = useState<Array<number> | string>("");
  const locationNameRef = useRef<HTMLInputElement | null>(null);
  const [weather, setWeather] = useState({} as Weather);
  const { handleCloseMenu } = useMenu();
  const [isLoading, setIsLoading] = useState(false);
  const [unitType, setUnitType] = useState("celsius");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      successfulLocationRequest,
      locationRequestFailed
    );
  }, []);

  function successfulLocationRequest(position: Position) {
    setSearchInputValue([position.coords.latitude, position.coords.longitude]);
  }

  async function locationRequestFailed() {
    try {
      const {
        data: { loc: userPosition },
      } = await axios.get(
        `https://ipinfo.io/json?token=${process.env.REACT_APP_IP_INFO_API_KEY}`
      );

      if (userPosition === "") throw Error();

      setSearchInputValue(userPosition.split(","));
    } catch {
      setSearchInputValue("são paulo");
    }
  }

  useEffect(() => {
    async function getWeather() {
      if (searchInputValue.length === 0) return;

      try {
        const { data } = await api.get(
          `${
            Array.isArray(searchInputValue)
              ? `&lat=${searchInputValue[0]}&lon=${searchInputValue[1]}`
              : `&city=${searchInputValue}`
          }&days=6&key=${process.env.REACT_APP_WEATHER_API_KEY}`
        );

        if (data.length === 0) throw new Error();

        setTimeout(() => {
          setIsLoading(false);
        }, 500);

        setWeather(data);
      } catch {
        toast.warn("Location not found");
      }
    }

    setIsLoading(true);
    getWeather();
  }, [searchInputValue]);

  function handleChangeLocation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (locationNameRef.current) {
      const location = locationNameRef.current.value;
      if (location === "") return;

      handleCloseMenu();
      setSearchInputValue(location);
      locationNameRef.current.value = "";
    }
  }

  function handleChangeUnitType(unit: string) {
    setUnitType(unit);
  }

  function showTemperatureBasedOnUnitType(temp: number) {
    const formattedTemperature = Math.round(temp);
    const temperatureConvertedToFahrenheit = Math.round(
      ((formattedTemperature * 9) / 5 + 32)
    );

    if (unitType === "fahrenheit") return temperatureConvertedToFahrenheit;

    return formattedTemperature;
  }

  const formattedWeatherData = weather.data?.map(item => ({
    ...item,
    formattedDate: formatDate(item.valid_date),
    windSpeedFormatted: Math.round((item.wind_spd)),
    maxTempFormatted: showTemperatureBasedOnUnitType(item.max_temp),
    minTempFormatted: showTemperatureBasedOnUnitType(item.min_temp),
    currentTempFormatted: showTemperatureBasedOnUnitType(item.temp),
    airPressureFormatted: Math.round((item.pres)),
    visibilityFormatted: item.vis.toFixed(1),
  }));

  return (
    <WeatherContext.Provider
      value={{
        setSearchInputValue,
        locationNameRef,
        handleChangeLocation,
        formattedWeatherData,
        isLoading,
        unitType,
        handleChangeUnitType,
        successfulLocationRequest,
        locationRequestFailed,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);

  return context;
}
