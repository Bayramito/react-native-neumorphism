import React, { useCallback, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
const NeumorphismButton = (props) => {
    const { size = 12 } = props;
    const [isDown, setDown] = useState(false);
    const handlePressIn = useCallback(() => {
        setDown(true);
    }, [setDown]);
    const handlePressOut = useCallback(() => {
        setDown(false);
    }, [setDown]);
    const gradColors = isDown ? ["#ECF0F1", "#D9DDE0"] : ["#D9DDE0", "#ECF0F1"];
    const buttonCommonStyle = {
        borderRadius: size,
        shadowRadius: size * 1.5,
    };
    const buttonOuterStyle = {
        shadowOffset: { width: size, height: size },
        marginTop: size,
        marginBottom: size,
    };
    const buttonInnerStyle = {
        shadowOffset: { width: -size, height: -size },
    };
    const buttonFaceStyle = {
        borderRadius: size,
        padding: size,
    };
    return (React.createElement(TouchableWithoutFeedback, { onPressIn: handlePressIn, onPressOut: handlePressOut },
        React.createElement(View, { style: [styles.buttonOuter, buttonCommonStyle, buttonOuterStyle] },
            React.createElement(View, { style: [styles.buttonInner, buttonCommonStyle, buttonInnerStyle] },
                React.createElement(LinearGradient, { colors: gradColors, useAngle: true, angle: 145, angleCenter: { x: 0.5, y: 0.5 }, style: [styles.buttonFace, buttonFaceStyle, props.style] }, props.children)))));
};
const styles = StyleSheet.create({
    buttonOuter: {
        flexDirection: "row",
        flexWrap: "wrap",
        borderRadius: 12,
        shadowOffset: { width: 12, height: 12 },
        shadowColor: "#D9DDE0",
        shadowOpacity: 1.0,
        shadowRadius: 18,
        marginTop: 12,
        marginBottom: 12,
    },
    buttonInner: {
        backgroundColor: "#D9DDE0",
        borderRadius: 12,
        shadowOffset: { width: -12, height: -12 },
        shadowColor: "#ECF0F1",
        shadowOpacity: 1.0,
        shadowRadius: 18,
    },
    buttonFace: {
        borderRadius: 12,
        padding: 12,
    },
});
export default NeumorphismButton;
