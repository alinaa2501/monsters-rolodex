import { Component } from 'react';
import './card-list.styles.css';
import './card.styles.css';

class CardList extends Component {
  generateList(list) {
    return list.map(monster => {
      const { name, email, id } = monster;

      return (
        <div className="card-container" key={id}>
          <img
            alt={`mosnter ${name}`}
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
          />
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      );
    });
  }

  render() {
    const { monsters } = this.props;
    return <div className='card-list'>{this.generateList(monsters)}</div>;
  }
}

export default CardList;
