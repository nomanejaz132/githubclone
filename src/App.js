import React from 'react';
import NavBar from './components/NavBar'
import NavBarUnder from './components/NavBarUnder'
import MainBody from './components/MainBody'
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <NavBarUnder />
      <MainBody />
    </div>
  );
}

export default App;
