import { Component } from 'react';
import './test.css';

class Store extends Component {
  constructor() {
    super();

    this.state = {
      books: [
        { id: 1, title: 'Harry Potter' },
        { id: 2, title: 'The Hobbit' },
        { id: 3, title: 'Dune' },
      ],
      searchField: '',
    };
  }

  generateList(list) {
    return list.map(book => {
      return (
        <div key={book.id}>
          <h1>{book.title}</h1>
        </div>
      );
    });
  }

  handleSearchBooks = event => {
    this.setState({ searchField: event.target.value }, () => console.log(this.state.searchField));
  };

  filterBooks() {
    const newList = this.state.books.filter(book =>
      book.title.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    );
    return newList;
  }

  render() {
    const filteredBooks = this.filterBooks();
    return (
      <div className="container">
        <input className="search-box" type="search" onChange={this.handleSearchBooks} />
        {this.generateList(filteredBooks)}
      </div>
    );
  }
}

export default Store;
