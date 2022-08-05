import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { LoadAssets } from './src/components';
import fonts from './src/constants/fonts';

export default function App() {
  return (
    <LoadAssets>
      <View style={styles.container}>
        <Text style={{ fontFamily: fonts.semiBold }}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style='auto' />
      </View>
    </LoadAssets>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
