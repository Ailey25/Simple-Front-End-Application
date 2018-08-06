import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AddPhraseModal } from './addPhraseModal';
import { PhraseList } from './phraseList';

// Interfaces
interface PhraseStorageProps {

}

interface PhraseStorageState {
  modalIsOpen: boolean;
  phrases: Array<string>;
}

// PhraseStorage that controls AddPhraseModal
class PhraseStorage extends React.Component <PhraseStorageProps, PhraseStorageState> {
  constructor(props: PhraseStorageProps) {
    super(props);

    this.state = {
      modalIsOpen: false,
      phrases: [],
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleAddPhrase = this.handleAddPhrase.bind(this);
  }

  private openModal(event: React.MouseEvent): void {
    this.setState({modalIsOpen: true});
  }

  private closeModal(event: React.MouseEvent | React.FormEvent): void {
    this.setState({modalIsOpen: false});
  }

  // AddPhraseModal passes its phrase as its state
  protected handleAddPhrase(phrase: string): void {
    this.setState((prevState) => ({
      phrases: [...prevState.phrases, phrase],
    }));
  }

  public render() {
    return (
      <section>
        <div id="add-view">
         <button id="add-view-button" onClick={this.openModal}>Add View</button>
         <AddPhraseModal
           isOpen={this.state.modalIsOpen}
           closeModal={this.closeModal}
           handleAddPhrase={this.handleAddPhrase} />
        </div>
        <PhraseList phraseArray={this.state.phrases} />
      </section>
    );
  }
}

ReactDOM.render(
  <PhraseStorage />,
  document.getElementById('list-view'),
);
