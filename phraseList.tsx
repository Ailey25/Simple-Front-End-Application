import * as React from 'react';
import * as ReactDOM from 'react-dom';
export { PhraseList };

// Interfaces
// Props and state
interface PhraseListProps {
  phraseArray: Array<string>;
}

interface PhraseListState {

}

// PhraseList that displays the phrases in array (passed from parent)
class PhraseList extends React.Component<PhraseListProps, PhraseListState> {
  constructor(props: PhraseListProps) {
    super(props);

    this.arrayToList = this.arrayToList.bind(this);
  }

  // Converts array items to <li> items
  private arrayToList() {
    const listItems = this.props.phraseArray.map((phrase: string) => {
      return(
        <li>
          <span>
            <text>{phrase}</text>
            <button>x</button>
          </span>
        </li>
      );
    });
    return (<li>{listItems}</li>);
  }

  public render() {
    if (this.props.phraseArray === undefined || this.props.phraseArray.length === 0) {
      return (
        <text>No Phrases</text>
      );
    } else {
      return (
        <ul>
          {this.arrayToList()}
        </ul>
      );
    }
  }
}
