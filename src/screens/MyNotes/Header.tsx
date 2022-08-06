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
import Modal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const [searchOpened, setSearchOpened] = useState<boolean>(false);
  const [sortOpened, setSortOpened] = useState<boolean>(false);

  const inputRef = useRef();
  const insets = useSafeAreaInsets();

  const onSearchPress = () => setSearchOpened(!searchOpened);
  const onSortPress = () => setSortOpened(!sortOpened);

  if (searchOpened) {
    return (
      <View style={styles.searchContainer}>
        <TextInput
          ref={inputRef}
          placeholder='Notlarımda ara...'
          placeholderTextColor={colors.halfBlack}
          style={styles.input}
          autoFocus
        />
        <HeaderButton iconName='close' onPress={onSearchPress} />
      </View>
    );
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
      {sortOpened && (
        <Modal
          isVisible={sortOpened}
          onBackdropPress={onSortPress}
          animationIn={'slideInUp'}
          coverScreen
          style={{
            margin: 0,
            justifyContent: 'flex-end',
          }}
        >
          <View
            style={{
              backgroundColor: colors.white,
              paddingBottom: insets.bottom,
              padding: 20,
            }}
          >
            <Text style={styles.sortTitle}>Şuna göre sırala;</Text>
            <View style={styles.optionsContainer}>
              <Text>Oluşturma tarihi</Text>
              <Text>Güncelleme Tarihi</Text>
              <Text>Diğer</Text>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    paddingVertical: 20,
  },
  sortTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 24,
  },
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
