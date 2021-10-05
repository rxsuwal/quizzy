
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login/Login'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Play from './components/Play/Play';


function App() {
  return (
    <Router>
      <Switch>

      <Route path='/play'>
          <Header/>
          <Play/>
        </Route>

        <Route path='/register'>
          <Header/>
          <Register/>
        </Route>

        <Route path='/'>
         <Header/>
          <Login/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
