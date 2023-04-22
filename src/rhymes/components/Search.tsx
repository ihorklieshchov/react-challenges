import { useEffect, useState } from 'react';

export interface SearchProps {
  query: string;
  onChange: (query: string) => void;
}

export const Search = ({ query, onChange }: SearchProps) => {
  const [value, setValue] = useState(() => query);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [value, onChange]);

  return (
    <input
      placeholder="Type a word to get rhymes"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="search"
    />
  );
};
