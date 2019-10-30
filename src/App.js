import React from 'react';
import './App.css';
import NavBar from './Navigation/NavBar/NavBar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Users from './Users/Users';
import Routines from './Routines/Routines';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/routines'} component={Routines}/>
        <Route path={'/users'} component={Users}/>
        <Footer/>
    </div>
  );
}

export default App;
