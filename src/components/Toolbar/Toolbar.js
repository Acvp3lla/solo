//src componets/Toolbar/Toolbar.js
import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css'
import applogo from './../../solo-logo.png';
import Searchbar from '../Forms/Searchbar';

const Toolbar = props =>(
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      
      <div className="space"></div>

      <div className="toolbar__logo">
      <a href="/">
      <img src={applogo} className="logo" alt="logo" />
      </a>
      </div>

      <div className="toolbar__navigation-items">
        <ul>
          <li><a href="/">Shop</a></li>
          <li><a href="/">News</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>

      <div className="spacer"></div>
      
      <div>
        <Searchbar/>
      </div>
    </nav>
  </header>
);

export default Toolbar;