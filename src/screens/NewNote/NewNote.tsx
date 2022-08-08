import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../constants/colors';
import useGenerateId from '../../hooks/useGenerateId';
import { addNote } from '../../redux/notes/actions';
import { RootState } from '../../redux/store';
import Content from './Content';
import Header from './Header';
import Title from './Title';

export const NewNote = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const onTitleChange = (value: string) => setTitle(value);
  const onContentChange = (value: string) => setContent(value);

  const onSavePress = () => {
    const note: NoteProps = {
      id: '',
      creationTime: undefined,
      title: '',
      content: '',
      color: '',
    };

    note.id = useGenerateId();
    note.title = title;
    note.content = content;
    note.creationTime = new Date();

    const itemColors = [
      '#FFAB91',
      '#FFCC80',
      '#E6EE9B',
      '#80DEEA',
      '#CF93D9',
      '#F48FB1',
      '#80CBC4',
    ];
    note.color = itemColors[Math.floor(Math.random() * itemColors.length)];

    dispatch(addNote(note));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onSavePress={onSavePress} />
      <ScrollView>
        <Title {...{ onTitleChange }} />
        <Content {...{ onContentChange }} />
      </ScrollView>
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
