"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: props.options
    };
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    return _this;
  }

  // fired when component is loaded in the browser


  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("componentDidMount => Fetching Data");
    }

    // fired when component is updated (either props or state)

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log("componentDidUpdate => Saving Data");
    }

    // fired when the component is removed from the DOM

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('componentWillMount');
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      //                                   args | wrap obj | obj to return | 
      // this can be done as this.setState( () =>  (        { options: [] }  ) )
      // this.setState(() =>
      // {
      //   return { options: [] };
      // });
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      console.log("Deleting Single Option " + optionToRemove);
      this.setState(function (prevState) {
        return {
          // If the condition returns true, then that item will remain in the list.  
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      }); // end of setState
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      // if is an empty string, return an error message
      // if everything goes well then it returns an 'undefined'
      // else it return an error message to the AddOption object
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) >= 0) {
        return 'This option already exists';
      }

      // this.setState((prevState) => {
      //   console.log("Pushing:", option);
      //   return { options: prevState.options.concat( [option] ) };
      // });
      this.setState(function (prevState) {
        return { options: prevState.options.concat([option]) };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var rand = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[rand];
      console.log("Random Value", option);
      alert(option);
    }
  }, {
    key: "render",
    value: function render() {
      var title = 'Indecision';
      var subtitle = 'Put your life in the hands of a computer';

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      "h2",
      null,
      props.subtitle
    )
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


var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handlePick,
        disabled: !props.hasOptions },
      "What should I do?"
    )
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


var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(event) {
      // Stops refreshing the whole page
      event.preventDefault();
      // getting the value of the input text called 'option' in the 
      // target which is the form itself
      var option = event.target.elements.option.value.trim();
      var err = this.props.handleAddOption(option);
      console.log("Setting the state to ", err);

      this.setState(function () {
        return { error: err };
      });

      event.target.elements.option.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.optionText,
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      "remove"
    )
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

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "ol",
      null,
      props.options.map(function (item) {
        return React.createElement(Option, { key: item,
          optionKey: item,
          optionText: item,
          handleDeleteOption: props.handleDeleteOption
        });
      })
    ),
    React.createElement(
      "button",
      {
        onClick: props.handleDeleteOptions,
        disabled: !props.options.length
      },
      "Remove All"
    )
  );
};

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

ReactDOM.render(React.createElement(IndecisionApp, { options: ['Option One', 'Option Two'] }), document.getElementById('app'));
