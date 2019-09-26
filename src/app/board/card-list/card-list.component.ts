import {Component, Input} from '@angular/core';
import { CardList } from '../../models/CardList';
import { Card } from '../../models/Card';
import { toDoMockedCards } from '../../models/ToDoMockedCards';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements CardList {
  id: string;
  name: string;
  cards: Card[];

  @Input() public searchText: string;

  public mockedCards = toDoMockedCards;

  public removeCard(card: Card) {
    const index = this.mockedCards.indexOf(card);
    this.mockedCards.splice(index, 1);
  }
}
