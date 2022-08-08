import * as types from './types';
import moment from 'moment';

export interface NotesState {
  list: NoteProps[];
  searchText: string;
  sortOptions: SortOptions[];
  sortBy: number;
}

const initialState: NotesState = {
  list: [],
  searchText: null,
  sortOptions: [
    {
      text: 'Oluşturma tarihi ↓',
    },
    {
      text: 'Oluşturma tarihi ↑',
    },
  ],
  sortBy: 0,
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
    case types.SET_SORT:
      return {
        ...state,
        sortBy: payload,
      };
    default:
      return state;
  }
}
