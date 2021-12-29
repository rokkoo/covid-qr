import React from 'react';
import { NativeBaseProvider, ColorMode } from 'native-base';
import type { StorageManager } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  children: React.ReactNode;
}

const CustomNativeBaseProvider: React.FC<Props> = ({ children }) => {
  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem('@my-app-color-mode');

        return val === 'dark' ? 'dark' : 'light';
      } catch (e) {
        console.log(e);
        return 'light';
      }
    },
    set: async (value: ColorMode) => {
      try {
        if (value) {
          await AsyncStorage.setItem('@my-app-color-mode', value);
        }
      } catch (e) {
        console.log(e);
      }
    },
  };

  return (
    <NativeBaseProvider colorModeManager={colorModeManager}>
      {children}
    </NativeBaseProvider>
  );
};

export default CustomNativeBaseProvider;
