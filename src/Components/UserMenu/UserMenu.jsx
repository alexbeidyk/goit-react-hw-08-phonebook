import { connect } from 'react-redux';
import s from './UserMenu.module.css';
import { getUsername } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import Avatar from '@material-ui/core/Avatar';
import { Button } from 'react-bootstrap';

const UserMenu = ({ name, onLogout }) => {
  return (
    <div className={s.user_menu}>
      <div className={s.user_profile}>
        <Avatar src="/broken-image.jpg" />
        <p className={s.text}>Welcome, {name}</p>
      </div>
      <Button
        type="button"
        variant="dark"
        onClick={onLogout}
        className={s.logout_btn}
      >
        Logout
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: getUsername(state),
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
