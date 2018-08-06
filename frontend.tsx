import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AddPhraseModal } from './addPhraseModal';
import { PhraseList } from './phraseList';

// Interfaces
interface PhraseStorageProps {}

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
    this.handleDeletePhrase = this.handleDeletePhrase.bind(this);
  }

  private openModal(event: React.MouseEvent): void {
    this.setState({modalIsOpen: true});
  }

  public closeModal(event: React.MouseEvent | React.FormEvent): void {
    this.setState({modalIsOpen: false});
  }

  // Adds phrase to storage
  public handleAddPhrase(phrase: string): void {
    this.setState((prevState) => ({
      phrases: [...prevState.phrases, phrase],
    }));
  }

  // Deletes phrase in storage
  public handleDeletePhrase(event: React.FormEvent): void {
    const target = event.target as HTMLInputElement;
    const index: number = parseInt(target.value);

    const firstHalf: Array<string> = this.state.phrases.slice(0, index);
    const secondHalf: Array<string> = this.state.phrases.slice(index + 1);
    const newPhraseArray: Array<string> = [...firstHalf, ...secondHalf];

    this.setState({phrases: newPhraseArray});
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
        <PhraseList
          phraseArray={this.state.phrases}
          handleDeletePhrase={this.handleDeletePhrase}/>
      </section>
    );
  }
}

ReactDOM.render(
  <PhraseStorage />,
  document.getElementById('list-view'),
);
