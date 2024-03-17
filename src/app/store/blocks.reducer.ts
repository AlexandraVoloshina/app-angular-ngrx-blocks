import { createReducer, on } from '@ngrx/store';
import * as BlocksActions from './blocks.actions';

export const blocksFeatureKey = 'blocks';

export interface State {
  blocks: any[];
  loading: boolean;
  error: any;
  page: number; // Add page property,
  currentBlock: number;
}

export const initialState: State = {
  blocks: [],
  loading: false,
  error: null,
  page: 1, // Initial page number,
  currentBlock: 1
};

export const reducer = createReducer(
  initialState,
  on(BlocksActions.loadBlocks, (state, { page }) => ({
    ...state,
    loading: true,
    currentPage: page // Update currentPage to the specified page
  })),
  on(BlocksActions.blocksLoaded, (state, { blocks }) => ({
    ...state,
    blocks: [...state.blocks, ...blocks], // Append new blocks to existing ones
    loading: false
  })),
  on(BlocksActions.loadBlockByNumber, (state, { currentBlock }) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(BlocksActions.blockLoaded, (state, { block }) => ({
    ...state,
    currentBlock: block,
    loading: false, // Update loading state
    error: null
  })),
  on(BlocksActions.blockLoadError, (state, { error }) => ({
    ...state,
    currentBlock: 1,
    loading: false, // Update loading state
    error: error
  }))
);