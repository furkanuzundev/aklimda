import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyNotes from '../screens/MyNotes';
import NoteDetails from '../screens/NoteDetails';

export const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='MyNotes' component={MyNotes} />
        <Stack.Screen name='NoteDetails' component={NoteDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
