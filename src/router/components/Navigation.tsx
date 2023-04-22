import './Navigation.css';
import { NavLink, Link } from 'react-router-dom';
import { Challanges } from '../challanges';

export const Navigation = () => (
  <div className="navigation">
    <h3>
      <Link to="/">Challanges</Link>
    </h3>
    <ul className="list">
      {Challanges.map((challange) => (
        <li key={challange.path}>
          <NavLink
            to={`challange/${challange.path}`}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {challange.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);
