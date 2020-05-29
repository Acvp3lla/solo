import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/BackDrop/Backdrop';
import Banner from './components/Body/Banner/Banner';
//import photo from './solo-files/photo1.jpg';


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

          <Banner/> 

          <div className="container">
            <div className='parallax'>
            
            </div>

            

            <p className='lorem'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus 
              error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <div className='parallax2'>
              
            </div>

            <p className='lorem'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus 
              error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <div className='parallax3'>
              
            </div>

          </div>

        </header>
      </div>
    );
  }  
}

export default App;
