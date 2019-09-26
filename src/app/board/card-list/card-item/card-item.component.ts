import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from '../../../models/Card';
import {User} from '../../../models/User';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements Card {
  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: User;

  @Input() public card: any;
  @Output() public remove = new EventEmitter();

  public onRemove() {
    this.remove.emit(this.card);
  }
}
