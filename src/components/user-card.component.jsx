import { Component } from 'react';

class UserCard extends Component {
  render() {
    const { name, age, city, isOnline } = this.props;

    return (
      <div>
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
        <p>City: {city}</p>
        <p>{isOnline ? '🟢 Online' : '🔴 Offline'}</p>
      </div>
    );
  }
}

export default UserCard;
