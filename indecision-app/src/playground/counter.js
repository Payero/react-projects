
/**
 * The five steps to set the state
 *  1- Setup default state object
 *  2- Component rendered with default values *
 *  3- Change state based on event such as click button
 *  4- Component re-rendered using new state values *
 *  5- Start again at step 3
 * 
 * (*) means that was automatic
 * 
 * If you have multiple pieces in the state, you do not need to return
 * all of them just the ones that needs to be modified
 */
class Counter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    
    this.state =
    {
      count: props.count
    }; 
  }

  // fires up when the component is loaded in the browser
  componentDidMount()
  {
    
    const num = parseInt(localStorage.getItem('count'));
    console.log("Fetching Data", num);
    // if is a number, then store it in the state
    if( !isNaN( num ) )
      this.setState( () => ({ count: num }));
  }

  // gets invoked when either the props or the state is updated
  componentDidUpdate(prevProps, prevState)
  {
    console.log("Saving Data");
    if( prevState.count !== this.state.count )
      localStorage.setItem('count', this.state.count);
  }

  handleAddOne()
  {
    console.log("Adding to the counter: " + this.state.count);
    this.setState( (prevState) =>
    {
      return { count: prevState.count + 1 }
    });
  }

  handleMinusOne() 
  {
    console.log("Removing to the counter: " + this.state.count);
    // Updates the component it does not replace it
    this.setState((prevState) => {
      return { count: prevState.count - 1 }
    });
  }

  handleReset() 
  {
    console.log("Resetting to the counter: " + this.state.count);
    // In this case we are not using the previous state so we can ignore it
    this.setState(() => {
      return { count: this.props.count }
    });
  }


  render()
  {
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter count={0}/>, document.getElementById('app'));
