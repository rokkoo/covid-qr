interface Name {
  fn: string; // last name
  gn: string; // first name
}

export interface QRData {
  dob: string;
  nam: Name;
}

export const getDataFromQR = async (qrData: string): Promise<QRData> => {
  try {
    const res = await fetch(process.env.API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        qrData,
      }),
    });

    const { data } = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};
