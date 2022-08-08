import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';
import HeaderButton from '../../components/HeaderButton';
import colors from '../../constants/colors';
import { hp } from '../../constants/screen';
import DeleteModal from './DeleteModal';

interface HeaderProps {
  note: NoteProps;
  onEdited: () => void;
}

const Header = ({ note, onEdited }: HeaderProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const navigation = useNavigation();

  const back = () => navigation.goBack();
  const onModalClose = () => setVisible(false);
  const onModalOpen = () => setVisible(true);

  return (
    <View style={styles.container}>
      <HeaderButton iconName='arrow-back' onPress={back} />
      <View style={styles.row}>
        <HeaderButton
          iconName='create'
          containerStyle={{ marginRight: 10 }}
          onPress={onEdited}
        />
        <HeaderButton
          iconName='trash'
          onPress={onModalOpen}
          iconColor={colors.red}
        />
      </View>
      <DeleteModal {...{ visible, note, onModalClose }} />
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
  row: {
    flexDirection: 'row',
  },
});
