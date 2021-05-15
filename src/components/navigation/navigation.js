import { NavLink } from 'react-router-dom';

import css from './navigation.module.css';

function Navigation(props) {
  return (
    <div className="row mt-5 mb-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/"
            exact
            activeClassName={css['active-class']}>
            Home Page
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/books"
            activeClassName={css['active-class']}>
            books
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/address"
            activeClassName={css['active-class']}>
            address
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/auth"
            activeClassName={css['active-class']}>
            AuthPage
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
