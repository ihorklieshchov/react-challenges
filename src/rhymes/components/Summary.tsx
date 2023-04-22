export interface SummaryProps {
  count: number;
}

export const Summary = ({ count }: SummaryProps) => (
  <span className="total">
    {count} rhyme{count === 1 ? '' : 's'} found
  </span>
);
