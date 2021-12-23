import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './src/screen/Dashboard';
import QrCamera from './src/screen/QrCamera';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="QrCamera" component={QrCamera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
