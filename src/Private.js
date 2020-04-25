import React, { Component } from "react";

class Private extends Component {
  state = {
    message: "",
  };

  componentDidMount() {
    fetch("/private", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network Response Not OK.");
      })
      .then((response) => {
        console.log(response);

        this.setState({ message: response.message });
      })
      .catch((error) => this.setState({ message: error.message }));

    console.log(this.state.message);
  }

  render() {
    return <p>{this.state.message}</p>;
  }
}

export default Private;
