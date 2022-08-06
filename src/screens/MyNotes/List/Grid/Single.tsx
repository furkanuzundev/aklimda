import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';
import fonts from '../../../../constants/fonts';
import useMoment from '../../../../hooks/useMoment';

interface SingleProps {
  data: NoteProps;
}

const Single = ({ data }: SingleProps) => {
  return (
    <View style={[styles.container, { backgroundColor: data.color }]}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.creationTime}>
        {useMoment(data.creationTime, 'LL')}
      </Text>
    </View>
  );
};

export default Single;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20,
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
