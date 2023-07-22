import React, { useState } from 'react';
import './Normalize.css';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

import Modal from './components/modal/Modal';

import data from './data.json';


function App() {

  return (
    <div className="App">
    <Header />
    <Main data={data}/>
    <Footer />
    </div>
  );
}

export default App;
