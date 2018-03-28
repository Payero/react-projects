import React from 'react';

import Option from './Option';

const Options = (props) => {
  return (
    <div>
      {props.options.length === 0 && <p>Please add and option to get started!</p>}
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

export default Options;
