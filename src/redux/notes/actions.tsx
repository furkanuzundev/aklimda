import * as types from './types';

export const addNote = (note: NoteProps) => ({
  type: types.ADD_NOTE,
  payload: note,
});

export const updateList = (list: NoteProps[]) => ({
  type: types.UPDATE_ITEM,
  payload: list,
});

export const setSearch = (searchText: string) => ({
  type: types.SET_SEARCH,
  payload: searchText,
});
