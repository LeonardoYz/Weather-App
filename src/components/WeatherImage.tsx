import { weatherImagesMapped } from "../util/weatherImageSourceByCode";

interface WeatherImageProps {
  imageClass?: string;
  code: keyof typeof weatherImagesMapped;
  imageCode: string;
  alt: string;
}

export function WeatherImage({
  imageClass,
  code,
  imageCode,
  alt,
}: WeatherImageProps) {
  const weatherImageSource = Object.entries(weatherImagesMapped[code])
    .filter(([key]) => key === imageCode)
    .map(([, value]) => value)
    .join("");

  return <img className={imageClass} src={weatherImageSource} alt={alt} />;
}
