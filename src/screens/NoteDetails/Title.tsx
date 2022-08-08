import { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

interface TitleProps {
  title: string;
  onTitleChange: (title: string) => void;
  onEdited: () => void;
  edited: boolean;
}

const Title = ({ title, onTitleChange, onEdited, edited }: TitleProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={colors.halfWhite}
        placeholder='Başlık'
        style={styles.input}
        multiline
        editable={edited}
        maxLength={80}
        value={title}
        scrollEnabled={false}
        onChangeText={onTitleChange}
        onPressIn={onEdited}
      />
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  input: {
    fontSize: 40,
    fontFamily: fonts.regular,
    color: colors.white,
  },
});
