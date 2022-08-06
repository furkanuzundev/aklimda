import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';
import { wp } from '../../constants/screen';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface NewNoteButtonProps {}

const NewNoteButton = ({}: NewNoteButtonProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('NewNote')}
    >
      <Ionicons name={'add'} size={wp('8%')} color={colors.white} />
    </TouchableOpacity>
  );
};

export default NewNoteButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    backgroundColor: colors.grey,
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
