import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import s from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './Components/AppBar';
import { Switch, Route } from 'react-router-dom';
import { getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "HomePage" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "LoginPage" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "RegisterPage" */),
);
const PhoneBookView = lazy(() =>
  import('./views/PhoneBookView' /* webpackChunkName: "ContactsPage" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onRefreshUser();
  }

  render() {
    return (
      <div className={s.App}>
        <AppBar />

        <Suspense
          fallback={
            <Loader
              type="ThreeDots"
              color="#424141"
              height={60}
              width={60}
              timeout={3000}
            />
          }
        >
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublicRoute path="/login" component={LoginView} restricted />
            <PublicRoute path="/register" component={RegisterView} restricted />
            <PrivateRoute path="/contacts" component={PhoneBookView} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRefreshUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
