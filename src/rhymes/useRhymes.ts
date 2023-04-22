import { useEffect, useState } from 'react';

export type Rhyme = {
  word: string;
  score: number;
};

const sendRequest = async (query: string, signal: AbortSignal) => {
  const response = await fetch(
    `https://api.datamuse.com/words?rel_rhy=${query}`,
    { signal },
  );
  return response.json() as Promise<Rhyme[]>;
};

export const useRhymes = (query: string) => {
  const [data, setData] = useState<Rhyme[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.length === 0) {
      setData([]);
      setErrorMessage('');
      setIsLoading(false);
      return undefined;
    }

    const abortCtrl = new AbortController();
    setIsLoading(true);

    sendRequest(query, abortCtrl.signal)
      .then((json) => {
        setData(json);
        setErrorMessage('');
      })
      .catch((err: Error) => {
        setErrorMessage(err.name === 'AbortError' ? '' : err.message);
      })
      .finally(() => setIsLoading(false));

    return () => abortCtrl.abort();
  }, [query]);

  return { data, errorMessage, isLoading };
};
