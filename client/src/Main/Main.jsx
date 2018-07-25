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
        <Route path="/" component={Home}/>
        <Route path="/p" component={Playlists}/>
      </div>
    );
  }
}

export default Main;