import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../../../../../constants/colors';
import fonts from '../../../../../constants/fonts';
import { hp, wp } from '../../../../../constants/screen';
import useMoment from '../../../../../hooks/useMoment';

interface S5Props {
  item: NoteProps;
}

const S5 = ({ item }: S5Props) => {
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

export default S5;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    width: wp('42%'),
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.black,
  },
  creationTime: {
    color: colors.halfBlack,
    fontFamily: fonts.medium,
    marginTop: 20,
    textAlign: 'right',
    fontSize: 12,
  },
});
