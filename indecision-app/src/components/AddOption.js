import React from 'react';

export default class AddOption extends React.Component 
{
  state = {
    error: undefined
  };
  
  

  handleAddOption = (event) => {
    // Stops refreshing the whole page
    event.preventDefault();
    // getting the value of the input text called 'option' in the 
    // target which is the form itself
    const option = event.target.elements.option.value.trim();
    const err = this.props.handleAddOption(option);
    console.log("Setting the state to ", err)
    
    this.setState(() => ({ error: err }));

    if (!err)
      event.target.elements.option.value = '';

  };

  render() {
    
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type='text' name="option"></input>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  };
}
