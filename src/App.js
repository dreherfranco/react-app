import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';
import {BrowserRouter} from 'react-router-dom';
import { menuFactory } from './utils/menuFactory';


const menu = [
  menuFactory("Home","/home","bi bi-house-door"),
  menuFactory("Articles","/articles","bi bi-list")
];

function App() {
  return (
    <Provider store={store}>  
      <BrowserRouter>
        <Layout menu={menu}/>
      </BrowserRouter>
    </Provider>   
  );
}

export default App;
