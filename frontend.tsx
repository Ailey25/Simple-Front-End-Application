import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Modal } from './modal';

// Interfaces
interface AddViewButtonProps {

}

interface AddViewButtonState {
  modalIsOpen: boolean;
}

// AddViewButton that controls Modal
class AddViewButton extends React.Component <AddViewButtonProps, AddViewButtonState> {
  constructor(props: AddViewButtonProps) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addPhrase = this.addPhrase.bind(this);
  }

  openModal(event: React.MouseEvent): void {
    this.setState({modalIsOpen: true});
  }

  closeModal(event: React.MouseEvent): void {
    this.setState({modalIsOpen: false});
  }

  addPhrase(): string {

    return 'test';
  }

  render() {
    return (
      <div id="add-view">
       <button id="add-view-button" onClick={this.openModal}>Add View</button>
       <Modal
         isOpen={this.state.modalIsOpen}
         closeModal={this.closeModal}
         addPhrase={this.addPhrase} />
         <input value={this.addPhrase()}></input>
      </div>
    );
  }
}

ReactDOM.render(
  <AddViewButton />,
  document.getElementById('list-view'),
);
