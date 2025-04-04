import { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

class CardList extends Component {
  generateList(list) {
    return list.map(monster => {
      return <Card monster={monster} />;
    });
  }

  render() {
    const { monsters } = this.props;
    return <div className="card-list">{this.generateList(monsters)}</div>;
  }
}

export default CardList;
