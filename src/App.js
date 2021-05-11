import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

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
