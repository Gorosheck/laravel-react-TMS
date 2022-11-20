import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';
import ShoppingList from './ShoppingList';
import withLocalStorage from './withLocalStorage';
import { NotificationProvider } from './context/NotificationContext';
import NotificationBar from './components/NotificationBar';
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';

const root = ReactDOM.createRoot(document.getElementById('root'));

const StorageShoppingList = withLocalStorage('shopping-list', ShoppingList);

const StorageCounter = withLocalStorage('counter', Counter);

root.render(
  <React.StrictMode>
    <NotificationProvider>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <NotificationBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/articles'>
              <Route path=':id' element={<Post />} />

            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </NotificationProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
