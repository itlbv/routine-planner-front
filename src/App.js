import React from 'react';
import './App.css';
import NavBar from './Navigation/NavBar/NavBar';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <div style={{height: 400}}>Main content</div>
        <Footer/>
    </div>
  );
}

export default App;
