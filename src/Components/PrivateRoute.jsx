import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';

// Если маршрут приватный и юзер залогинен, рендерим компонент
// Если нет - то делаем редирект на страницу логина

const PrivateRoute = ({
  component: Component,
  IsAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      IsAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  IsAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
