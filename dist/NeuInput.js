import { useEffect, useState } from "react";
import { Box, mix, rect, rrect, runTiming, useComputedValue, useValue, vec, } from "@shopify/react-native-skia";
import { width } from "../../../assets/styles/main";
import { View } from "react-native";
const BUTTON_WIDTH = width;
const BUTTON_HEIGHT = 50;
const NeuInput = ({ text, placeholder, isActive, autoCapitalize = false, disabled, onChangeText, placeholderTextColor, style, onBlur, secureTextEntry = false, onPanBegin = () => { }, onPanEnd = () => { }, children, isTyping = null, }) => {
    // constants
    const [typing, setTyping] = useState(false);
    const CANVAS_HEIGHT = BUTTON_HEIGHT + 25;
    useEffect(() => {
        if (isTyping) {
            setTyping(true);
        }
        else {
            setTyping(false);
        }
    }, [isTyping]);
    const src = rect(5, 5, BUTTON_WIDTH, BUTTON_HEIGHT);
    const border = rrect(src, 10, 10);
    const container = rrect(rect(10, 10, BUTTON_WIDTH - 10, BUTTON_HEIGHT - 10), 10, 10);
    const pressed = useValue(0);
    useEffect(() => {
        if (typing) {
            runTiming(pressed, 1, { duration: 150 });
            onPanBegin();
        }
        else {
            runTiming(pressed, 0.0000000001, { duration: 150 });
            onPanEnd();
        }
    }, [typing]);
    const c1 = useComputedValue(() => `rgba(255,255,255,${mix(pressed.current, 0, 0.75)})`, [pressed]);
    const c2 = useComputedValue(() => `rgba(189,195,199,${mix(pressed.current, 0, 1)})`, [pressed]);
    return style = {};
    {
    }
};
style,
    width;
BUTTON_WIDTH,
    height;
CANVAS_HEIGHT,
    flexDirection;
"row",
    alignItems;
"center",
;
    >
        style;
{
    {
        width: BUTTON_WIDTH, height;
        CANVAS_HEIGHT;
    }
}
 >
    { isActive } && x;
{
    20;
}
y = { 20:  };
width = { BUTTON_WIDTH } - 40;
height = { BUTTON_HEIGHT } - 15;
r = { 10:  };
color = { "red":  } >
    c;
{
    vec(BUTTON_WIDTH / 2, BUTTON_HEIGHT - 15);
}
colors = { ["cyan", "magenta", "yellow", "cyan"]:  }
    /  >
    blur;
{
    10;
}
style = "solid" /  >
    /RoundedRect>;
color;
"#ECF0F1" /  >
    src;
{
    src;
}
dst = { rect(, , BUTTON_WIDTH) { } } - 30, BUTTON_HEIGHT;
 >
    box;
{
    border;
}
color = "#ECF0F1" >
    dx;
{
    -5;
}
dy = {} - 10;
blur = { 5:  };
color = "rgba(255,255,255,.3)" /  >
    dx;
{
    10;
}
dy = { 10:  };
blur = { 5:  };
color = "rgba(189,195,199,.3)" /  >
    /Box>
    < Box;
box = { container };
color = "#ECF0F1" >
    dx;
{
    -5;
}
dy = {} - 3;
blur = { 15:  };
color = { c1 };
inner /  >
    dx;
{
    10;
}
dy = { 10:  };
blur = { 15:  };
color = { c2 };
inner /  >
    /Box>
    < /FitBox>
    < /Canvas>
    < View;
style = { [{ position: "absolute", left: 30, width: "90%" }]:  } >
    {} && onChangeText(text);
placeholder = { placeholder };
editable = {};
disabled;
secureTextEntry = { secureTextEntry };
autoCapitalize = { autoCapitalize };
placeholderTextColor = { placeholderTextColor };
onFocus = {}();
setTyping(true);
onBlur = {}();
{
    if (onBlur) {
        onBlur();
    }
    setTyping(false);
}
/>;
/View>
    < /View>;
;
;
export default NeuInput;
