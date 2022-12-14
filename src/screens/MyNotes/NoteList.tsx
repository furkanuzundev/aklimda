import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import { Header } from './Header';
import List from './List';
import NewNoteButton from './NewNoteButton';

export const NoteList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <List />
      <NewNoteButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 20,
  },
});
