import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input() public searchText: string;
  @Input() public card: any;
  @Output() public remove = new EventEmitter();
  @Input() list: any;
  @Input() taskLists: any;

  public onRemove() {
    console.log(this.card);
    this.remove.emit(this.card);
  }
}
