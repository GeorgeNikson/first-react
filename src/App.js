import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <NavBar />
      <Content />
      
      <footer></footer>
    </div>
  );
}


export default App;
