import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Button, Text, View } from 'react-native';
import RnBottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';

interface IProps {
  bottomSheetRef: React.RefObject<RnBottomSheet>;
  handleConfirm: (name: string) => void;
}

const BottonSheet: React.FC<IProps> = ({ bottomSheetRef, handleConfirm }) => {
  const [name, setName] = useState('');
  const inputRef = useRef<any>(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  const handleChangeName = useCallback((text: string) => {
    setName(text);
  }, []);

  const handleConfirmPress = useCallback(() => {
    if (inputRef.current) {
      inputRef.current?.blur();
    }

    handleConfirm(name);
  }, [handleConfirm, name]);

  return (
    <RnBottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
      <View style={{ backgroundColor: 'green', flex: 1 }}>
        <Text>Awesome 🎉</Text>
        <BottomSheetTextInput
          ref={inputRef}
          value={name}
          onChangeText={handleChangeName}
          style={{ backgroundColor: 'gray', padding: 12 }}
        />

        <Button title="Crear" onPress={handleConfirmPress} />
      </View>
    </RnBottomSheet>
  );
};

export default BottonSheet;
