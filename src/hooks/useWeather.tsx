import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { useMenu } from "./useMenu";
import { api } from "../services/api";
import { formatDate } from "../util/formatDate";
import { toast } from "react-toastify";
import axios from "axios";
import { IP_INFO_API_KEY } from "../services/ipInfoApiKey";

interface WeatherContextProps {
  setSearchInputValue: Dispatch<SetStateAction<Array<number> | string>>;
  locationNameRef: React.MutableRefObject<HTMLInputElement | null>;
  handleChangeLocation: (arg: React.FormEvent<HTMLFormElement>) => void;
  formattedWeatherData: Array<{
    weather_state_name: string;
    humidity: number;
    weatherStateNameFormatted: string;
    minTempFormatted: number;
    maxTempFormatted: number;
    windSpeedFormatted: number;
    airPressureFormatted: number;
    visibilityFormatted: string;
    currentWeatherFormatted: number;
    formattedDate: string;
  }>;
  currentLocation: Location[];
  isLoading: boolean;
  unitType: string;
  handleChangeUnitType: (arg: string) => void;
  successfulLocationRequest: (arg: Position) => void;
  locationRequestFailed: () => void;
}

interface WeatherProviderProps {
  children: ReactNode;
}

interface Location {
  title: string;
  woeid: number;
}

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}

interface Weather {
  consolidated_weather: Array<{
    weather_state_name: string;
    applicable_date: string;
    min_temp: number;
    max_temp: number;
    the_temp: number;
    wind_speed: number;
    air_pressure: number;
    humidity: number;
    visibility: number;
  }>;
}

const WeatherContext = createContext({} as WeatherContextProps);

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [currentLocation, setCurrentLocation] = useState<Location[]>([]);
  const [
    searchInputValue, 
    setSearchInputValue
  ] = useState<Array<number> | string>("");
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
      } = await axios.get(`https://ipinfo.io/json?token=${IP_INFO_API_KEY}`);

      if (userPosition === "") throw Error();

      setSearchInputValue([userPosition]);  
    } catch {
      setSearchInputValue("são paulo");
    }
  }

  useEffect(() => {
    async function getLocation() {
      if (searchInputValue.length === 0) return;

      try {
        const { data } = await api.get(
          `search/?${
            Array.isArray(searchInputValue) ? "lattlong" : "query"
          }=${searchInputValue}`
        );

        if (data.length === 0) throw Error();

        setCurrentLocation(data);
      } catch {
        toast.warn("Location not found");
      }
    }

    getLocation();
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

  useEffect(() => {
    async function getWeather() {
      if (currentLocation.length === 0) return;

      const { data } = await api.get(`${currentLocation[0].woeid}`);
      setTimeout(() => {
        setIsLoading(true);
      }, 500);

      setWeather(data);
    }

    setIsLoading(false);
    getWeather();
  }, [currentLocation]);

  function handleChangeUnitType(unit: string) {
    setUnitType(unit);
  }

  function showTemperatureBasedOnUnitType(temp: number) {
    const formattedTemperature = parseInt(String(temp));
    const temperatureConvertedToFahrenheit = parseInt(
      String((formattedTemperature * 9) / 5 + 32)
    );

    if (unitType === "fahrenheit") return temperatureConvertedToFahrenheit;

    return formattedTemperature;
  }

  const formattedWeatherData = weather.consolidated_weather?.map((item) => ({
    ...item,
    weatherStateNameFormatted: item.weather_state_name.split(" ").join(""),
    minTempFormatted: showTemperatureBasedOnUnitType(item.min_temp),
    maxTempFormatted: showTemperatureBasedOnUnitType(item.max_temp),
    windSpeedFormatted: parseInt(String(item.wind_speed)),
    airPressureFormatted: parseInt(String(item.air_pressure)),
    visibilityFormatted: item.visibility.toFixed(1),
    currentWeatherFormatted: showTemperatureBasedOnUnitType(item.the_temp),
    formattedDate: formatDate(item.applicable_date),
  }));

  return (
    <WeatherContext.Provider
      value={{
        setSearchInputValue,
        locationNameRef,
        handleChangeLocation,
        formattedWeatherData,
        currentLocation,
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
