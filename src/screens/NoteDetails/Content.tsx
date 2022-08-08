import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

interface ContentProps {
  content: string;
  onContentChange: (title: string) => void;
  onEdited: () => void;
  edited: boolean;
}

const Content = ({
  content,
  onContentChange,
  onEdited,
  edited,
}: ContentProps) => {
  console.log('content: ', content);
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={colors.halfWhite}
        placeholder='Birşeyler yaz...'
        style={styles.input}
        multiline
        editable={edited}
        value={content}
        scrollEnabled={false}
        onChangeText={onContentChange}
        onPressIn={onEdited}
      />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
  },
  input: {
    fontSize: 20,
    fontFamily: fonts.regular,
    color: colors.white,
    flex: 1,
  },
});
