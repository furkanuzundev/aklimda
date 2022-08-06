import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderButton from '../../components/HeaderButton';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Notlarım</Text>
        <View style={styles.headerButtonContainer}>
          <HeaderButton
            iconName='bar-chart'
            containerStyle={{ marginRight: 10 }}
          />
          <HeaderButton iconName='search' />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontFamily: fonts.medium,
    fontSize: 30,
    color: colors.white,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerButtonContainer: {
    flexDirection: 'row',
  },
});
