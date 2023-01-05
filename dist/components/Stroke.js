import React from "react";
import { Group, LinearGradient, Path, rect, rrect, Skia, SweepGradient, vec } from "@shopify/react-native-skia";
const Stroke = ({ strokeGradientMode, strokeColors, strokeConfig, w, h, strokeWidth, OUTER_X, OUTER_Y, OUTER_WIDTH, OUTER_HEIGHT, r, }) => {
    const STROKE_COLORS = strokeColors || ["#2FB8FF", "#9EECD9", "#2FB8FF"];
    // Draw the stroke path
    const strokePath = Skia.Path.Make();
    strokePath.addRRect(rrect(rect(OUTER_X, OUTER_Y, OUTER_WIDTH, OUTER_HEIGHT), r, r));
    return (React.createElement(Group, null,
        strokeGradientMode === "sweep" ? (React.createElement(SweepGradient, { c: vec(w / 2, h / 2), colors: STROKE_COLORS, mode: (strokeConfig === null || strokeConfig === void 0 ? void 0 : strokeConfig.mode) || "decal" })) : (React.createElement(LinearGradient, { start: (strokeConfig === null || strokeConfig === void 0 ? void 0 : strokeConfig.start) || vec(0, 0), end: (strokeConfig === null || strokeConfig === void 0 ? void 0 : strokeConfig.end) || vec(w, h), mode: (strokeConfig === null || strokeConfig === void 0 ? void 0 : strokeConfig.mode) || "clamp", positions: (strokeConfig === null || strokeConfig === void 0 ? void 0 : strokeConfig.positions) || [0.3, 0.6, 0.9], colors: STROKE_COLORS })),
        React.createElement(Path, { path: strokePath, style: "stroke", strokeWidth: strokeWidth, strokeCap: "square" })));
};
export default Stroke;
