import { Coordinates, WeatherInfo } from '../types/weather';

interface WeatherDisplayProps {
  location: string;
  coord: Coordinates;
  info: WeatherInfo;
}

export default function WeatherDisplay({
  location,
  coord,
  info,
}: WeatherDisplayProps) {
  if (!info.temp) return <p>No Information on {location}</p>;

  return (
    <>
      <h1>{location}</h1>
      <p>lat:{coord.lat}</p>
      <p>lon:{coord.lon}</p>
      <p>{info.temp}</p>
      <p>{info.typeOfWeather.icon}</p>
      <p>{info.typeOfWeather.weatherIconCode}</p>
      <p>{info.typeOfWeather.description}</p>
      <p>{info.wind.direction}</p>
      <p>{info.wind.speed}</p>
      <p>{info.sunTime.rise}</p>
      <p>{info.sunTime.set}</p>
    </>
  );
}
