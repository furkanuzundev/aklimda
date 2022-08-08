import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { S2 } from './GridItems';

interface DualProps {
  list: NoteProps[];
}

const Dual = ({ list }: DualProps) => {
  return (
    <View style={styles.row}>
      <S2 {...{ item: list[0] }} />
      <S2 {...{ item: list[1] }} />
    </View>
  );
};

export default Dual;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
