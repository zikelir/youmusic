import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators, combineReducers } from "redux";
import playerReducer from '../Player/playerReducers';

class Deck extends React.Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false
    }

    this.playVideo = this.playVideo.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
  }

  playVideo() {
    this.props.playerReducer ? this.props.playerReducer.playVideo() : null;
    this.setState({ isPlaying: true });
  }

  pauseVideo() {
    this.props.playerReducer ? this.props.playerReducer.pauseVideo() : null;
    this.setState({ isPlaying: false });
  }

  render() {
    return (
      <div className="deck">
        {
          this.state.isPlaying
          ? <div className='deck__button--pause' onClick={this.pauseVideo}></div>
          : <div className='deck__button--play' onClick={this.playVideo}></div>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ playerReducer }) => ({ playerReducer });
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({})
// };

export default connect(mapStateToProps, null)(Deck);