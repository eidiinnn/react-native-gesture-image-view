# react-native-gesture-image-view

Image view with gesture for React native.

## Installation

```sh
npm i react-native-gesture-image-view
npm i react-native-gesture-handler
```

## Usage

```js
import ImageViewer from "react-native-gesture-image-view";

// ...

 <ImageViewer
  zoomEnable={true}
  moveEnable={true}
  image={require('image.jpg')}
  style={styles.box}
/>
```
## Props options
| Name | Type | Desc | 
| --- | --- | --- |
|image| Require or string | The Image file.
|resizeMode| ImageResizeMode| Image resize mode.
|style| StyleProp| Style of the image container.
|zoomReset| boolean| Reset zoom when the user stops using the zoom gesture.
|moveReset| boolean| Reset movement when the user stops using the movement gesture.
|zoomEnable| boolean| Enable to zoom the image.
|moveEnable| boolean| Enable moving the image.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
