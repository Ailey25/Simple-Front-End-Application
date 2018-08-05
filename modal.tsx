import React from 'react';

export default class Modal extends React.Component {
  private backdropStyle: any;
  private modalStyle: any;

  constructor(props: any) {
    super(props);

    // The gray background
    this.backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    this.modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    }
  }


  render() {
    // Render nothing if the "show" prop is false
    // if(!this.props.show) {
    //   return null;
    // }



    return (
      <div className="backdrop" style={this.backdropStyle}>
        <div className="modal" style={this.modalStyle}>
          <div className="footer">
            <button>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}
