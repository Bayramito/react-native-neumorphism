import React from "react";
import { Blur, Group, LinearGradient, rect, RoundedRect, SweepGradient, vec } from "@shopify/react-native-skia";
import BilinearGradient from "./BilinearGradient";
const OffsetShadow = ({ offsetMode, offsetShadowColors, offsetShadow, r, w, h, color }) => {
    const BILINEAR_COLORS = offsetShadowColors || ["#2FB8FF", "#9EECD9", "#9EECD9", "#2FB8FF"];
    const SWEEP_COLORS = offsetShadowColors || ["cyan", "magenta", "yellow", "cyan"];
    const LINEAR_COLORS = offsetShadowColors || ["#2FB8FF", "#9EECD9", "#2FB8FF"];
    return (React.createElement(Group, null,
        React.createElement(RoundedRect, { x: 5, y: 5, width: w - 10, height: h - 10, r: r, color: offsetMode === "none" ? "transparent" : color },
            offsetMode !== "none" && offsetMode === "bilinear" && (React.createElement(BilinearGradient, { colors: BILINEAR_COLORS, rect: rect(0, 0, w, h) })),
            offsetMode !== "none" && offsetMode === "sweep" && (React.createElement(SweepGradient, { c: vec(w / 2, h / 2), colors: SWEEP_COLORS })),
            offsetMode !== "none" && offsetMode === "linear" && (React.createElement(LinearGradient, { start: vec(0, 0), end: vec(w, h / 2), mode: "clamp", colors: LINEAR_COLORS })),
            React.createElement(Blur, { blur: (offsetShadow === null || offsetShadow === void 0 ? void 0 : offsetShadow.blurAmount) || 3 }))));
};
export default OffsetShadow;
