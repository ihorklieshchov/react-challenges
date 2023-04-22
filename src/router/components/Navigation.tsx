import './Navigation.css';
import { NavLink, Link } from 'react-router-dom';
import { Challenges } from '../challenge';

export const Navigation = () => (
  <div className="navigation">
    <h3>
      <Link to="/">Challenges</Link>
    </h3>
    <ul className="list">
      {Challenges.map((challenge) => (
        <li key={challenge.path}>
          <NavLink
            to={`challenge/${challenge.path}`}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {challenge.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);
