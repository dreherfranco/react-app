import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>  
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </Provider>   
  );
}

export default App;
