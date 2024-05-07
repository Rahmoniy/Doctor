// store.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './apiIdUser'; // Root reducer

// Middleware'lar (agar kerak bo'lsa)
// import thunk from 'redux-thunk'; // Masalan, Redux Thunk

// Asosiy store'ni yaratish
const store = createStore(
    rootReducer, // Asosiy reducer
    // applyMiddleware(thunk) // Middleware (agar kerak bo'lsa)
);

export default store;
