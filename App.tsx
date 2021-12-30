import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomNativeBaseProvider from './src/providers/CustomNativeBaseProvider';

import Dashboard from './src/screen/Dashboard';
import QrCamera from './src/screen/QrCamera';
import CreateNewList from './src/screen/CreateNewList';

export type RootStackParamList = {
  Dashboard: undefined;
  CreateNewList: undefined;
  QrCamera: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <CustomNativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="QrCamera" component={QrCamera} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen
              name="CreateNewList"
              component={CreateNewList}
              options={{ headerTitle: 'Crear nueva lista' }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </CustomNativeBaseProvider>
  );
};

export default App;
