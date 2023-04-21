import { useCallback, useMemo, useState } from 'react';

const randomHexColor = () =>
  `#${[...Array(6)].map(() => (~~(Math.random() * 16)).toString(16)).join('')}`;

const generateVariants = () => [...Array(3)].map(randomHexColor);

export const useGuessColor = () => {
  const [variants, setVariants] = useState<string[]>(generateVariants);
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState(false);

  const correctAnswer = useMemo(() => ~~(Math.random() * 3), [variants]);

  const takeAGuess = useCallback(
    (index: number) => {
      if (correctAnswer === index) {
        setVariants(generateVariants());
        setMessage('Correct!');
      } else {
        setMessage('Try Again...');
      }
      setError(correctAnswer !== index);
    },
    [correctAnswer],
  );

  return { variants, correctAnswer, message, error, takeAGuess };
};
