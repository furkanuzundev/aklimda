import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import MyNotes from '../screens/MyNotes';
import NewNote from '../screens/NewNote';
import NoteDetails from '../screens/NoteDetails';

export const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='MyNotes' component={MyNotes} />
          <Stack.Screen name='NewNote' component={NewNote} />
          <Stack.Screen name='NoteDetails' component={NoteDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
