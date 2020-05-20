import React from 'react';

import Form from './components/Form';
import List from './components/List';

class App extends React.Component {
  state = {
    bricks: []
  }
  componentDidMount() {
    this.fetchAllBricks();
  }
  fetchAllBricks = () => {
    fetch('/api/bricks').then(response => response.json()).then(bricks => {
      this.setState({ bricks });
    });
  }
  addNewBrick = (text) => {
    fetch('/api/bricks', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(() => this.fetchAllBricks());
  }
  render() {
    const { bricks } = this.state;

    return (
      <div className="app">
        <h1 className="title">
          <span>another brick in the </span>The Wall
        </h1>
        <Form addNewBrick={this.addNewBrick} />
        <List bricks={bricks} />
      </div>
    );
  }
}

export default App;
