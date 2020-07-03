import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/BackDrop/Backdrop';
import Banner from './components/Body/Banner/Banner';
//import Lorem from './components/Body/Elements/Lorem';
//import photo from './solo-files/photo1.jpg';
//import arrow from './solo-files/arrow.png';


class App extends React.Component{

  //Navigation Bar/////////////////////////////////////
  state = {
    SideDrawerOpen: false
  };

  DrawerToggleClickHandler = () =>{
    this.setState((prevState)=> {
      return {SideDrawerOpen: !prevState.SideDrawerOpen}
    });
  };

  backdropClickHandler = () =>{
    this.setState({SideDrawerOpen: false})
  }
  ///////////////////////////////////////////////////////
  
  render(){

    let backdrop;
    
    if(this.state.SideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div className="App">
  
        {/*Nav Bar*/}
        <Toolbar drawerClickHandler={this.DrawerToggleClickHandler}/>
        <SideDrawer show={this.state.SideDrawerOpen}/>
        {backdrop}
        {/*Nav Bar*/}
  
        <header className="App-header">
          <div className="banner">
          <Banner/>
          </div> 

          <div className="container">
          
            {/* <Lorem className='lo'/> */}
            <h1 className='quote'>What are you passionate about?</h1>
            <div className='parallax'></div>
            {/* <Lorem/> */}
            <h1 className='quote'>What are your goals?</h1>
            <div className='parallax2'></div>
            {/* <Lorem/> */}
            <h1 className='quote'>With dedication they can all be achieved.</h1>           
            <div className='parallax3'></div>
            <div className='footer'>
              <h1>Designed by: ACV Technologies ©</h1>
            </div>
          </div>

        </header>
      </div>
    );
  }  
}

export default App;
