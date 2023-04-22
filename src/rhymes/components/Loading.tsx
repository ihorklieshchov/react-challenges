export interface LoadingProps {
  loading: boolean;
}

export const Loading = ({ loading }: LoadingProps) => {
  if (loading) {
    return <span className="loading">Loading...</span>;
  }
  return null;
};
