import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as BlocksActions from './blocks.actions';
import { BlocksService } from '../services/blocks.service';

@Injectable()
export class BlocksEffects {
  loadBlocks$ = createEffect(() => this.actions$.pipe(
    ofType(BlocksActions.loadBlocks),
    switchMap(({ page }) =>
      this.blocksService.getBlocks(page).pipe(
        map(blocks => BlocksActions.blocksLoaded({ blocks })),
        catchError(error => of(BlocksActions.blockLoadError({ error })))
      )
    )
  ));

  loadBlockByNumber$ = createEffect(() => this.actions$.pipe(
    ofType(BlocksActions.loadBlockByNumber),
    switchMap(({ currentBlock }) =>
      this.blocksService.getBlockByNumber(currentBlock).pipe(
        map(block => BlocksActions.blockLoaded({ block })),
        catchError(error => of(BlocksActions.blockLoadError({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private blocksService: BlocksService
  ) {}
}