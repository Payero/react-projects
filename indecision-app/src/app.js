
class IndecisionApp extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      options: []
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  handleDeleteOptions()
  {
    this.setState(() =>
    {
      return { options: [] };
    });
  }

  handleAddOption(option) 
  {
    // if is an empty string, return an error message
    // if everything goes well then it returns an 'undefined'
    // else it return an error message to the AddOption object
    if( !option )
    {
      return 'Enter valid value to add item'
    }
    else if(this.state.options.indexOf(option) >= 0 )
    {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      console.log("Pushing:", option);
      return { options: prevState.options.concat( [option] ) };
    });
  }

  handlePick() 
  {
    const rand = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rand];
    console.log("Random Value", option);
  }

  render()
  {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}    
        />
        <Options 
            options={this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class Header extends React.Component
{
  render()
  {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}



class Action extends React.Component
{
  
  render()
  {
    return (
      <div>
        <button onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}>
          What should I do?
        </button>
      </div>
    );
  }
}

class AddOption extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(event)
  {
    // Stops refreshing the whole page
    event.preventDefault();
    // getting the value of the input text called 'option' in the 
    // target which is the form itself
    const option = event.target.elements.option.value.trim();
    const err = this.props.handleAddOption(option);
    console.log("Setting the state to ", err)
    this.setState( () => 
    {
      return { error: err};
    });

    event.target.elements.option.value = '';
    
    
  }

  render()
  {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class Option extends React.Component
{
  render()
  {
    return (
      <div>
        {this.props.optionText }
      </div>
    )
  }
}

/*
 * The component state makes the component re-render when is 
 * modified
*/
class Options extends React.Component
{
  // the props passed here is the same as this.props
  // super(props) is the bare minimum to overwrite the constructor
  constructor(props)
  {
    super(props);
    // adding bind(this) binds the method to the given object
    //this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  render()
  {
    let i = 0;
    return (
      <div>
        <ol>
          {
            this.props.options.map((item) => <Option key={item} optionKey={item} optionText={item} />)
          }
        </ol>
        
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      </div>
    );

  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));