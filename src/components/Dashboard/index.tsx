import { WeatherPreview } from "../WeatherPreview";
import { WeatherStats } from "../WeatherStats";
import { Footer } from "../Footer";

import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <WeatherPreview />
      <WeatherStats />
      <Footer />
    </Container>
  );
}
