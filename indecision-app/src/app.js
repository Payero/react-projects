class IndecisionApp extends React.Component
{
  constructor()
  {
    super();
    
  }

  render()
  {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['One', 'Two', 'Three'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
        <button>What should I do?</button>
      </div>
    );
  }
}

class AddOption extends React.Component
{

  render()
  {
    return (
      <div>
        <input type='text'></input>
        <button>Add Option</button>
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


class Options extends React.Component
{

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

      </div>
    );

  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));