import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';

interface ListEmptyProps {}

const ListEmpty = ({}: ListEmptyProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Henüz not oluşturulmamış.</Text>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Hemen oluştur!</Text>
      </View>
    </View>
  );
};

export default ListEmpty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 18,
  },
  button: {
    backgroundColor: colors.grey,
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: fonts.medium,
    color: colors.white,
    fontSize: 26,
  },
});
