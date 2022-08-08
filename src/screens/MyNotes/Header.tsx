import { useRef, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import HeaderButton from '../../components/HeaderButton';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import { hp, wp } from '../../constants/screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchBar from './SearchBar';
import { setSearch } from '../../redux/notes/actions';
import { useDispatch } from 'react-redux';
import SortBy from './SortByModal';

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const dispatch = useDispatch();

  const [searchOpened, setSearchOpened] = useState<boolean>(false);
  const [sortOpened, setSortOpened] = useState<boolean>(false);

  const onSearchPress = () => {
    if (searchOpened) {
      dispatch(setSearch(null));
    }
    setSearchOpened(!searchOpened);
  };

  const onSortPress = () => setSortOpened(!sortOpened);

  if (searchOpened) {
    return <SearchBar {...{ onSearchPress }} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Notlarım</Text>
        <View style={styles.headerButtonContainer}>
          <HeaderButton
            iconName='bar-chart'
            containerStyle={{ marginRight: 10 }}
            onPress={onSortPress}
          />
          <HeaderButton iconName='search' onPress={onSearchPress} />
        </View>
      </View>
      {sortOpened && <SortBy {...{ onSortPress }} />}
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    height: hp('8%'),
    justifyContent: 'center',
  },
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
