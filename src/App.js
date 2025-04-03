import { Component } from 'react';
import UserCard from './components/user-card.component';
import './App.css';

class App extends Component {
  state = {
    users: [
      { id: 1, name: 'Alina', age: 25, city: 'Amster', isOnline: true },
      { id: 2, name: 'John', age: 30, city: 'Berlin', isOnline: false },
      { id: 3, name: 'Sara', age: 22, city: 'Paris', isOnline: true },
    ],
  };

  generateList(list) {
    const { users } = this.state;

    const generatedList = users.map(user => {
      return (
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
          city={user.city}
          isOnline={user.isOnline}
        />
      );
    });
    return generatedList;
  }

  render() {
    const listOfUsers = this.generateList(this.state.users);
    return <div className="App">{listOfUsers}</div>;
  }
}

export default App;
