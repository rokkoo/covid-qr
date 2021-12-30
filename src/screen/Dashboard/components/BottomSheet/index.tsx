import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Button, Text, View } from 'react-native';
import RnBottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';

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

  const blurInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current?.blur();
    }
  }, []);

  const handleConfirmPress = useCallback(() => {
    blurInput();
    handleConfirm(name);
    setName('');
  }, [handleConfirm, name]);

  // Hide bottomsheet when user press outside
  const renderBackdrop = useCallback((props) => {
    blurInput();

    return <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />;
  }, []);

  return (
    <RnBottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
    >
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
