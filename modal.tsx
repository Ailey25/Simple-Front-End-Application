import * as React from 'react';
import * as ReactDOM from 'react-dom';
export { Modal };

// Interfaces
// Props and state
interface ModalProps {
  isOpen: boolean;
  closeModal: ((event: React.MouseEvent) => void);
  addPhrase: () => string;
}

interface ModalState {

}

class Modal extends React.Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
  }

  render() {
    // Render nothing if isOpen is false
    if(!this.props.isOpen) {
      return null;
    }

    return (
      <section className="backdrop">
        <form className="modal">
          <label>Phrase</label>
          <input id="input-phrase"
            onSubmit={this.props.addPhrase}></input>
          <input id="modal-submit"
            value="Add"
            type="submit"
            onSubmit={this.props.addPhrase}></input>
          <button id="modal-cancel"
            value="Cancel"
            onClick={this.props.closeModal}>Cancel</button>
        </form>
      </section>
    );
  }
}
