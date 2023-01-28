import React from 'react';
import {
  StyleSheet,
  ImageResizeMode,
  ImageStyle,
  StyleProp,
  View,
  Animated,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

type Props = {
  image: any;
  resizeMode?: ImageResizeMode;
  style?: StyleProp<ImageStyle>;
  zoomReset?: boolean;
  moveReset?: boolean;
  zoomEnable?: boolean;
  moveEnable?: boolean;
};
import PanGesture from './gestures/pan';
import PichGesture from './gestures/pich';

export default function ImageViewer(props: Props) {
  const pan = new PanGesture(props.moveReset);
  const pich = new PichGesture(props.zoomReset);

  const composed = Gesture.Simultaneous(pan.getGesture, pich.pichGesture);

  const gestureStyle = {
    transform: [
      { translateX: !props.moveEnable ? 0 : pan.x },
      { translateY: !props.moveEnable ? 0 : pan.y },
      { scale: !props.zoomEnable ? 1 : pich.scale },
    ],
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <GestureDetector gesture={composed}>
          <Animated.Image
            style={[gestureStyle, styles.image]}
            resizeMode={props.resizeMode || 'contain'}
            source={props.image}
          />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
