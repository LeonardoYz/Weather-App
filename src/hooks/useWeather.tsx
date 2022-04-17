import React, { 
  createContext, 
  Dispatch, 
  ReactNode, 
  SetStateAction, 
  useContext, 
  useEffect, 
  useState,
  useRef
} from "react";
import { useMenu } from "./useMenu";
import { api } from "../services/api";
import { formatDate } from "../util/formatDate";

interface WeatherContextProps {
  setSearchInputValue: Dispatch<SetStateAction<string>>;
  locationNameRef: React.MutableRefObject<HTMLInputElement | null>;
  handleChangeLocation: (arg: React.FormEvent<HTMLFormElement>) => void;
  formattedWeatherData: Array<{
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
}

interface WeatherProviderProps {
  children: ReactNode;
}

interface Location {
  title: string;
  woeid: number;
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
  }>
}

const WeatherContext = createContext({} as WeatherContextProps)

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [currentLocation, setCurrentLocation] = useState<Location[]>([])
  const [searchInputValue, setSearchInputValue] = useState("são paulo")
  const locationNameRef = useRef<HTMLInputElement | null>(null)
  const [weather, setWeather] = useState({} as Weather)
  const { handleCloseMenu } = useMenu()

  useEffect(() => {
    async function getLocation() {
      try {
        const response = await api.get(`search/?query=${searchInputValue}`);

        if (response.data.length === 0) throw Error()
        
        setCurrentLocation(response.data)
      } catch {
        console.log("location not found")
      }
    }

    getLocation()
  }, [searchInputValue])

  function handleChangeLocation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (locationNameRef.current) {
      const location = locationNameRef.current.value
      if (location === "") return

      handleCloseMenu()
      setSearchInputValue(location)
      locationNameRef.current.value = ""
    }
  }

  useEffect(() => {
    async function getWeather() {
      if (currentLocation.length === 0) return

      const response = await api.get(`${currentLocation[0].woeid}`)
      setWeather(response.data)
    }

    getWeather()
  }, [currentLocation])

  const formattedWeatherData = weather.consolidated_weather?.map(item => ({
    ...item,
    weatherStateNameFormatted: item.weather_state_name.split(" ").join(""),
    minTempFormatted: parseInt(String(item.min_temp)),
    maxTempFormatted: parseInt(String(item.max_temp)),
    windSpeedFormatted: parseInt(String(item.wind_speed)),
    airPressureFormatted: parseInt(String(item.air_pressure)),
    visibilityFormatted: (item.visibility).toFixed(1),
    currentWeatherFormatted: parseInt(String(item.the_temp)),
    formattedDate: formatDate(item.applicable_date),
  }))

  return (
    <WeatherContext.Provider 
      value={{ 
        setSearchInputValue,
        locationNameRef,
        handleChangeLocation,
        formattedWeatherData,
        currentLocation,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export function useWeather() {
  const context = useContext(WeatherContext)

  return context
}