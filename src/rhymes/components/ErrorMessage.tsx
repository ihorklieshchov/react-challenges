export interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (message) {
    return <span className="error">{message}</span>;
  }
  return null;
};
