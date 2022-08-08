import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../../../../constants/colors';
import fonts from '../../../../constants/fonts';
import { wp } from '../../../../constants/screen';
import useMoment from '../../../../hooks/useMoment';
import { RootState } from '../../../../redux/store';

interface DualProps {}

const Dual = ({}: DualProps) => {
  const { list } = useSelector((state: RootState) => state.notes);

  return (
    <View style={styles.row}>
      <View style={[styles.container, { backgroundColor: list[0].color }]}>
        <Text style={styles.title}>{list[0].title}</Text>
        <Text style={styles.creationTime}>
          {useMoment(list[0].creationTime, 'LL')}
        </Text>
      </View>
      <View style={[styles.container, { backgroundColor: list[1].color }]}>
        <Text style={styles.title}>{list[1].title}</Text>
        <Text style={styles.creationTime}>
          {useMoment(list[1].creationTime, 'LL')}
        </Text>
      </View>
    </View>
  );
};

export default Dual;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    borderRadius: 10,
    padding: 20,
    width: wp('44%'),
    justifyContent: 'space-between',
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
  },
});
