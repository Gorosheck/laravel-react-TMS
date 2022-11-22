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
import Header from './components/Header';
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const StorageShoppingList = withLocalStorage('shopping-list', ShoppingList);
const StorageCount = withLocalStorage('counter', Counter);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
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
            <Route path='/todo' element={<ShoppingList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NotificationProvider>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
