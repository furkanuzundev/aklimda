import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';
import fonts from '../../../../constants/fonts';
import { hp, wp } from '../../../../constants/screen';
import useMoment from '../../../../hooks/useMoment';

interface FeaturedProps {
  data: NoteProps | NoteProps[];
}

const Featured = ({ data }: FeaturedProps) => {
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.column}>
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
        <View
          style={[styles.mainContainer, { backgroundColor: data[2].color }]}
        >
          <Text style={styles.mainTitle}>{data[2].title}</Text>
          <Text style={styles.mainCreationTime}>
            {useMoment(data[2].creationTime, 'LL')}
          </Text>
        </View>
      </View>
      <View
        style={[styles.featuredContainer, { backgroundColor: data[3].color }]}
      >
        <Text style={styles.featuredTitle}>{data[3].title}</Text>
        <Text style={styles.mainCreationTime}>
          {useMoment(data[3].creationTime, 'LL')}
        </Text>
      </View>
    </View>
  );
};

export default Featured;

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
  featuredContainer: {
    height: wp('32%'),
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  featuredTitle: {
    fontSize: 26,
    fontFamily: fonts.regular,
    color: colors.black,
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
