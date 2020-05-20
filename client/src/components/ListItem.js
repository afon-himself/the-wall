import React from 'react';

class ListItem extends React.Component {
  render() {
    return <p className="list-item">{this.props.data.text}</p>;
  }
}

export default ListItem;
