import React from 'react';
import Header from '../Header/Header.jsx';

class Main extends React.Component {
  render() {
    const a = ['E','T','L'];
    return (
      <div>
        <Header />
        {a.map(item => { return <div>{[...a]}</div> })}
      </div>
    );
  }
}

export default Main;