import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

//bearer - носитель set делаем когда юзер зарегистрировался или залогинился, unset - когда вышел
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// регистрация POST /users/signup
export const register = ({ name, email, password }) => async dispatch => {
  dispatch(registerRequest());

  try {
    const response = await axios.post('/users/signup', {
      name,
      email,
      password,
    });

    // при успешной регистрации сетим токен на header авторизации и все последующии запросі идут с єтим токеном
    token.set(response.data.token);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

// логин POST /users/login
export const login = ({ email, password }) => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('/users/login', { email, password });

    // и при логине сетим токен в header
    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

// разлогинить POST /users/logout
export const logout = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/users/logout');

    // при логауте снимаем токен
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

// получение текущего пользователя (refresh) GET /users/current
export const getCurrentUser = () => async (dispatch, getState) => {
  //забираем токен из стейта
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
