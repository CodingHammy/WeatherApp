import { useState } from 'react';

interface LocationInputProps {
  onSubmit: (value: string) => void;
}

export default function LocationInput({ onSubmit }: LocationInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
}
