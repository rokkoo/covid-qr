import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QrCamera from './src/screen/QrCamera';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={QrCamera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
