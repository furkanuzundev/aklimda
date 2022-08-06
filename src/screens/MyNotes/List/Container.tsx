import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import data from '../../../constants/data';
import Dual from './Grid/Dual';
import Featured from './Grid/Featured';
import Single from './Grid/Single';
import Triple from './Grid/Triple';
import ListEmpty from './ListEmpty';

interface ListProps {}

const List = ({}: ListProps) => {
  if (data.length === 0) {
    return <ListEmpty />;
  } else if (data.length === 1) {
    return <Single data={data[0]} />;
  } else if (data.length === 2) {
    return <Dual data={data} />;
  } else if (data.length === 3) {
    return <Triple data={data} />;
  } else if (data.length === 4) {
    return <Featured data={data} />;
  }

  return (
    <View style={styles.container}>
      <Text>List</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {},
});
