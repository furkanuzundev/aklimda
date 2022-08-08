import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../../../../../constants/colors';
import fonts from '../../../../../constants/fonts';
import { wp } from '../../../../../constants/screen';
import useMoment from '../../../../../hooks/useMoment';

interface S3Props {
  item: NoteProps;
}

const S3 = ({ item }: S3Props) => {
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

export default S3;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    width: wp('46%'),
    height: wp('46%'),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
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
