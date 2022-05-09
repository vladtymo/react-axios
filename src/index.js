import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';

import './index.css';

import App from './App';
import About from './components/About';
import UserList from './components/UserList';
import Home from './components/Home';
import TestUser from './components/TestUser';
import { store } from './store/store';

// import { UserProvider } from './contexts/user.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <UserProvider> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/new-user' element={<TestUser />} />
          <Route path='*' element={<p>Page Not Found!</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* </UserProvider> */}
  </Provider>
  // </React.StrictMode>
);