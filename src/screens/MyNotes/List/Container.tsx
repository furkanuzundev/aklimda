import moment from 'moment';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import useSearch from '../../../hooks/useSearch';
import useSort from '../../../hooks/useSort';

import { RootState } from '../../../redux/store';
import Dual from './Grid/Dual';
import Featured from './Grid/Featured';
import Main from './Grid/Main';
import Single from './Grid/Single';
import Triple from './Grid/Triple';
import ListEmpty from './ListEmpty';

interface ListProps {}

const List = ({}: ListProps) => {
  const { list, searchText, sortBy } = useSelector(
    (state: RootState) => state.notes
  );

  const [currentList, setCurrentList] = useState<NoteProps[]>(list);

  useEffect(() => {
    setCurrentList(list);
  }, [list]);

  useEffect(() => {
    let applyList: NoteProps[] = [...list];

    if (searchText) {
      applyList = useSearch(applyList, searchText);
      setCurrentList(applyList);
    } else {
      setCurrentList(list);
    }
  }, [searchText]);

  useEffect(() => {
    let applyList: NoteProps[] = [...currentList];

    applyList = useSort(applyList, sortBy);
    setCurrentList(applyList);
  }, [sortBy]);

  if (currentList.length === 0) {
    return <ListEmpty {...{ searchText }} />;
  } else if (currentList.length === 1) {
    return <Single {...{ list: currentList }} />;
  } else if (currentList.length === 2) {
    return <Dual {...{ list: currentList }} />;
  } else if (currentList.length === 3) {
    return <Triple {...{ list: currentList }} />;
  } else if (currentList.length === 4) {
    return <Featured {...{ list: currentList }} />;
  }
  return <Main {...{ list: currentList }} />;
};

export default List;

const styles = StyleSheet.create({
  container: {},
});
