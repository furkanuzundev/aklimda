import { ReactElement } from 'react';
import { View } from 'react-native';

import { useFonts } from 'expo-font';

interface LoadAssetsProps {
  children: ReactElement | ReactElement[];
}

export const LoadAssets = ({ children }: LoadAssetsProps) => {
  const [loaded] = useFonts({
    MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
    MontserratMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
    MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
    MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if (loaded) {
    return <>{children}</>;
  }
  return null;
};
