import { useEffect, useState } from 'react';
import { Coordinates, WeatherInfo } from '../types/weather';

export function useWeather(location: string) {
  const [coord, setCoord] = useState<Coordinates>({ lat: null, lon: null });
  const [info, setInfo] = useState<WeatherInfo>({
    temp: null,
    typeOfWeather: {
      icon: null,
      weatherIconCode: null,
      description: null,
    },
    wind: { direction: null, speed: null },
    sunTime: { rise: null, set: null },
  });

  const OPENWEATHERKEY = import.meta.env.VITE_OPENWEATHERAPIKEY;

  useEffect(() => {
    const fetchCoord = async () => {
      if (!location) return;
      try {
        const res = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${OPENWEATHERKEY}`,
        );
        const data = await res.json();
        if (data.length > 0) {
          setCoord({ lat: data[0].lat, lon: data[0].lon });
        }
      } catch (error) {
        console.error('Error fetching Coordinates:', error);
      }
    };
    fetchCoord();
  }, [location]);

  useEffect(() => {
    if (!coord.lat || !coord.lon) return;

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${OPENWEATHERKEY}&units=metric`,
        );
        const data = await res.json();
        if (data) {
          setInfo({
            temp: data.main.temp,
            typeOfWeather: {
              icon: data.weather[0].main,
              weatherIconCode: data.weather[0].id.toString(),
              description: data.weather[0].description,
            },
            wind: { direction: data.wind.deg, speed: data.wind.speed },
            sunTime: { rise: data.sys.sunrise, set: data.sys.sunset },
          });
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeather();
  }, [coord]);

  return { coord, info };
}
