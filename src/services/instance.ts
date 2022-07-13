import axios from 'axios';
// import { store } from '../store/configureStore';
// import { Actions } from '../store/authentication';

const instance = axios.create({
  baseURL: '',
  timeout: 30000,
});

// instance.interceptors.response.use(
//   response => response,
//   function (error) {
//     if (error?.response?.status === 401) {
//       store.dispatch(Actions.logOut());
//     }
//     return Promise.reject(error.response);
//   },
// );

// instance.interceptors.response.use(
//   response => {
//     return Promise.resolve(response.data);
//   },
//   function (error) {
//     return Promise.reject(error.response);
//   },
// );

export default instance;
