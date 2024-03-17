import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadBlockByNumber } from '../../store/blocks.actions';
import { Observable } from 'rxjs';
import { selectCurrentBlock } from '../../store/blocks.selectors';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  selectedDate: Date = new Date();

  currentBlock$: Observable<any> = new Observable<any>();

  constructor(  private store: Store<{ blocks: { currentBlock: number } }>) {
    this.currentBlock$ = this.store.pipe(select(selectCurrentBlock));
  }

  ngOnInit(): void {
    this.store.dispatch(loadBlockByNumber({ currentBlock: '1' }));
    this.currentBlock$ = this.store.select(selectCurrentBlock);
  }

  onDateChange(event: any): void {
    let dateValue = event.getDay();
    this.loadData(dateValue);
  }

  private loadData(dateValue: string): void {
    this.store.dispatch(loadBlockByNumber({ currentBlock: dateValue }));
  }
}