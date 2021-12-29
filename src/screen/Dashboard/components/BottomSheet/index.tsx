import React, { useCallback, useMemo, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import RnBottomSheet from '@gorhom/bottom-sheet';

import useDashboard from '../../useDashboard';

interface IProps {
  bottomSheetRef: any;
}

const BottonSheet: React.FC<IProps> = ({ bottomSheetRef }) => {
  const { handleCreateNewListConfirm } = useDashboard();
  const [name, setName] = useState('');

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleChangeName = useCallback((text: string) => {
    console.log({ name });
    setName(text);
  }, []);

  return (
    <RnBottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
      <View style={{ backgroundColor: 'green', flex: 1 }}>
        <Text>Awesome 🎉</Text>
        <TextInput
          value={name}
          onChangeText={handleChangeName}
          style={{ backgroundColor: 'gray', padding: 12 }}
        />
        <Button
          title="Crear"
          onPress={() => handleCreateNewListConfirm(name)}
        />
      </View>
    </RnBottomSheet>
  );
};

export default BottonSheet;
