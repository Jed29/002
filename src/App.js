import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/Home'
import Navbar from './components/navbar';
import Login from './views/Login';
import Register from './views/Register';

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path= '/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}