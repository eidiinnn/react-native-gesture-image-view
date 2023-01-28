import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import ImageViewer from 'react-native-gesture-image-view';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageViewer
        zoomEnable={true}
        moveEnable={true}
        zoomReset={false}
        image={require('../image/testImage.jpg')}
        style={styles.box}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
