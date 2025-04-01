import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleSearchChange = event => {
    this.setState({ searchField: event.target.value }, () => {
      console.log(this.state.searchField);
    });
  };

  filterMonsters() {
    return this.state.monsters.filter(monster =>
      monster.name.toLocaleLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase()));
  }

  generateList(list) {
    return list.map(monster => {
      return (
        <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>
      );
    });
  }

  render() {
    const filteredMonstersList = this.filterMonsters();
    return (
      <div className="App">
        <input className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={this.handleSearchChange} />
        {this.generateList(filteredMonstersList)}
      </div>
    );
  }
}

export default App;
