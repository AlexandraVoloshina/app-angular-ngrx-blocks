import { createFeatureSelector, createSelector } from '@ngrx/store';
import { blocksFeatureKey, State } from './blocks.reducer';

export const selectBlocksState = createFeatureSelector<State>(blocksFeatureKey);

export const selectBlocks = createSelector(
  selectBlocksState,
  (state: State) => state.blocks
);

export const selectCurrentBlock = createSelector(
  selectBlocksState,
  (state: State) => state.currentBlock
);