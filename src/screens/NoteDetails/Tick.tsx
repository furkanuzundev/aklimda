import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';
import { wp } from '../../constants/screen';

import Ionicons from '@expo/vector-icons/Ionicons';

interface TickProps {
  onSave: () => void;
}

const Tick = ({ onSave }: TickProps) => {
  return (
    <TouchableOpacity onPress={onSave}>
      <View style={styles.container}>
        <Ionicons name='checkmark' size={wp('8%')} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
};

export default Tick;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginVertical: 10
  },
});
