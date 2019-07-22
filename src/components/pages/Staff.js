import React, { Component } from "react";

class Staff extends Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://reqres.in/api/login";
    const response = await fetch(url);
    const result = await response.json();
    this.setState({ people: result.data, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.people ? (
          <div>loading...</div>
        ) : (
          <div>
            <ul>
              {this.state.people.map((person, i) => (
                <li key={person.name + person.year}>
                  Name: {person.name} Year: {person.year} | Color:{" "}
                  {person.color} | Pantone value: {person.pantone_value}
                </li>
              ))}
            </ul>
            <div />
          </div>
        )}
      </div>
    );
  }
}

export default Staff;
