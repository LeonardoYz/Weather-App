import { useWeather } from "../../hooks/useWeather";

import partlyCloudy from "../../assets/images/partly-cloudy.svg";

import { Container } from "./styles";

export function Preload() {
  const { isPreloadActive } = useWeather();

  return (
    <Container isPreloadActive={isPreloadActive}>
      <div className="loading__image">
        <img src={partlyCloudy} alt="Rainy cloud" />
      </div>

      <div className="loading__bar">
        <div className="loading__fill"></div>
      </div>
    </Container>
  );
}
