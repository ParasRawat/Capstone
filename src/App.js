import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css'
import {Header} from './Header/Header.js'

import {MemeGenerator} from './MemeGenerator/MemeGenerator.js'

function App() {
  return (

    <div>
    <Header/>
    <MemeGenerator/>
    </div>


  );
}

//exporting in the form of named modules

export  {App};
