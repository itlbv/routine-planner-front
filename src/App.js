import React from 'react';
import './App.css';
import NavBar from './Navigation/NavBar/NavBar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Users from './Users/Users';
import Routines from './Routines/Routines';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routines/>
        <Home/>
        <Users/>
        <Footer/>
    </div>
  );
}

export default App;
