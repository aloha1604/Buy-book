import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Dangnhap from './Component/Dangnhap/dangnhap'
import Dangky from './Component/Dangky/dangky'
import Home from './Component/Home/home'
import Menu from './Component/nav/menu'

class App extends Component{
    constructor(props) {
      super(props);
      this.state = {
        logged: false
      };
    }
    render(){
      return (
        <Router>
          <div className="App">
            <Menu/>
            <Route exact path="/" component={Home} />
            <Route exact path="/dangky" component={Dangky} />
            <Route exact path="/dangnhap" component={Dangnhap} />
          </div>
        </Router>    
      )
    }
}


export default App;
