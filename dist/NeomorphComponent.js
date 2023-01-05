import { Canvas, mix, rect, rrect, runTiming, Skia, useComputedValue, useValue, } from "@shopify/react-native-skia";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Border from "./components/Border";
import MainComponent from "./components/MainComponent";
import OffsetShadow from "./components/OffsetShadow";
import Progress from "./components/Progress";
import ShadowInnerWithOffsetShadow from "./components/ShadowInnerWithOffsetShadow";
import SprayEffect from "./components/SprayEffect";
import Stroke from "./components/Stroke";
import { isLightColor } from "./utils/helpers";
const NeomorphComponent = (props) => {
    const [size, setSize] = useState({ w: props.w, h: props.h });
    const onLayout = (e) => {
        setSize({ w: e.nativeEvent.layout.width, h: e.nativeEvent.layout.height });
    };
    return (React.createElement(View, { style: [
            !!props.w && { width: size.w, height: size.h },
            !props.noCenter && { justifyContent: "center", alignItems: "center" },
            props.style,
        ], onLayout: props.w ? undefined : onLayout },
        !!size.w && !!size.h && (React.createElement(CanvasComponent, Object.assign({}, props, { w: size.w, h: size.h }))),
        props.children));
};
const CanvasComponent = ({ x, y, w, h, r = 0, inner, blurOffset, color, offset, offsetShadow, offsetShadowColors, offsetMode = "linear", border, borderColors, borderInner, saturation, children, linearBackground, progressWidth, progressColors, progressBlurAmount, progressGradientMode, strokeWidth, strokeColors, strokeGradientMode, strokeConfig, start, withSprayOffset, }) => {
    const timer = useValue(0);
    const j = useComputedValue(() => mix(timer.current, 0, 180), [timer]);
    const progress = useComputedValue(() => j.current / 180, [j]);
    useEffect(() => {
        if (start) {
            runTiming(timer, 1, { duration: 1500 });
        }
        else {
            runTiming(timer, 0, { duration: 3000 });
        }
    }, [start]);
    // Constants
    const OUTER_X = x || offset;
    const OUTER_Y = y || offset;
    const OUTER_WIDTH = w - offset * 2;
    const OUTER_HEIGHT = h - offset * 2;
    const INNER_X = x + border || offset + border;
    const INNER_Y = y + border || offset + border;
    const INNER_WIDTH = w - (offset + border) * 2;
    const INNER_HEIGHT = h - (offset + border) * 2;
    const BORDER_X = border / 2 + offset;
    const BORDER_Y = offset + border / 2;
    // Draw a circle path
    // path.addCircle(w / 2, h / 2, PROGRESS_RADIUS);
    // const center = vec(PROGRESS_RADIUS, PROGRESS_RADIUS);
    //Draw the progress  path
    const path = Skia.Path.Make();
    path.addRRect(rrect(rect(BORDER_X, BORDER_Y, INNER_WIDTH + (OUTER_WIDTH - INNER_WIDTH) / 2, INNER_HEIGHT + (OUTER_HEIGHT - INNER_HEIGHT) / 2), r, r));
    const isLight = isLightColor(color);
    return (React.createElement(Canvas, { style: { width: w, height: h, position: "absolute" } },
        offsetShadow && (React.createElement(OffsetShadow, Object.assign({}, { offsetMode, offsetShadowColors, offsetShadow, r, w, h, color }))),
        withSprayOffset && (React.createElement(SprayEffect, Object.assign({}, {
            withSprayOffset,
            OUTER_WIDTH,
            offset,
            OUTER_HEIGHT,
            color,
            r,
            w,
            h,
        }))),
        React.createElement(MainComponent, Object.assign({}, {
            OUTER_Y,
            OUTER_X,
            OUTER_WIDTH,
            OUTER_HEIGHT,
            borderColors,
            linearBackground,
            w,
            h,
            color,
            border,
            blurOffset,
            offsetShadow,
            inner,
            r,
            saturation,
            isLight,
        })),
        offsetShadow && inner && (React.createElement(ShadowInnerWithOffsetShadow, Object.assign({}, {
            OUTER_Y,
            OUTER_X,
            OUTER_WIDTH,
            OUTER_HEIGHT,
            borderColors,
            color,
            saturation,
            blurOffset,
            linearBackground,
            isLight,
            w,
            h,
            inner,
            r,
        }))),
        border && (React.createElement(Border, Object.assign({}, {
            INNER_WIDTH,
            INNER_HEIGHT,
            INNER_X,
            INNER_Y,
            borderColors,
            border,
            saturation,
            color,
            linearBackground,
            blurOffset,
            borderInner,
            isLight,
            w,
            h,
            r,
        }))),
        strokeWidth > 0 && (React.createElement(Stroke, Object.assign({}, {
            strokeGradientMode,
            strokeColors,
            strokeConfig,
            w,
            h,
            strokeWidth,
            OUTER_X,
            OUTER_Y,
            OUTER_WIDTH,
            OUTER_HEIGHT,
            r,
        }))),
        progressWidth > 0 && (React.createElement(Progress, Object.assign({}, {
            progressGradientMode,
            w,
            h,
            progressColors,
            progressBlurAmount,
            BORDER_X,
            BORDER_Y,
            INNER_WIDTH,
            INNER_HEIGHT,
            OUTER_WIDTH,
            OUTER_HEIGHT,
            r,
            start,
            progressWidth,
            border,
        })))));
};
export default NeomorphComponent;
