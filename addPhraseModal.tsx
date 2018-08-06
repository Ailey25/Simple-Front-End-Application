import * as React from 'react';
import * as ReactDOM from 'react-dom';
export { AddPhraseModal };

// Interfaces
// Props and state
interface AddPhraseModalProps {
  isOpen: boolean;
  closeModal: ((event: React.MouseEvent | React.FormEvent) => void);
  handleAddPhrase: ((phrase: string) => void);
}

interface AddPhraseState {
  phrase: string;
}

// AddPhraseModal
class AddPhraseModal extends React.Component<AddPhraseModalProps, AddPhraseState> {
  constructor(props: AddPhraseModalProps) {
    super(props);
    this.state = {phrase: ''};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleInputChange(event: React.FormEvent): void {
    const target = event.target as HTMLInputElement;
    this.setState({
      phrase: target.value,
    });
  }

  private handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    this.props.handleAddPhrase(this.state.phrase);

    // Clear modal state when it closes
    this.setState({phrase: ''})
    this.props.closeModal(event);
  }

  public render() {
    // Render nothing if isOpen is false
    if(!this.props.isOpen) {
      return null;
    }

    return (
      <section className="backdrop">
        <form className="modal" onSubmit={this.handleSubmit}>
          <label>Phrase</label>
          <input id="input-phrase"
            type="text"
            value={this.state.phrase}
            onChange={this.handleInputChange}></input>
          <input id="modal-submit"
            type="submit"
            value="Add"></input>
          <button id="modal-cancel"
            value="Cancel"
            onClick={this.props.closeModal}>Cancel</button>
        </form>
      </section>
    );
  }
}
