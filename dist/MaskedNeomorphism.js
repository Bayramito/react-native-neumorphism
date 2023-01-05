import { useState } from "react";
import { StyleSheet, View } from "react-native";
const MaskedNeomorphism = ({ maskColors, style, children, color, offsetShadow, offsetShadowColors, linearBackground, blurOffset, inner, border, strokeWidth, borderColors, borderInner, saturation, locations, offsetMode, maskConfig, }) => {
    const colors = maskColors || ["#68d59a", "#7F8CFF", "#66dada"];
    return w = { style, width } || 100;
}; // required for better measuring
h = { style, height } || 50;
color = { color } || "#ecf0f1";
offset = { style, padding } || 10;
blurOffset = { blurOffset } || 5;
r = { style, borderRadius } || 10;
offsetShadow = { offsetShadow };
offsetShadowColors = { offsetShadowColors };
offsetMode = { offsetMode };
inner = { inner };
saturation = { saturation };
borderInner = { borderInner };
border = { border };
strokeWidth = { strokeWidth };
strokeColors = { offsetShadowColors };
strokeGradientMode = { "linear":  };
borderColors = { borderColors };
// start
linearBackground = { linearBackground }
    // progressWidth={10}
    >
        style;
{
    {
        width: "100%", flexDirection;
        "row", height;
        "100%", backgroundColor;
        "red";
    }
}
maskElement = {}
    < View;
style = {};
{
    backgroundColor: "transparent",
        flex;
    1,
        justifyContent;
    "center",
        alignItems;
    "center",
    ;
}
    >
        { children }
    < /View>;
    >
        colors;
{
    colors;
}
style = {};
{
    width: "100%", height;
    "100%", ;
    maskConfig === null || maskConfig === void 0 ? void 0 : maskConfig.style;
}
start = { maskConfig, start } || { x: 0, y: 0 };
end = { maskConfig, end } || { x: 1, y: 1 };
locations = { locations } || [0.25, 0.5, 0.8];
/>
    < /MaskedView>
    < /NeomorphComponent>;
;
;
const styles = () => StyleSheet.create({});
export default MaskedNeomorphism;
const useLayout = () => {
    const [layout, setLayout] = useState();
    const onLayout = e => {
        setLayout(e.nativeEvent.layout);
    };
    return { onLayout, layout };
};
