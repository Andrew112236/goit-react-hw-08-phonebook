import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <>
      <NavLink className={css.link} to="/login">
        Login
      </NavLink>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
    </>
  );
};

export default AuthNav;
