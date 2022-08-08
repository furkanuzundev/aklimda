import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import { wp } from '../../constants/screen';
import { updateList } from '../../redux/notes/actions';
import { RootState } from '../../redux/store';

interface DeleteModalProps {
  visible: boolean;
  onModalClose: () => void;
  note: NoteProps;
}

const DeleteModal = ({ visible, onModalClose, note }: DeleteModalProps) => {
  const { list } = useSelector((state: RootState) => state.notes);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onDeleteNote = () => {
    let currentList: NoteProps[] = [...list];
    currentList = currentList.filter((obj) => obj.id !== note.id);

    dispatch(updateList(currentList));
    onModalClose();
    navigation.goBack();
  };

  return (
    <Modal isVisible={visible}>
      <View style={styles.container}>
        <Text style={styles.title}>Notu silmek istediğinize emin misiniz?</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={onModalClose}>
            <View style={styles.button}>
              <Text style={[styles.buttonText, { color: colors.black }]}>
                Vazgeç
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDeleteNote}>
            <View
              style={[
                styles.button,
                { backgroundColor: colors.red, borderRadius: 10 },
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  { color: colors.white, fontFamily: fonts.semiBold },
                ]}
              >
                Sil
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.medium,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    width: wp('36%'),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
  },
});
