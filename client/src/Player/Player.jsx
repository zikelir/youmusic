import React from 'react';
import { connect } from 'react-redux';
import { loadPlayer } from './playerActions';
import { bindActionCreators } from 'redux';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null
    };

    // this.play = this.play.bind(this);
    // this.pause = this.pause.bind(this);
  }

  componentDidMount() {
    let loadYT;
    if (!loadYT) {
      loadYT = new Promise((resolve) => {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
        window.onYouTubeIframeAPIReady = () => resolve(window.YT)
      })
    }
    loadYT.then((YT) => {
      this.player = new YT.Player(this.youtubePlayerAnchor, {
        height: this.props.height || 390,
        width: this.props.width || 640,
        playerVars: { 
          'autoplay': 0,
          'controls': 1,
          'list': 'PLAnnL_sV0acdpmHTymRpj-Mic7e5eMJbj'
        },
        // events: {
        //   onStateChange: this.onPlayerStateChange
        // }
      });

      // call the action to make this global
      this.props.loadPlayer(this.player);
      // this.setState({ player: this.player});


    });
  }

    onPlayerStateChange(e) {
      if (typeof this.props.onStateChange === 'function') {
        this.props.onStateChange(e) || null;
    }
  }

  // play() {
  //   this.state.player !== null ? this.state.player.playVideo() : 0;
  // }

  // pause() {
  //   this.state.player !== null ? this.state.player.pauseVideo() : 0;
  // }

  render() {
    return (
      <section className='youtubeComponent-wrapper'>
        <div ref={(r) => { this.youtubePlayerAnchor = r }}></div>
        {/* <button onClick={ this.play }>play</button>
        <button onClick={ this.pause }>pause</button> */}
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({ loadPlayer }, dispatch)
};

export default connect(null, mapDispatchToProps)(Player);