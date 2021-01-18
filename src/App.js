import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom'
import Login from './pages/login/login'
import 'antd/dist/antd.css';

function App() {
  return (
   <BrowserRouter>
       <Route path='/login'>
           <Login />
       </Route>
   </BrowserRouter>
  );
}

export default App;
