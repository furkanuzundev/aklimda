import * as types from './types';

export interface NotesState {
  list: NoteProps[];
}

const initialState: NotesState = {
  list: [],
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
    default:
      return state;
  }
}
