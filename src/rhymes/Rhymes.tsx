import './Rhymes.css';
import { useState } from 'react';
import { useRhymes } from './useRhymes';
import { Loading } from './components/Loading';
import { Summary } from './components/Summary';
import { List } from './components/List';
import { ErrorMessage } from './components/ErrorMessage';
import { Search } from './components/Search';

export const Rhymes = () => {
  const [query, setQuery] = useState('');
  const { data, errorMessage, isLoading } = useRhymes(query);

  return (
    <div className="rhymes">
      <Search query={query} onChange={(value) => setQuery(value)} />
      <Summary count={data.length} />
      <Loading loading={isLoading} />
      <ErrorMessage message={errorMessage} />
      <List data={data} />
    </div>
  );
};
