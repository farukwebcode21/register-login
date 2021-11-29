import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

const App=()=> {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
           <Route path="/home">
            <Home/>
          </Route>
          <Route path="/appointment">
            <Appointment/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
           <Route path="/register">
            <Register/>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
