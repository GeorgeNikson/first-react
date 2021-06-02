import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app_wrapper_content">
        <Dialogs />
        {/* <Content /> */}
      </div>
      
      <footer></footer>
    </div>
  );
}


export default App;
