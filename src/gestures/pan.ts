import { Animated } from 'react-native';
import {
  Gesture,
  PanGesture as PanGestureType,
} from 'react-native-gesture-handler';

export default class PanGesture {
  private translate: Animated.ValueXY;
  private lastTranslate: { x: number; y: number };
  private panGesture: PanGestureType;
  private lastTranslate_cache: { x: number; y: number };

  constructor(moveReset: boolean | undefined) {
    this.translate = new Animated.ValueXY();
    this.lastTranslate = { x: 0, y: 0 };
    this.lastTranslate_cache = { x: 0, y: 0 };

    this.translate.addListener((e) => {
      this.lastTranslate_cache.x = e.x;
      this.lastTranslate_cache.y = e.y;
    });

    this.panGesture = Gesture.Pan();
    this.panGesture.enableTrackpadTwoFingerGesture(false);
    this.panGesture.minPointers(1);

    this.panGesture.onUpdate((e) => {
      this.translate.setValue({
        x: e.translationX + this.lastTranslate.x,
        y: e.translationY + this.lastTranslate.y,
      });
    });

    this.panGesture.onEnd(() => {
      if (moveReset) {
        this.lastTranslate.x = 0;
        this.lastTranslate.y = 0;
        this.translate.setValue({ x: 0, y: 0 });
      }
      this.lastTranslate.x = this.lastTranslate_cache.x;
      this.lastTranslate.y = this.lastTranslate_cache.y;
    });
  }

  get getGesture() {
    return this.panGesture;
  }

  get x() {
    return this.translate.x;
  }

  get y() {
    return this.translate.y;
  }
}
