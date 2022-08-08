import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { S1, S3, S4 } from './GridItems';

interface FeaturedProps {
  list: NoteProps[];
}

const Featured = ({ list }: FeaturedProps) => {
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.column}>
          <S1 {...{ item: list[0] }} />
          <S1 {...{ item: list[1] }} />
        </View>
        <S3 {...{ item: list[2] }} />
      </View>
      <S4 {...{ item: list[3] }} />
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
});
