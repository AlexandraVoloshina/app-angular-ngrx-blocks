import { Component, OnInit, HostListener } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadBlocks, blocksLoaded } from '../../store/blocks.actions'; // Import from actions
import { selectBlocks } from '../../store/blocks.selectors';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'] // Use styleUrls instead of styleUrl
})
export class Page1Component implements OnInit {
  blocks$: Observable<any[]>;
  currentPage = 1;

  constructor(private store: Store) {
    this.blocks$ = store.pipe(select(selectBlocks));
  }

  ngOnInit(): void {
    this.loadBlocks();
  }

  loadBlocks(): void {
    this.store.dispatch(loadBlocks({ page: this.currentPage })); // Pass the current page
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.currentPage++; // Increment current page
      this.loadBlocks();
    }
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }
}