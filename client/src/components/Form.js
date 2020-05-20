import React from 'react';

class Form extends React.Component {
  state = {
    text: ''
  }
  onInputChange = e => this.setState({[e.target.name]: e.target.value});
  onButtonClick = () => this.props.addNewBrick(this.state.text);
  render = () => {
    const { text } = this.state;

    return (
      <div className="form">
        <input className="form__input" type="text" value={text} name="text" onChange={this.onInputChange} />
        <button className="form__button" onClick={this.onButtonClick}>Send message</button>
      </div>
    );
  }
}

export default Form;
