import React from 'react';
import './App.css';
import NavBar from './components/Navigation/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Users from './containers/Users/Users';
import Routines from './containers/Routines/Routines';
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
