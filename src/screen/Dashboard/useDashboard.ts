import { useCallback, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as RNImagePicker from 'expo-image-picker';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { useQrStore } from '../../store/qr';

const useDashboard = () => {
  const decode = async () => {
    try {
      const { status } =
        await RNImagePicker.requestMediaLibraryPermissionsAsync();
      const media = await MediaLibrary.requestPermissionsAsync();

      if (status === 'granted' && media.status === 'granted') {
        // console.log({list: });

        // TODO: PDF document
        // const result: any = await DocumentPicker.getDocumentAsync({
        //   type: '*/*',
        //   multiple: false,
        //   copyToCacheDirectory: true,
        // });

        // console.log(result);

        const result: any = await RNImagePicker.launchImageLibraryAsync({
          allowsMultipleSelection: false,
        });

        if (result && result.uri) {
          // TODO: get data from pdf
          // const fileBase64 = await FileSystem.readAsStringAsync(result.uri, {
          //   encoding: FileSystem.EncodingType.Base64,
          // });

          // console.log({ fileBase64 });

          const uri = FileSystem.cacheDirectory + 'assets/image.jpg';
          await FileSystem.writeAsStringAsync(result.uri, uri);
          console.log({ uri });

          // const asset = await MediaLibrary.createAssetAsync(result.uri);
          // const album = await MediaLibrary.getAlbumAsync('Download');

          // if (album == null) {
          //   await MediaLibrary.createAlbumAsync('Download', asset, false);
          // } else {
          //   await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
          // }

          // const results = await BarCodeScanner.scanFromURLAsync(result.uri);
          // console.log(results); // many information
          // console.log(results.data); // May be the one you are looking for
        }
      }
    } catch (error) {
      console.debug(error);
    }
  };

  return { decode };
};

export default useDashboard;
