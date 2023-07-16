import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

class Editable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.initialText,
      number: props.number,
      id: props.id,
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { text, number, id } = this.state;

    return (
      <p>
        {number}.{" "}
        <input
          type="text"
          value={text}
          onChange={this.handleChange}
          autoFocus
        />{" "}
        <button onClick={(e) => this.props.submitEdit(id, text)}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </p>
    );
  }
}

export default Editable;
