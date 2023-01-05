import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
const NeumorphismButton = props => {
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
    return onPressIn = { handlePressIn };
    onPressOut = { handlePressOut } >
        style;
    {
        [styles.buttonOuter, buttonCommonStyle, buttonOuterStyle];
    }
     >
        style;
    {
        [styles.buttonInner, buttonCommonStyle, buttonInnerStyle];
    }
     >
        colors;
    {
        gradColors;
    }
    useAngle = { true:  };
    angle = { 145:  };
    angleCenter = {};
    {
        x: 0.5, y;
        0.5;
    }
};
style = { [styles.buttonFace, buttonFaceStyle, props.style]:  }
    >
        { props, : .children }
    < /LinearGradient>
    < /View>
    < /View>
    < /TouchableWithoutFeedback>;
;
;
NeumorphismButton.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    size: PropTypes.number,
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
