import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';

// Если маршрут ограниченный (логин, регистрация) и юзер залогинен, то редирект на тел книгу
// Иначе рендерит компонент

const PublicRoute = ({
  component: Component,
  IsAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      IsAuthenticated && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  IsAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
