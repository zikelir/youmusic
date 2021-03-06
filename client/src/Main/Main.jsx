import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Home from '../Home/Home.jsx';
import Playlists from '../Playlists/Playlists.jsx';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
          <Route exact path="/" component={Home}/>
          <Route exact path="/playlists" component={Playlists}/>
      </div>
    );
  }
}

export default Main;