import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { NotesState } from '../../../redux/notes/reducer';
import { RootState } from '../../../redux/store';
import Dual from './Grid/Dual';
import Featured from './Grid/Featured';
import Main from './Grid/Main';
import Single from './Grid/Single';
import Triple from './Grid/Triple';
import ListEmpty from './ListEmpty';

interface ListProps {}

const List = ({}: ListProps) => {
  const { list } = useSelector((state: RootState) => state.notes);

  if (list.length === 0) {
    return <ListEmpty />;
  } else if (list.length === 1) {
    return <Single {...{ list }} />;
  } else if (list.length === 2) {
    return <Dual {...{ list }} />;
  } else if (list.length === 3) {
    return <Triple {...{ list }} />;
  } else if (list.length === 4) {
    return <Featured {...{ list }} />;
  }
  return <Main {...{ list }} />;
};

export default List;

const styles = StyleSheet.create({
  container: {},
});
