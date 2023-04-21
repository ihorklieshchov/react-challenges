import './GuessColor.css';
import cls from 'classnames';
import { useGuessColor } from './useGuessColor';

export const GuessColor = () => {
  const { variants, correctAnswer, message, error, takeAGuess } =
    useGuessColor();

  return (
    <div className="guess-color">
      <div
        className="color-preview"
        style={{ background: variants[correctAnswer] }}
      />
      <div className="controls">
        {variants.map((variant, index) => (
          <button key={variant} onClick={() => takeAGuess(index)}>
            {variant}
          </button>
        ))}
      </div>
      <div className={cls('message', { error })}>{message}</div>
    </div>
  );
};
