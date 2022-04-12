import { WeatherPreview } from "../WeatherPreview";
import { WeatherStatus } from "../WeatherStatus";

import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <WeatherPreview />
      <WeatherStatus />
    </Container>
  )
}