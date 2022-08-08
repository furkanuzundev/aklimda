import * as types from './types';

export interface NotesState {
  list: NoteProps[];
  searchText: string;
}

const initialState: NotesState = {
  list: [],
  searchText: null,
};

export default function (
  state = initialState,
  action: { type: any; payload: any; error: any }
) {
  const { type, payload, error } = action;

  switch (type) {
    case types.ADD_NOTE:
      return {
        ...state,
        list: [...state.list, payload],
      };
    case types.UPDATE_ITEM:
      return {
        ...state,
        list: payload,
      };
    case types.SET_SEARCH:
      return {
        ...state,
        searchText: payload,
      };
    default:
      return state;
  }
}
