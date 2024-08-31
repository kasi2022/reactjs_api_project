// store.js
import { configureStore } from 'redux';
import counterReducer from './store'; // Import the reducer from the slice file

const store = configureStore({
  reducer: counterReducer,
});

export default store;
