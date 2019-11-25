import React , { Component } from 'react';
import './css/App.css';
import Home from './HomePage/Home';
import Dashboard from './DashboardPage/Dashboard';
import SignIn from './LoginPage/SignIn';
import PrivateRoute from './_components/PrivateRoute';
import PublicRoute from './_components/PublicRoute';
import { BrowserRouter, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
           <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" exact /> 
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;