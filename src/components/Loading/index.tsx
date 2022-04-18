import { useWeather } from "../../hooks/useWeather";

import partlyCloudy from "../../assets/images/partly-cloudy.svg"

import { Container } from "./styles";

export function Loading() {
  const { isLoading } = useWeather()

  return (
    <Container isLoading={isLoading}>
      <div className="loading__image">
        <img 
          src={partlyCloudy} 
          alt="Rainy cloud"
        />
      </div>

      <div className="loading__bar">
        <div className="loading__fill"></div>
      </div>
    </Container>
  )
}