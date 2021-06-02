import React from 'react';
import { Route } from 'react-router-dom';
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
        <Route path="/messages"  component={Dialogs} />
        <Route path="/profile" exact component={Content} />
      </div>

      <footer></footer>
    </div>
  );
}


export default App;
