import React from 'react';

class Deck extends React.Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false
    }
  }

  render() {
    return (
      <div className="deck">
        {
          this.state.isPlaying
          ? <div className='deck__button--pause'></div>
          : <div className='deck__button--play'></div>
        }
      </div>
    );
  }
}

export default Deck;