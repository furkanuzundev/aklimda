import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../../../../../constants/colors';
import fonts from '../../../../../constants/fonts';
import { wp } from '../../../../../constants/screen';
import useMoment from '../../../../../hooks/useMoment';

interface S4Props {
  item: NoteProps;
}

const S4 = ({ item }: S4Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('NoteDetails', { note: item })}
    >
      <View style={[styles.container, { backgroundColor: item.color }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.creationTime}>
          {useMoment(item.creationTime, 'LL')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default S4;

const styles = StyleSheet.create({
  container: {
    height: wp('32%'),
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 26,
    fontFamily: fonts.regular,
    color: colors.black,
    flex: 1,
  },
  creationTime: {
    color: colors.halfBlack,
    fontFamily: fonts.medium,
    textAlign: 'right',
    fontSize: 12,
  },
});
