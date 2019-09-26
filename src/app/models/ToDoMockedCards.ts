import { Card } from './Card';
import { user } from './MockedUser';

export const toDoMockedCards: Card[] = [
  {id: '1', name: 'Todo', description: 'Do task 1', dueDate: '10/12/2019', assignee: user},
  {id: '2', name: 'To be done', description: 'Do task 2', dueDate: '12/12/2019', assignee: user},
  {id: '3', name: 'Must do!', description: 'Do task 3', dueDate: '9/12/2019', assignee: user},
];
