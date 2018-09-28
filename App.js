import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  LinearGradient,
  ClipPath,
  Defs,
  Path,
  Stop,
  Svg,
  G
} from "react-native-svg";

const Background = props => (
  <Svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 5 375 162"
    {...props}
  >
    <Defs>
      <ClipPath id="c">
        <Path data-name="Rectangle 39" fill="none" d="M0 0h375v162H0z" />
      </ClipPath>
      <LinearGradient
        id="d"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset="0" stopColor="#fff" />
        <Stop offset="1" stopColor="#fff" stopOpacity={0.898} />
      </LinearGradient>
      <LinearGradient
        id="a"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset="0" stopColor="#007aff" />
        <Stop offset="1" stopColor="#007aff" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={1}
        y1={0.423}
        x2={0.176}
        y2={0.423}
        xlinkHref="#a"
      >
        <Stop offset="0" stopColor="#007aff" />
        <Stop offset="1" stopColor="#007aff" />
      </LinearGradient>
      <LinearGradient id="f" x1={1} y1={0.381} x2={0} y2={0.381} xlinkHref="#a">
        <Stop offset="0" stopColor="#007aff" />
        <Stop offset="1" stopColor="#007aff" />
      </LinearGradient>
      <ClipPath id="b">
        <Path d="M0 0h375v162H0z" fill="none" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#b)">
      <G data-name="Group 193" clipPath="url(#c)">
        <Path
          data-name="Path 133"
          d="M0 0h375v124.5l-223.742-.157-11.446-.632s-6.2-.47-12.425-1.1-12.29-1.434-12.29-1.434l-10.74-1.594-8.452 2.25-11.572 2.656-15.35 2.879-20.089 2.564-17.714 1.121-17.329-.282-13.857-1.631z"
          transform="translate(-1)"
          opacity={0.996}
          fill="url(#d)"
        />
        <Path
          data-name="Path 134"
          d="M610.553 387.468s-62-12.831-159.372 29.249-218.117-21.969-218.117-21.969V757.24h375.492z"
          transform="rotate(180 304.776 258.389)"
          fill="url(#a)"
          opacity={0.4}
        />
        <Path
          data-name="Path 135"
          d="M608.556 447.414s-103.73-50.322-217.3-30.706-158.188-41.954-158.188-41.954v402.462h375.488z"
          transform="rotate(180 304.276 268.377)"
          opacity={0.15}
          fill="url(#a)"
        />
        <Path
          data-name="Path 136"
          d="M158.465 404.4s65.859-46.648 198.272-8.8 253.7 24.38 253.7 24.38l-1 335.8H233.911z"
          transform="rotate(180 305.233 257.388)"
          fill="url(#e)"
          opacity={0.7}
        />
        <Path
          data-name="Path 137"
          d="M214 428.833s58.188-43.083 190.26-5.175S590.553 460 590.553 460l-1 326.378H213z"
          transform="rotate(180 294.776 272.691)"
          fill="url(#f)"
          opacity={0.7}
        />
      </G>
    </G>
  </Svg>
);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Background width="100%" height="100%" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1"
  }
});
