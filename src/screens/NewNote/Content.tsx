import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

interface ContentProps {}

const Content = (props: ContentProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={colors.halfWhite}
        placeholder='Birşeyler yaz...'
        style={styles.input}
        multiline
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
