import { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HeaderButton from '../../components/HeaderButton';
import colors from '../../constants/colors';
import { hp, wp } from '../../constants/screen';
import { setSearch } from '../../redux/notes/actions';
import { RootState } from '../../redux/store';

interface SearchBarProps {
  onSearchPress: () => void;
}

const SearchBar = ({ onSearchPress }: SearchBarProps) => {
  const { searchText } = useSelector((state: RootState) => state.notes);
  const dispatch = useDispatch();

  const onChangeText = (searchText: string) => dispatch(setSearch(searchText));

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder='Notlarımda ara...'
        placeholderTextColor={colors.halfBlack}
        style={styles.input}
        autoFocus
        value={searchText}
        onChangeText={onChangeText}
      />
      <HeaderButton iconName='close' onPress={onSearchPress} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: colors.black,
    height: hp('8%'),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 10,
    height: wp('13%'),
    width: wp('75%'),
    paddingHorizontal: 10,
  },
});
