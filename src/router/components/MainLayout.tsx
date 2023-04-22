import './MainLayout.css';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const MainLayout = () => (
  <div className="main-layout">
    <nav>
      <Navigation />
    </nav>
    <section>
      <Outlet />
    </section>
  </div>
);
