import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, Pressable, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import QRCode from 'react-native-qrcode-svg';
import { getDataFromQR, QRData } from '../../../lib/getQRInfo';
import { useQrStore } from '../../store/qr';

export default function QrCamera() {
  const [hasPermission, setHasPermission] = useState<Boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [rawScannedData, setRawScannedData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [userData, setUserData] = useState<QRData | null>(null);
  const addQrData = useQrStore((state) => state.addQRData);
  const qrData = useQrStore((state) => state.qrData);

  useEffect(() => {
    const init = async () => {
      try {
        if (!rawScannedData) return null;

        setLoading(true);

        const data = await getDataFromQR(rawScannedData);
        addQrData(data);
      } catch (error) {
        console.log({ error });
      } finally {
        setLoading(false);
      }
    };

    init();
  }, [rawScannedData]);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const cleanData = useCallback(() => {
    setScanned(false);
    setRawScannedData(null);
    setUserData(null);
  }, []);

  const renderUserData = useCallback(() => {
    if (!userData) return null;

    return (
      <Pressable style={styles.user} onPress={cleanData}>
        <Text style={styles.text}>{userData?.dob}</Text>
        <Text style={styles.text}>{userData?.nam.fn}</Text>
        <Text style={styles.text}>{userData?.nam.gn}</Text>
      </Pressable>
    );
  }, [userData]);

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    setRawScannedData(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {renderUserData()}
      {loading && <Text style={styles.loading}>Loading...</Text>}
      <QRCode value="http://awesome.link.qr" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  user: {
    width: '80%',
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333333',
  },
  loading: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'tomato',
  },
});
