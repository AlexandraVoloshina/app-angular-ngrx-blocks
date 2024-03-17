import { createAction, props } from '@ngrx/store';

export const loadBlocks = createAction('[Blocks] Load Blocks', props<{ page: number }>());
export const loadCurrentBlocks = createAction('[Blocks] Load Blocks', props<{ currectBlock: number }>());
export const blocksLoaded = createAction('[Blocks] Blocks Loaded', props<{ blocks: any[] }>());
export const loadBlockByNumber = createAction('[Blocks] Load Block By Number', props<{ currentBlock: string }>());
export const blockLoaded = createAction('[Blocks] Block Loaded', props<{ block: any }>());
export const blockLoadError = createAction('[Blocks] Block Load Error', props<{ error: any }>());