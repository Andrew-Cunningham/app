import React, { Component } from 'react';
// import '../reset.css';
import '../App.css';
import router from '../router';
import {Link} from 'react-router-dom';
import logo from '../logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        
       <div className="App-header">
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
          <img src={logo} className="App-logo" alt="sup" />
           SHELFIE
          
       </div>
        <div className="ShelfA">
          <div className="ShelfAText">Shelf A</div>
          </div>
        <div className="ShelfB">
        <div className="ShelfBText">Shelf B</div>
        </div>
        <div className="ShelfC">
        <div className="ShelfCText">Shelf C</div>
        </div>
        <div className="ShelfD">
          <div className="ShelfDText">Shelf D</div></div>

       {router}
     </div>
    );
  }
}

export default App;
