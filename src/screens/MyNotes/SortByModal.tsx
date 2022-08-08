import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import Modal from 'react-native-modal';
import fonts from '../../constants/fonts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import Ionicons from '@expo/vector-icons/Ionicons';
import { wp } from '../../constants/screen';
import { setSort } from '../../redux/notes/actions';

interface SortByProps {
  onSortPress: () => void;
}

const SortBy = ({ onSortPress }: SortByProps) => {
  const { sortOptions, sortBy } = useSelector(
    (state: RootState) => state.notes
  );
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  const onItemPress = (index: number) => {
    dispatch(setSort(index));
    onSortPress();
  };

  return (
    <Modal
      isVisible={true}
      onBackdropPress={onSortPress}
      animationIn={'slideInUp'}
      coverScreen
      style={styles.modal}
    >
      <View style={[styles.container, { paddingBottom: insets.bottom }]}>
        <Text style={styles.sortTitle}>Şuna göre sırala;</Text>
        <View style={styles.optionsContainer}>
          {sortOptions.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => onItemPress(index)}>
                <View key={index} style={styles.textContainer}>
                  <Text style={styles.text}>{item.text}</Text>
                  {index === sortBy && (
                    <Ionicons
                      name='checkmark'
                      size={wp('6%')}
                      color={colors.black}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </Modal>
  );
};

export default SortBy;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: colors.white,
    padding: 20,
  },
  sortTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 24,
  },
  optionsContainer: {
    paddingVertical: 20,
  },
  textContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.regular,
    color: colors.black,
  },
});
