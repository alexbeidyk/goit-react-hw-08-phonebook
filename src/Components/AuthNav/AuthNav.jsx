import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import { Button, Nav } from 'react-bootstrap';

const AuthNav = () => {
  return (
    <Nav>
      <Button variant="dark">
        <NavLink
          to="/login"
          // className={[s['base'], s['link']].join(' ')}
          // activeClassName={s.active}
        >
          Login
        </NavLink>
      </Button>
      <Button variant="dark">
        <NavLink
          to="/register"
          // className={[s['base'], s['link']].join(' ')}
          // activeClassName={s.active}
        >
          Sign up
        </NavLink>
      </Button>
    </Nav>
  );
};

export default AuthNav;
