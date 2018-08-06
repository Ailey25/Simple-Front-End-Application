import * as React from 'react';
import * as ReactDOM from 'react-dom';
export { PhraseList };

// Interfaces
// Props and state
interface PhraseListProps {
  phraseArray: Array<string>;
  handleDeletePhrase: ((event: React.FormEvent) => void);
}

interface PhraseListState {}

// PhraseList that displays the phrases in array (passed from parent)
class PhraseList extends React.Component<PhraseListProps, PhraseListState> {
  constructor(props: PhraseListProps) {
    super(props);

    this.listItems = this.listItems.bind(this);
  }

  // Converts array items to <li> items
  private listItems() {
    const items = this.props.phraseArray.map((phrase: string, index: number) => {
      return(
        <li key={index + 1}>
          <span>
            <text>{phrase}</text>
            <button
              value={index}
              onClick={this.props.handleDeletePhrase}>x</button>
          </span>
        </li>
      );
    });
    return items;
  }

  public render() {
    if (this.props.phraseArray === undefined || this.props.phraseArray.length === 0) {
      return (
        <text>No Phrases</text>
      );
    } else {
      return (
        <ol>
          {this.listItems()}
        </ol>
      );
    }
  }
}
