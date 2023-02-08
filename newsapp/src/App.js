import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={10}
        
      />
        <News/>
      
      </div>
    )
  }
}
