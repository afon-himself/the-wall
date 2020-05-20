import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  render() {
    return (
      <div className="list">
        {this.props.bricks.map(brick => <ListItem key={brick.id} data={brick} />)}
      </div>
    );
  }
}

export default List;
