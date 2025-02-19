import { useState } from 'react';
import LocationInput from './components/LocationInput';
import WeatherDisplay from './components/WeatherDisplay';
import { useWeather } from './hooks/useWeather';

function App() {
  const [location, setLocation] = useState('');
  const { coord, info } = useWeather(location);
  const onSubmit = (value: string) => {
    setLocation(value);
  };

  return (
    <div className='text-3xl font-bold bg-amber-800'>
      <LocationInput onSubmit={onSubmit} />
      <WeatherDisplay location={location} coord={coord} info={info} />
    </div>
  );
}

export default App;
