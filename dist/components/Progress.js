import React, { useEffect } from "react";
import { Blur, Group, LinearGradient, mix, Path, rect, rrect, runTiming, Skia, SweepGradient, useComputedValue, useValue, vec, } from "@shopify/react-native-skia";
const Progress = ({ progressGradientMode, w, h, progressColors, progressBlurAmount, BORDER_X, BORDER_Y, INNER_WIDTH, INNER_HEIGHT, OUTER_WIDTH, OUTER_HEIGHT, r, start, progressWidth, border, }) => {
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
    const pColors = progressColors || ["#2FB8FF", "#9EECD9", "#2FB8FF"];
    const STROKE_WIDTH = progressWidth || border / 2;
    //Draw the progress  path
    const path = Skia.Path.Make();
    path.addRRect(rrect(rect(BORDER_X, BORDER_Y, INNER_WIDTH + (OUTER_WIDTH - INNER_WIDTH) / 2, INNER_HEIGHT + (OUTER_HEIGHT - INNER_HEIGHT) / 2), r, r));
    return (React.createElement(Group, null,
        progressGradientMode === "sweep" ? (React.createElement(SweepGradient, { c: vec(w / 2, h / 2), colors: pColors, mode: "decal" })) : (React.createElement(LinearGradient, { start: vec(0, 0), end: vec(w, h), mode: "clamp", colors: pColors, positions: [0.2, 0.5, 0.85] })),
        progressBlurAmount > 0 && React.createElement(Blur, { blur: progressBlurAmount }),
        React.createElement(Path, { path: path, style: "stroke", strokeWidth: STROKE_WIDTH, strokeCap: "round", end: progress })));
};
export default Progress;
