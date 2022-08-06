import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { LoadAssets } from './src/components';
import { Routes } from './src/navigation';
import fonts from './src/constants/fonts';

export default function App() {
  return (
    <LoadAssets>
      <Routes />
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
