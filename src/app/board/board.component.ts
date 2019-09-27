import {Component, Input, OnInit} from '@angular/core';
import {ListsStateService} from '../services/lists-state.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public searchText: string;
  public lists;

  constructor(private listsStateService: ListsStateService) { }

  ngOnInit() {
    this.lists = this.listsStateService.taskLists;
  }

  public removeItem(args) {
    this.listsStateService.removeItem(args);
  }
}
