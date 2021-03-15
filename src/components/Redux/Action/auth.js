import http from '../../Helper/http';
import jwt from 'jwt-decode';

export const signup = (name, email, password) => {
  return async (dispatch) => {
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('email', email);
    params.append('password', password);
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: '',
      });
      const results = await http().post('/auth/sign-up', params);
      dispatch({
        type: 'SIGN_UP',
        payload: results.data.result,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message,
      });
    }
  };
};

export const signin = (email, password) => {
  return async (dispatch) => {
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: '',
      });
      const results = await http().post('/auth/sign-in', params);
      const token = results.data.results.token;
      const user = jwt(token);
      dispatch({
        type: 'SIGN_IN',
        payload: token,
        user: user,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message,
      });
    }
  };
};

export const updateUser = (token, id, data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: '',
      });
      const results = await http(token).patch(`/user/${id}`, data);
      dispatch({
        type: 'UPDATE_USER',
        payload: results.data.results,
      });
    } catch (err) {
      const {message} = err.response.data;
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message,
      });
    }
  };
};

export const signout = () => ({
  type: 'SIGNOUT',
});
