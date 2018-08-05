import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Modal from './modal';
//import * as ReactModal from 'react-modal';

// AddViewButton that controls Modal
class AddViewButton extends React.Component <{}> {
  constructor(props: any) {
    super(props);

    this.state = {
      modealIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(event: React.MouseEvent) {
    this.setState({modalIsOpen: true});
  }

  closeModal(event: React.MouseEvent) {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div id="add-view">
       <button id="add-view-button" onClick={this.openModal}>Add View</button>
       <Modal>

       </Modal>
      </div>
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
