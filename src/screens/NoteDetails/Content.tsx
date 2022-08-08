import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
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
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={colors.halfWhite}
        placeholder='Birşeyler yaz...'
        style={styles.input}
        multiline
        value={content}
        scrollEnabled={false}
        onChangeText={onContentChange}
        editable={edited}
      />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  input: {
    fontSize: 20,
    fontFamily: fonts.regular,
    color: colors.white,
  },
});
