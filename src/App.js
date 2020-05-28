import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/BackDrop/Backdrop';
import Banner from './components/Body/Banner/Banner';

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


          <div className="container">

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus 
              error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non 
              numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
              nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
              quo voluptas nulla pariatur?
            </p>

            {/* <div className='parallax'>
              
            </div> */}

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus 
              error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non 
              numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
              nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
              quo voluptas nulla pariatur?
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus 
              error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non 
              numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
              nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
              quo voluptas nulla pariatur?
            </p>

          </div>

          {/* <Banner/>

          <div className='spacer'></div>

          <div className='add-info'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br> 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br></br>
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className='spacer'></div>

          <div className='add-info2'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br> 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br></br>
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div> */}

        </header>
      </div>
    );
  }  
}

export default App;
