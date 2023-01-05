import React from "react";
import { Group, LinearGradient, Paint, RoundedRect, Shadow, vec } from "@shopify/react-native-skia";
import { colorLuminance } from "../utils/helpers";
const Border = ({ INNER_WIDTH, INNER_HEIGHT, INNER_X, INNER_Y, borderColors, border, saturation, color, linearBackground, blurOffset, borderInner, isLight, w, h, r, }) => {
    return (React.createElement(Group, null,
        React.createElement(RoundedRect, { x: INNER_X, y: INNER_Y, width: INNER_WIDTH, height: INNER_HEIGHT, r: r || 0, color: borderColors && border === 0.1 ? "transparent" : colorLuminance(color, saturation) },
            linearBackground && (React.createElement(Paint, { blendMode: "overlay" },
                React.createElement(LinearGradient, { start: vec(w / 2, 0), end: vec(w, h / 2), mode: "clamp", colors: [colorLuminance(color, -0.5), colorLuminance(color, 0.5)], positions: [0.2, 0.59] }))),
            React.createElement(Shadow, { dx: blurOffset, dy: blurOffset, blur: blurOffset, color: colorLuminance(color, isLight ? -0.25 : -0.75), inner: borderInner }),
            React.createElement(Shadow, { dx: -blurOffset, dy: -blurOffset, blur: blurOffset, color: colorLuminance(color, isLight ? 0.75 : 0.65), inner: borderInner }))));
};
export default Border;
