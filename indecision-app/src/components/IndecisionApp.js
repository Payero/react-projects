import React from 'react'

// components
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
  
  state = { 
    options: [], 
    selectedOption: undefined 
  };

  handleDeleteOptions = () => {
    //                                   args | wrap obj | obj to return | 
    // this can be done as this.setState( () =>  (        { options: [] }  ) )
    // this.setState(() =>
    // {
    //   return { options: [] };
    // });
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    console.log("Deleting Single Option " + optionToRemove);
    this.setState((prevState) => ({
      // If the condition returns true, then that item will remain in the list.  
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));// end of setState
  };

  handleAddOption = (option) => {
    // if is an empty string, return an error message
    // if everything goes well then it returns an 'undefined'
    // else it return an error message to the AddOption object
    if (!option) {
      return 'Enter valid value to add item'
    }
    else if (this.state.options.indexOf(option) >= 0) {
      return 'This option already exists';
    }

    // this.setState((prevState) => {
    //   console.log("Pushing:", option);
    //   return { options: prevState.options.concat( [option] ) };
    // });
    this.setState((prevState) => ({ options: prevState.options.concat([option]) }));

  };

  handlePick = () => {
    const rand = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rand];
    console.log("Random Value", option);
    if(option)
    {
      this.setState( () => ({ selectedOption: option }) );
    }
  };

  handleClearSelectepOption = () => {
    this.setState( () => ({ selectedOption: undefined}) );
  };

  // fired when component is loaded in the browser
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options)
        this.setState(() => ({ options: options }));
    }
    catch ({ error }) {
      // do nothing if the json options is invalid
    }
  };

  // fired when component is updated (either props or state)
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  };

  // fired when the component is removed from the DOM
  componentWillUnmount() {
    console.log('componentWillMount');
  };

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
          
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectepOption={this.handleClearSelectepOption}/>
      </div>
    );
  };
}
