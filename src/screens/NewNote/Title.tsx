import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

interface TitleProps {}

const Title = (props: TitleProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={colors.halfWhite}
        placeholder='Başlık'
        style={styles.input}
        multiline
        maxLength={80}
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
