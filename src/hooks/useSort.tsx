/*
 *
 * Sort Type definitions
 * 1 - increment date
 * 2 - decrement date
 */

import moment from 'moment';

const useSort = (list: NoteProps[], sortBy: number) => {
  switch (sortBy) {
    case 0:
      return list.sort((a, b) =>
        moment(a.creationTime).diff(moment(b.creationTime))
      );
    case 1:
      return list.sort((a, b) =>
        moment(b.creationTime).diff(moment(a.creationTime))
      );
    default:
      return list;
  }
};

export default useSort;
