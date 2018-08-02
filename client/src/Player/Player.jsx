import React from 'react';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        videoId: this.props.YTid || 'M7lc1UVf-VE',
        playerVars: { 
          'autoplay': 0,
          'controls': 0,
        },
        events: {
          onStateChange: this.onPlayerStateChange
        }
      })
    })
  }

  onPlayerStateChange(e) {
    if (typeof this.props.onStateChange === 'function') {
      this.props.onStateChange(e)
    }
  }

  render() {
    return (
      <section className='youtubeComponent-wrapper'>
        <div ref={(r) => { this.youtubePlayerAnchor = r }}></div>
      </section>
    );
  }
}

export default Player;