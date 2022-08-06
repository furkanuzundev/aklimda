import * as React from 'react';
import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import colors from '../constants/colors';

import { Ionicons } from '@expo/vector-icons';

interface HeaderButtonProps {
  iconName: React.ComponentProps<typeof Ionicons>['name'];
  containerStyle?: ViewStyle;
}

const HeaderButton = ({ iconName, containerStyle }: HeaderButtonProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Ionicons name={iconName} size={24} color={colors.white} />
    </View>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
