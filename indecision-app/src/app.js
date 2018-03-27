
class IndecisionApp extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      options: props.options
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  // fired when component is loaded in the browser
  componentDidMount()
  {
    console.log("componentDidMount => Fetching Data");
  }

  // fired when component is updated (either props or state)
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate => Saving Data");
  }

  // fired when the component is removed from the DOM
  componentWillUnmount()
  {
    console.log('componentWillMount');
  }

  handleDeleteOptions()
  {
    //                                   args | wrap obj | obj to return | 
    // this can be done as this.setState( () =>  (        { options: [] }  ) )
    // this.setState(() =>
    // {
    //   return { options: [] };
    // });
    this.setState( () => ( { options: [] } ) );
  }

  handleDeleteOption( optionToRemove )
  {
    console.log("Deleting Single Option " + optionToRemove);
    this.setState( (prevState) => ({
      // If the condition returns true, then that item will remain in the list.  
      options: prevState.options.filter( (option) => {
        return optionToRemove !== option;
      })
    }) );// end of setState
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

    // this.setState((prevState) => {
    //   console.log("Pushing:", option);
    //   return { options: prevState.options.concat( [option] ) };
    // });
    this.setState((prevState) => ( { options: prevState.options.concat([option]) } ));
    
  }

  handlePick() 
  {
    const rand = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rand];
    console.log("Random Value", option);
    alert(option);
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
            handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) =>
{
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: 'Default Project Title'
};

// class Header extends React.Component
// {
//   render()
//   {
//     console.log(this.props);
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }


const Action = (props) =>
{
  return (
    <div>
      <button onClick={props.handlePick}
        disabled={!props.hasOptions}>
        What should I do?
        </button>
    </div>
  );
};

// class Action extends React.Component
// {
  
//   render()
//   {
//     return (
//       <div>
//         <button onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}>
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }


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
    
    this.setState(() => ( { error: err } ) );
    

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

const Option = (props) =>
{
  return (
    <div>
      {props.optionText}
      <button
          onClick={ (e) =>
          {
            props.handleDeleteOption(props.optionText);
          }}
      >
        remove
      </button>
    </div>
  );
};

// class Option extends React.Component
// {
//   render()
//   {
//     return (
//       <div>
//         {this.props.optionText }
//       </div>
//     );
//   }
// }

const Options = (props) =>
{
  return (
    <div>
      <ol>
        {
          props.options.map((item) => (
          <Option key={item} 
                  optionKey={item} 
                  optionText={item} 
                  handleDeleteOption={props.handleDeleteOption} 
          />
        
          ))
        }
      </ol>

      <button 
        onClick={props.handleDeleteOptions}
        disabled={!props.options.length}
      >
        Remove All
      </button>
    </div>
  );
}

// /*
//  * The component state makes the component re-render when is 
//  * modified
// */
// class Options extends React.Component
// {
//   // the props passed here is the same as this.props
//   // super(props) is the bare minimum to overwrite the constructor
//   constructor(props)
//   {
//     super(props);
//     // adding bind(this) binds the method to the given object
//     //this.handleRemoveAll = this.handleRemoveAll.bind(this);
//   }

//   render()
//   {
//     return (
//       <div>
//         <ol>
//           {
//             this.props.options.map((item) => <Option key={item} optionKey={item} optionText={item} />)
//           }
//         </ol>
        
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//       </div>
//     );

//   }
// }

// Stateless Function Component
// They are faster than class based component
// Easier to read and write
// If it has just the render method then it might be a good candidate for a stateles function compomemt
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };
// ReactDOM.render(<User name='Oscar' age={48} />, document.getElementById('app'));

ReactDOM.render(<IndecisionApp options={['Option One', 'Option Two']}/>, document.getElementById('app'));