//src: ./components/Forms/SelectForm.js
import React from 'react';

class SelectForm extends React.Component {
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
        alert('Your favourite flavour is: '+ this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form className='selectForm' onSubmit={this.handleSubmit}>
            <label>
                Pick your favourite flavour: 
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value='Grapefruit'>Grapefruit</option>
                    <option value='Lime'>Lime</option>
                    <option value='Coconut'>Coconut</option>
                    <option value='Mango'>Mango</option>
                </select>
            </label>
            <input type='submit' value='submit'/>
            </form>
        );
    }
}

export default SelectForm;
