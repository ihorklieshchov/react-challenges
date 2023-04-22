import { Rhyme } from '../useRhymes';

export interface ListProps {
  data: Rhyme[];
}

export const List = ({ data }: ListProps) => (
  <ol className="list">
    {data.map((item) => (
      <li key={item.word}>{item.word}</li>
    ))}
  </ol>
);
