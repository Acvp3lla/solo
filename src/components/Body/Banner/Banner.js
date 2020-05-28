import React from 'react';
import logo from '../../../solo-files/solo-logo.png';
import arrow from '../../../solo-files/arrow.png';
import './Banner.css';

class Banner extends React.Component{

    render(){
        return(
            <div className='banner'>
            <img src={logo} className="splash" alt="logo" />
            <p>Embrace Life</p>
            <img src={arrow} className='arrow' alt='nav-pointer'/>
          </div>
        );
    }
}



export default Banner;
