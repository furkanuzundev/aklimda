import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { S1, S3, S4, S5, S6 } from './GridItems';

interface MainProps {
  list: NoteProps[];
}

const Main = ({ list }: MainProps) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.row}>
        <View style={styles.column}>
          <S1 {...{ item: list[0] }} />
          <S1 {...{ item: list[1] }} />
        </View>
        <S3 {...{ item: list[2] }} />
      </View>
      <S4 {...{ item: list[3] }} />
      <View style={styles.row}>
        <View>
          {list
            .slice(4)
            .filter((_, i) => i % 2 === 0)
            .map((item, index) => {
              return <S5 {...{ item }} />;
            })}
        </View>
        <View>
          {list
            .slice(4)
            .filter((_, i) => i % 2 !== 0)
            .map((item, index) => {
              return <S6 {...{ item }} />;
            })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    justifyContent: 'space-between',
  },
});
