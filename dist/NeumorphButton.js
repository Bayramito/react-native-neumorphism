import { useEffect } from "react";
import { Box, mix, rect, rrect, useComputedValue, useTouchHandler, useValue, } from "@shopify/react-native-skia";
import { runOnJS, useSharedValue } from "react-native-reanimated";
import { width } from "../../../assets/styles/main";
const BUTTON_WIDTH = width;
const BUTTON_HEIGHT = 60;
const NeuButton = ({ text, fontSize, fontColor, onPress, isActive, onPanBegin = () => { }, onPanEnd = () => { } }) => {
    // constants
    const CANVAS_HEIGHT = BUTTON_HEIGHT + 25;
    const src = rect(5, 5, BUTTON_WIDTH, BUTTON_HEIGHT);
    const border = rrect(src, CANVAS_HEIGHT / 6, CANVAS_HEIGHT / 6);
    const container = rrect(rect(10, 10, BUTTON_WIDTH - 10, BUTTON_HEIGHT - 10), 10, 10);
    const isPressable = useSharedValue(false);
    useEffect(() => {
        if (isActive === true) {
            isPressable.value = true;
        }
        else {
            isPressable.value = false;
        }
    }, [isActive]);
    const pressed = useValue(0);
    const onTouch = useTouchHandler({
        onStart: () => {
            // runTiming(pressed, 1, {duration: 150});
            runOnJS(onPanBegin)();
        },
        onEnd: () => {
            // runTiming(pressed, 0, {duration: 150});
            if (isPressable.value) {
                runOnJS(onPress)();
            }
            runOnJS(onPanEnd)();
        },
    }, [isActive, isPressable]);
    const c1 = useComputedValue(() => `rgba(255,255,255,${mix(pressed.current, 0, 0.75)})`, [pressed]);
    const c2 = useComputedValue(() => `rgba(189,195,199,${mix(pressed.current, 0, 1)})`, [pressed]);
    const b1 = useComputedValue(() => `rgba(255,255,255,${mix(pressed.current, 0.3, 0.75)})`, [pressed]);
    const b2 = useComputedValue(() => `rgba(189,195,199,${mix(pressed.current, 0.3, 0.75)})`, [pressed]);
    return style = {};
    {
        width: BUTTON_WIDTH, height;
        CANVAS_HEIGHT, justifyContent;
        "center", alignItems;
        "center";
    }
};
 >
    isActive;
{
    isActive;
}
text = { text };
width = { BUTTON_WIDTH };
height = { CANVAS_HEIGHT } /  >
    style;
{
    {
        width: BUTTON_WIDTH, height;
        CANVAS_HEIGHT;
    }
}
onTouch = { onTouch } >
    { isActive } && x;
{
    20;
}
y = { 20:  };
width = { BUTTON_WIDTH } - 40;
height = { BUTTON_HEIGHT } - 15;
r = { 10:  } >
    start;
{
    {
        x: 0, y;
        0;
    }
}
end = {};
{
    x: BUTTON_WIDTH, y;
    CANVAS_HEIGHT;
}
colors = { ["#ffB692", "#FA6B17", "#ffB692"]:  }
    /  >
    blur;
{
    10;
}
style = "solid" /  >
    /RoundedRect>;
color;
"transparent" /  >
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
color = { b1 } /  >
    dx;
{
    10;
}
dy = { 10:  };
blur = { 5:  };
color = { b2 } /  >
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
    < /FitBox>;
{ /*<TitleComponent {...{fontSize, text, fontColor, pressed}} />*/ }
/Canvas>
    < /View>;
;
;
export default NeuButton;
