import './ErrorPage.css';
import { Link } from 'react-router-dom';

export const ErrorPage = () => (
  <div className="error-page">
    <h3>Oops! You should not be here...</h3>
    <span>🫣</span>
    <Link to="/">Home</Link>
  </div>
);
