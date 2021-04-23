import s from './HomeView.module.css';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import { connect } from 'react-redux';

const HomeView = ({ IsAuthenticated }) => {
  return (
    <div className={s.home_page}>
      {IsAuthenticated ? (
        <h1>My Homepage</h1>
      ) : (
        <h1>Welcome! Please register or login to your account</h1>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  IsAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(HomeView);
