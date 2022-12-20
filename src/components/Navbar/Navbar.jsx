import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={css.layout}>
      <header className={css.navBar}>
        <NavLink
          to="/"
          className={css.navBarLink}
          onClick={() => window.scroll(0, 0)}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/Movies"
          className={css.navBarLink}
          onClick={() => window.scroll(0, 0)}
        >
          Movies
        </NavLink>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
