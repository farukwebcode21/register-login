import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

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
          <PrivateRoute path="/appointment">
            <Appointment/>
          </PrivateRoute>
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
