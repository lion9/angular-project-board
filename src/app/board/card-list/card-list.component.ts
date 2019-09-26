import {Component, Input} from '@angular/core';
import { CardList } from '../../models/CardList';
import { Card } from '../../models/Card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements CardList {
  id: string;
  name: string;
  cards: Card[];
  isDoneSection: boolean;

  @Input() public searchText: string;
  @Input() public list: string;

  private user = {
    id: '1',
    firstName: 'Artyom',
    lastName: 'Vecherov'
  };

  private backlogCards: Card[] = [
    {id: '1', name: 'Todo', description: 'Do task 1', dueDate: '10/12/2019', assignee: this.user},
    {id: '2', name: 'To be done', description: 'Do task 2', dueDate: '12/12/2019', assignee: this.user},
    {id: '3', name: 'Must do!', description: 'Do task 3', dueDate: '9/12/2019', assignee: this.user},
  ];

  private inProgressCards: Card[] = [
    {id: '1', name: 'Todo', description: 'Do task 1', dueDate: '10/12/2019', assignee: this.user},
    {id: '2', name: 'To be done', description: 'Do task 2', dueDate: '12/12/2019', assignee: this.user},
    {id: '3', name: 'Must do!', description: 'Do task 3', dueDate: '9/12/2019', assignee: this.user},
  ];

  private doneCards: Card[] = [
    {id: '1', name: 'Todo', description: 'Do task 1', dueDate: '10/12/2019', assignee: this.user},
    {id: '2', name: 'To be done', description: 'Do task 2', dueDate: '12/12/2019', assignee: this.user},
    {id: '3', name: 'Must do!', description: 'Do task 3', dueDate: '9/12/2019', assignee: this.user},
  ];

  public taskLists = [
    {
      id: '1',
      name: 'Backlog',
      cards: this.backlogCards,
      isDoneSection: false,
    },
    {
      id: '2',
      name: 'In progress',
      cards: this.inProgressCards,
      isDoneSection: false,
    },
    {
      id: '3',
      name: 'Done',
      cards: this.doneCards,
      isDoneSection: true,
    },
  ];


  public removeCard(card: Card) {
    const index = this.backlogCards.indexOf(card);
    this.backlogCards.splice(index, 1);
  }
}
