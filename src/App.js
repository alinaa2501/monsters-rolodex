import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  filterMonsters() {
    const { monsters, searchField } = this.state;

    return monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
  }

  render() {
    const filteredMonstersList = this.filterMonsters();

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={this.handleSearchChange}
          placeholder="search monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filteredMonstersList} />
      </div>
    );
  }
}

export default App;
