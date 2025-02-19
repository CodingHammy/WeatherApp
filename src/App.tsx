import { useState } from 'react';
import LocationInput from './components/LocationInput';

function App() {
  const [location, setLocation] = useState('london');

  const onSubmit = (value: string) => {
    setLocation(value);
  };

  return (
    <div className='text-3xl font-bold bg-amber-800'>
      <LocationInput onSubmit={onSubmit} />
      <h1>{location}</h1>
    </div>
  );
}

export default App;
