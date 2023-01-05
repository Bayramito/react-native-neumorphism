import React, { useMemo } from "react";
import { Blur, LinearGradient, rect, RoundedRect, rrect, Turbulence, vec, BackdropFilter, DisplacementMap, } from "@shopify/react-native-skia";
const SprayEffect = ({ withSprayOffset, OUTER_WIDTH, offset, OUTER_HEIGHT, color, r, w, h }) => {
    const rc = useMemo(() => rrect(rect(0, 0, w, h), 10, 10));
    const SPRAY_COLORS = (withSprayOffset === null || withSprayOffset === void 0 ? void 0 : withSprayOffset.colors) || ["#2FB8FF", "#9EECD9", "#2FB8FF"];
    return (React.createElement(BackdropFilter, { clip: rc, filter: undefined },
        React.createElement(DisplacementMap, { channelX: "a", channelY: "r", scale: 50 },
            React.createElement(Turbulence, { freqX: withSprayOffset.freqX || 0.5, freqY: withSprayOffset.freqY || 0.5, octaves: withSprayOffset.amplitude || 4 })),
        React.createElement(RoundedRect, { x: offset / 2, y: offset / 2, width: OUTER_WIDTH, height: OUTER_HEIGHT, r: r || 0, 
            // color={borderColors ? "transparent" : pSBC(saturation || 0.01, color)}
            color: color },
            React.createElement(LinearGradient, { start: vec(0, 0), end: vec(w / 2, h / 2), mode: "mirror", colors: SPRAY_COLORS })),
        React.createElement(Blur, { blur: withSprayOffset.blurAmount || 0 })));
};
export default SprayEffect;
