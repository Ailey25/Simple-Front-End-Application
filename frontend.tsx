import * as React from 'react';
import * as ReactDOM from 'react-dom';

class AddViewButton extends React.Component <{}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
       <button id="add-view">Add View</button>
    );
  }
}
//
// ReactDOM.render(
//   <AddViewButton />,
//   document.getElementById('root'),
// );

ReactDOM.render(
  <AddViewButton />,
  document.getElementById('list-view'),
);
