//src: ./components/Forms/Searchbar.js
import React from 'react';
import './Searchbar.css';

class Searchbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value : event.target.value});
        //console.log(event.target.value);
    }

    handleSubmit(event){
        alert('You shearched for: '+ this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form className='searchBar' onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Search' value={this.state.value} onChange={this.handleChange}/>
            </form>
        );
    }
}

export default Searchbar;
