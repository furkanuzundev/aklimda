import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderButton from '../../components/HeaderButton';
import { hp } from '../../constants/screen';

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const navigation = useNavigation();

  const back = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <HeaderButton iconName='arrow-back' onPress={back} />
      <HeaderButton text='Kaydet' />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp('8%'),
    alignItems: 'center',
  },
});
