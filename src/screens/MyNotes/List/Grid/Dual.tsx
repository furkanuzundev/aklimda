import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';
import fonts from '../../../../constants/fonts';
import { wp } from '../../../../constants/screen';
import useMoment from '../../../../hooks/useMoment';

interface DualProps {
  data: NoteProps | NoteProps[];
}

const Dual = ({ data }: DualProps) => {
  return (
    <View style={styles.row}>
      <View style={[styles.container, { backgroundColor: data[0].color }]}>
        <Text style={styles.title}>{data[0].title}</Text>
        <Text style={styles.creationTime}>
          {useMoment(data[0].creationTime, 'LL')}
        </Text>
      </View>
      <View style={[styles.container, { backgroundColor: data[1].color }]}>
        <Text style={styles.title}>{data[1].title}</Text>
        <Text style={styles.creationTime}>
          {useMoment(data[1].creationTime, 'LL')}
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
