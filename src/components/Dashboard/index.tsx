import { WeatherPreview } from "../WeatherPreview";
import { WeatherStatus } from "../WeatherStatus";
import { Footer } from "../Footer";

import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <WeatherPreview />
      <WeatherStatus />
      <Footer />
    </Container>
  )
}