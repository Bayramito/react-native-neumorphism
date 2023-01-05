import React, { useState } from "react";
import MaskedView from "@react-native-masked-view/masked-view";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import NeomorphComponent from "./NeomorphComponent";
const MaskedNeomorphism = ({ maskColors, style, children, color, offsetShadow, offsetShadowColors, linearBackground, blurOffset, inner, border, strokeWidth, borderColors, borderInner, saturation, locations, offsetMode, maskConfig, }) => {
    const colors = maskColors || ["#68d59a", "#7F8CFF", "#66dada"];
    return (React.createElement(NeomorphComponent, { w: (style === null || style === void 0 ? void 0 : style.width) || 100, h: (style === null || style === void 0 ? void 0 : style.height) || 50, color: color || "#ecf0f1", offset: (style === null || style === void 0 ? void 0 : style.padding) || 10, blurOffset: blurOffset || 5, r: (style === null || style === void 0 ? void 0 : style.borderRadius) || 10, offsetShadow: offsetShadow, offsetShadowColors: offsetShadowColors, offsetMode: offsetMode, inner: inner, saturation: saturation, borderInner: borderInner, border: border, strokeWidth: strokeWidth, strokeColors: offsetShadowColors, strokeGradientMode: "linear", borderColors: borderColors, 
        // start
        linearBackground: linearBackground },
        React.createElement(MaskedView, { style: {
                width: "100%",
                flexDirection: "row",
                height: "100%",
                backgroundColor: "red",
            }, maskElement: React.createElement(View, { style: {
                    backgroundColor: "transparent",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                } }, children) },
            React.createElement(LinearGradient, { colors: colors, style: Object.assign({ width: "100%", height: "100%" }, maskConfig === null || maskConfig === void 0 ? void 0 : maskConfig.style), start: (maskConfig === null || maskConfig === void 0 ? void 0 : maskConfig.start) || { x: 0, y: 0 }, end: (maskConfig === null || maskConfig === void 0 ? void 0 : maskConfig.end) || { x: 1, y: 1 }, locations: locations || [0.25, 0.5, 0.8] }))));
};
const styles = () => StyleSheet.create({});
export default MaskedNeomorphism;
const useLayout = () => {
    const [layout, setLayout] = useState();
    const onLayout = (e) => {
        setLayout(e.nativeEvent.layout);
    };
    return { onLayout, layout };
};
