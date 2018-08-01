import React from 'react';
import Player from '../Player/Player.jsx';
import Deck from '../Deck/Deck.jsx';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__video">
          <Player /> {/* <iframe className="home__video-frame" src="https://www.youtube.com/watch?v=b16fys0awu8&index=17&list=PLLzyoMBk3rplw4cVm6ZgxbDE6HIL-pVEL" frameBorder="0"/> */}
        </div>
        <Deck/>
      </div>
    );
  }
}

export default Home;