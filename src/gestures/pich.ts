import { Animated } from 'react-native';
import {
  Gesture,
  PinchGesture as PinchGestureType,
} from 'react-native-gesture-handler';

export default class PichGesture {
  private scaleValue: Animated.Value;
  private pich: PinchGestureType;
  private lastScaleValue: number;
  private lastScaleValue_cache: number;

  constructor(zoomReset?: boolean | undefined) {
    this.scaleValue = new Animated.Value(1);
    this.lastScaleValue = 1;
    this.lastScaleValue_cache = 1;

    this.scale.addListener((e) => {
      this.lastScaleValue_cache = e.value;
    });

    this.pich = Gesture.Pinch();

    this.pich.onUpdate((e) => {
      this.scaleValue.setValue(e.scale * this.lastScaleValue);
    });

    this.pich.onEnd(() => {
      if (zoomReset) {
        this.scaleValue.setValue(1);
        this.lastScaleValue = 1;
      } else {
        this.lastScaleValue = this.lastScaleValue_cache;
      }
    });
  }

  get pichGesture(): PinchGestureType {
    return this.pich;
  }

  get scale(): Animated.Value {
    return this.scaleValue;
  }
}
