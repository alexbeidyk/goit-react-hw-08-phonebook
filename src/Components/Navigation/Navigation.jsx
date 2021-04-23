import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { Nav } from 'react-bootstrap';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import { connect } from 'react-redux';

const Navigation = ({ IsAuthenticated }) => {
  return (
    <Nav className=" mr-auto ">
      <NavLink
        exact
        to="/"
        className={[s['base'], s['link']].join(' ')}
        activeClassName={s.active}
      >
        Home
      </NavLink>

      {IsAuthenticated && (
        <NavLink
          to="/contacts"
          className={[s['base'], s['link']].join(' ')}
          activeClassName={s.active}
        >
          Contacts
        </NavLink>
      )}
    </Nav>
  );
};

const mapStateToProps = state => ({
  IsAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
