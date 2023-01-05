import React from "react";
import { Group, LinearGradient, Paint, RoundedRect, Shadow, vec } from "@shopify/react-native-skia";
import { colorLuminance, } from "../utils/helpers";
const MainComponent = ({ OUTER_Y, OUTER_X, OUTER_WIDTH, OUTER_HEIGHT, borderColors, linearBackground, w, h, color, border, blurOffset, offsetShadow, inner, r, saturation, isLight, }) => {
    return (React.createElement(Group, null,
        React.createElement(RoundedRect, { x: OUTER_X, y: OUTER_Y, width: OUTER_WIDTH, height: OUTER_HEIGHT, r: r || 0, color: borderColors ? "transparent" : colorLuminance(color, 0) },
            linearBackground && (React.createElement(Paint, { blendMode: "overlay" },
                React.createElement(LinearGradient, { start: vec(w / 2, 0), end: vec(w, h / 2), mode: "clamp", colors: [colorLuminance(color, 0.5 * -1), colorLuminance(color, 0.5)], positions: [0.2, 0.89] }))),
            borderColors && border > 0 && (React.createElement(Paint, null,
                React.createElement(LinearGradient, { start: vec(0, 0), end: vec(w / 2, h / 2), mode: "mirror", colors: borderColors }))),
            React.createElement(Shadow, { dx: blurOffset, dy: blurOffset, blur: blurOffset, color: offsetShadow ? "transparent" : colorLuminance(color, (isLight ? 0.25 : 0.75) * -1), inner: inner }),
            React.createElement(Shadow, { dx: -blurOffset, dy: -blurOffset, blur: blurOffset, color: offsetShadow ? "transparent" : colorLuminance(color, isLight ? 0.75 : 0.65), inner: inner }))));
};
export default MainComponent;
