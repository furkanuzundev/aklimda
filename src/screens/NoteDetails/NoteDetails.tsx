import { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../constants/colors';
import { RootState } from '../../redux/store';
import Content from './Content';
import Header from './Header';
import Tick from './Tick';
import Title from './Title';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { updateList } from '../../redux/notes/actions';
import useMoment from '../../hooks/useMoment';
import fonts from '../../constants/fonts';

export const NoteDetails = (navigation: any) => {
  const { list } = useSelector((state: RootState) => state.notes);
  const note: NoteProps = navigation.route.params.note;

  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>(note.title);
  const [content, setContent] = useState<string>(note.content);
  const [edited, isEdited] = useState<boolean>(false);

  const onTitleChange = (value: string) => setTitle(value);
  const onContentChange = (value: string) => setContent(value);
  const onEdited = () => isEdited(true);

  const onSave = () => {
    const currentList = [...list];
    const currentNote: NoteProps = currentList.find(
      (obj: NoteProps) => obj.id === note.id
    );

    currentNote.title = title;
    currentNote.content = content;

    dispatch(updateList(currentList));

    isEdited(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header {...{ note }} />
      <KeyboardAvoidingView behavior='padding' style={styles.avoidingView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title {...{ title, onTitleChange, onEdited, edited }} />
          <Text style={styles.creationTime}>
            {useMoment(note.creationTime, 'LL')}
          </Text>
          <Content {...{ content, onContentChange, onEdited, edited }} />
        </ScrollView>
        {edited && <Tick {...{ onSave }} />}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 20,
  },
  avoidingView: {
    flex: 1,
  },
  creationTime: {
    color: colors.halfWhite,
    fontFamily: fonts.medium,
  },
});
