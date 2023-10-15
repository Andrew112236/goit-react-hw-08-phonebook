import { NavLink } from 'react-router-dom';
import styled from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <>
      <NavLink className={styled.link} to="/login">
        Login
      </NavLink>
      <NavLink className={styled.link} to="/register">
        Register
      </NavLink>
    </>
  );
};

export default AuthNav;
