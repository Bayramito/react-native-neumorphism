import { Box, BoxShadow, Canvas, FitBox, Group, mix, rect, rrect, runTiming, useComputedValue, useTouchHandler, useValue, } from "@shopify/react-native-skia";
import React, { memo, useEffect } from "react";
import { runOnJS } from "react-native-reanimated";
import { pSBC } from "./utils/helpers";
const NeomorphicSwitch = ({ size, color, radius, onChange, active, b1, b2, c1, c2, d1, bMain, cMain, dMain, }) => {
    const pressed = useValue(active ? 1 : 0);
    const onTouch = useTouchHandler({
        onEnd: () => {
            // runTiming(pressed, pressed.current === 0 ? 1 : 0, {duration: 300});
            if (onChange) {
                runOnJS(onChange)(pressed.current === 1 ? true : false);
            }
        },
    });
    useEffect(() => {
        runTiming(pressed, active ? 1 : 0, { duration: 300 });
    }, [active]);
    const offset = size / 6;
    const r = radius || size;
    const w = size * 1.8 || 100;
    const h = size;
    const BORDER_WIDTH = offset;
    const DOT_HEIGHT = h / 2;
    const DOT_WIDTH = h / 2;
    const CONTAINER_WIDTH = w - BORDER_WIDTH * 2;
    const CONTAINER_HEIGHT = h - BORDER_WIDTH * 2;
    const src = rect(0, 0, w, h);
    const border = rrect(src, r, r);
    const container = rrect(rect(BORDER_WIDTH, BORDER_WIDTH, CONTAINER_WIDTH, CONTAINER_HEIGHT), r, r);
    const dot = rrect(rect(BORDER_WIDTH + offset, (h - DOT_HEIGHT) / 2, DOT_WIDTH, DOT_HEIGHT), r, r);
    const transform = useComputedValue(() => [
        {
            translateX: mix(pressed.current, 0, CONTAINER_WIDTH - (BORDER_WIDTH + DOT_WIDTH) - offset),
        },
    ], [pressed]);
    const mixedColor = useComputedValue(() => pressed.current === 0
        ? pSBC(c1 || -0.4, color)
        : pSBC(c1 || 0.2, "#efc332"), [pressed]);
    return (React.createElement(Canvas, { style: { width: w + offset + 5, height: h + offset + 5 }, onTouch: onTouch },
        React.createElement(FitBox, { src: src, dst: rect(offset, offset, w - offset, h - offset), children: undefined },
            React.createElement(Box, { box: border, color: pSBC(bMain || 0.1, color) },
                React.createElement(BoxShadow, { dx: offset, dy: offset / 2, blur: offset / 2, color: pSBC(b1 || -0.3, color) }),
                React.createElement(BoxShadow, { dx: -offset, dy: -offset / 2, blur: offset / 2, color: pSBC(b2 || 0.3, color) })),
            React.createElement(Box, { box: container, color: pSBC(cMain || 0.2, color) },
                React.createElement(BoxShadow, { dx: offset, dy: offset, blur: offset, color: mixedColor, inner: true }),
                React.createElement(BoxShadow, { dx: -offset, dy: -offset, blur: offset, color: pSBC(c2 || 0.3, color), inner: true })),
            React.createElement(Group, { transform: transform },
                React.createElement(Box, { box: dot, color: pSBC(dMain || 0.32, color) },
                    React.createElement(BoxShadow, { dx: offset / 2, dy: offset / 2, blur: offset / 2, color: pSBC(d1 || -0.4, color) }))))));
};
export default memo(NeomorphicSwitch);
