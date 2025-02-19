export interface Coordinates {
  lat: string | null;
  lon: string | null;
}

export interface WeatherInfo {
  temp: number | null;
  typeOfWeather: {
    icon: string | null;
    weatherIconCode: string | null;
    description: string | null;
  };
  wind: { direction: number | null; speed: number | null };
  sunTime: { rise: number | null; set: number | null };
}
