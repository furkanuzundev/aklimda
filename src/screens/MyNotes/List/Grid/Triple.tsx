import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { S1, S3 } from './GridItems';

interface TripleProps {
  list: NoteProps[];
}

const Triple = ({ list }: TripleProps) => {
  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <S1 {...{ item: list[0] }} />
        <S1 {...{ item: list[1] }} />
      </View>
      <S3 {...{ item: list[2] }} />
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
});
