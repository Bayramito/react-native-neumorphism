import React from "react";
import { Group, LinearGradient, Paint, RoundedRect, Shadow, vec } from "@shopify/react-native-skia";
import { colorLuminance } from "../utils/helpers";
const ShadowInnerWithOffsetShadow = ({ OUTER_Y, OUTER_X, OUTER_WIDTH, OUTER_HEIGHT, borderColors, color, saturation, blurOffset, inner, linearBackground, r, w, h, }) => {
    return (React.createElement(Group, null,
        React.createElement(RoundedRect, { x: OUTER_X, y: OUTER_Y, width: OUTER_WIDTH, height: OUTER_HEIGHT, r: r || 0, color: borderColors ? "transparent" : colorLuminance(color, saturation) },
            linearBackground && (React.createElement(Paint, { blendMode: "overlay" },
                React.createElement(LinearGradient, { start: vec(w / 2, 0), end: vec(w, h / 2), mode: "clamp", colors: [colorLuminance(color, 0.5 * -1), colorLuminance(color, 0.5)], positions: [0.2, 0.89] }))),
            React.createElement(Shadow, { dx: blurOffset, dy: blurOffset, blur: blurOffset, color: colorLuminance(color, -0.15), inner: inner }),
            React.createElement(Shadow, { dx: -blurOffset, dy: -blurOffset, blur: blurOffset, color: colorLuminance(color, 0.15), inner: inner }))));
};
export default ShadowInnerWithOffsetShadow;
