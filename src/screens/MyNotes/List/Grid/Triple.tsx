import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../../../constants/colors';
import fonts from '../../../../constants/fonts';
import { hp, wp } from '../../../../constants/screen';
import useMoment from '../../../../hooks/useMoment';

interface TripleProps {
  list: NoteProps[];
}

const Triple = ({ list }: TripleProps) => {
  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <TouchableOpacity>
          <View style={[styles.container, { backgroundColor: list[0].color }]}>
            <Text style={styles.title}>{list[0].title}</Text>
            <Text style={styles.creationTime}>
              {useMoment(list[0].creationTime, 'LL')}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.container, { backgroundColor: list[1].color }]}>
          <Text style={styles.title}>{list[1].title}</Text>
          <Text style={styles.creationTime}>
            {useMoment(list[1].creationTime, 'LL')}
          </Text>
        </View>
      </View>
      <View style={[styles.mainContainer, { backgroundColor: list[2].color }]}>
        <Text style={styles.mainTitle}>{list[2].title}</Text>
        <Text style={styles.mainCreationTime}>
          {useMoment(list[2].creationTime, 'LL')}
        </Text>
      </View>
    </View>
  );
};

export default Triple;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    justifyContent: 'space-between',
  },
  container: {
    borderRadius: 10,
    padding: 10,
    width: wp('42%'),
    height: wp('22%'),
    justifyContent: 'space-between',
  },
  mainContainer: {
    borderRadius: 10,
    padding: 10,
    width: wp('46%'),
    height: wp('46%'),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.black,
  },
  mainTitle: {
    fontSize: 22,
    fontFamily: fonts.regular,
    color: colors.black,
  },
  mainCreationTime: {
    color: colors.halfBlack,
    fontFamily: fonts.medium,
    textAlign: 'right',
    fontSize: 12,
  },
  creationTime: {
    color: colors.halfBlack,
    fontFamily: fonts.medium,
    textAlign: 'right',
    fontSize: 10,
  },
});
