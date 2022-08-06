import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import Content from './Content';
import Header from './Header';
import Title from './Title';

interface NewNoteProps {}

const NewNote = (props: NewNoteProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Title />
      <Content />
    </SafeAreaView>
  );
};

export default NewNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 20,
  },
});
