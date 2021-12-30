import {
  Box,
  Button,
  Input,
  FormControl,
  VStack,
  WarningOutlineIcon,
  Text,
} from 'native-base';
import useCreateNewList from './useCreateNewList';

const CreateNewList = () => {
  const {
    listName,
    handleCreateNewListConfirm,
    handleChangeName,
    isValisListName,
    handleDissmiss,
  } = useCreateNewList();

  return (
    <Box px={4} pt={4} bg="dark" flex="1">
      <FormControl isInvalid={!isValisListName}>
        <FormControl.Label>Nombre de la lista</FormControl.Label>
        <Input
          placeholder="Nombre de la lista"
          value={listName}
          onChangeText={handleChangeName}
          bg="white"
          borderRadius={10}
          p={4}
          fontSize="lg"
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Por favor ngrese un nombre para la lista
        </FormControl.ErrorMessage>
      </FormControl>

      <VStack justifyContent="center" alignItems="center" mt="16">
        <Button
          colorScheme="success"
          borderRadius="full"
          onPress={handleCreateNewListConfirm}
          _text={{
            fontSize: 'lg',
          }}
        >
          Guardar
        </Button>
        <Button
          // variant="ghost"
          colorScheme="danger"
          onPress={handleDissmiss}
          mt="4"
          backgroundColor="transparent"
          _text={{
            fontSize: 'lg',
            color: 'red.500',
          }}
        >
          Cancelar
        </Button>
      </VStack>
    </Box>
  );
};

export default CreateNewList;
