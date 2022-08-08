import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  OpaqueColorValue,
} from 'react-native';
import colors from '../constants/colors';

import { Ionicons } from '@expo/vector-icons';
import { wp } from '../constants/screen';
import fonts from '../constants/fonts';

interface HeaderButtonProps {
  iconName?: React.ComponentProps<typeof Ionicons>['name'];
  iconColor?: string | OpaqueColorValue;
  containerStyle?: ViewStyle;
  onPress?: () => void;
  text?: string;
}

const HeaderButton = ({
  iconName,
  containerStyle,
  onPress,
  text,
  iconColor,
}: HeaderButtonProps) => {
  if (iconName) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, containerStyle]}>
          <Ionicons
            name={iconName}
            size={wp('6%')}
            color={iconColor || colors.white}
          />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.textContainer, containerStyle]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  container: {
    width: wp('13%'),
    height: wp('13%'),
    borderRadius: 15,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    height: wp('13%'),
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  text: {
    fontSize: wp('4%'),
    color: colors.white,
    fontFamily: fonts.regular,
  },
});
