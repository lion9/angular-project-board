import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input() public cards: any[];
  @Input() searchText: string;
  @Input() taskLists: any;
  @Output() public remove = new EventEmitter<any>();

  public onRemove(item: any) {
    console.log({
      cards: this.cards,
      item
    });
    this.remove.emit({
      cards: this.cards,
      item
      }
    );
  }
}
