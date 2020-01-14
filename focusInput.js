

$(document).ready(function () {
    //定义点击区域,与聚焦input的class模板
    const CLICK_MODULE = "focus-input";
    const FOCUS_MODULE = "input-focus";
    //嵌套深度，若1即点击其父元素聚焦
    const DEEP = 2;
    //选择器开关[聚焦input数据类型分别为text，tel，number，textarea]
    const OPEN = [true, true, true, false]




    focusThis = (value) => {
        for (let i = 0; i < value; i++) {
            let module_a = "." + CLICK_MODULE + i;
            let module_b = "." + FOCUS_MODULE + i;
            $(module_a).click(function () {
                $(module_b).focus();
                console.log("绑定：[" + i + "] 触发focus;");
            })
        }
    }

    var tank = {};
    tank.contain = [];
    tank.input = [];
    const TYPE = ["input[type='text']", "input[type='tel']", "input[type='number']", "input[type='textarea']"]

    for (let t = 0; t < 4; t++) {
        tank.contain[t] = tank.input[t] = $(TYPE[t]);
    }
    for (let d = 0; d < DEEP; d++) {
        for (let c = 0; c < 4; c++) {
            tank.contain[c] = tank.contain[c].parent();
        }
    }

    var count = 0;
    var addCount = 0;
    for (let a = 0; a < 4; a++) {
        if (OPEN[a] === true) {
            for (let i = 0; i < tank.contain[a].length; i++) {
                let text = CLICK_MODULE + count;
                let textC = FOCUS_MODULE + count;
                $(tank.contain[a][i]).addClass(text);
                $(tank.input[a][i]).addClass(textC);
                count++;
            }
            addCount = OPEN[a] ? (addCount + tank.contain[a].length) : addCount;
        }
    }
    focusThis(addCount);
});