"use strict"

function main() {
    {
        // The Undefined Type
        var val;
        console.log("The Type of val: " + (typeof val));
        console.log("The Type of val2: " + (typeof val2));
        console.log();
    }

    {
        // The Null Type
        // 如果定义的变量准备将来用于保存对象，
        // 那么最好将该变量初始化为null
        var obj = null;
        console.log("The type of obj: " +(typeof obj));    // 'object'
        console.log();
    }

    {
        // The Boolean Type
        // ECMAScript中所有类型的值均有与true和false等价的值，
        // 可以调用Boolean函数进行转换
        var found = true;
        var lost = false;
        var message = "Hello world.";
        var messageAsBoolean = Boolean(message);
        if (messageAsBoolean === found) {
            console.log(message);
            console.log();
        }
    }

    {
        // The Number Type
        // 使用IEEE754-2008格式来表示整数与浮点数值

        //Integer
        var intNum = 18;
        // var octalNum = 022; //Octal literals are not allowed in strict mode.        
        var hexNum = 0x12;
        console.log("intNum = " + intNum + "\n");
        // console.log("octalNum = " + octalNum + "\n");
        console.log("hexNum = " + hexNum + "\n"); 

        //Float
        // 浮点数值的计算会产生舍入误差，
        // 故不要测试某个特定的浮点值
        var pi = 3.14;

        // 数值转换
        var num = Number("18");
        var num2 = parseInt("123BLUE"); // 123
        var num3 = parseInt("0x12");    // 18
        var num4 = parseInt("12", 16);  // 18
        var floatNum = parseFloat("3.14159");

       
    }

    {
        // The String Type
        // 转义序列将被作为一个字符来解析
        var text = "This is the letter sigma: \u03A3";
        console.log(text);

        // 转为字符串
        var age = 18;
        var ageAsString = age.toString();   // '18'
        var found = true;
        var foundAsStirng = found.toString();   // "true"
    }

    {
        // The Object Type
        // ECMAScript中的对象其实就是一组数据和功能的集合
    }

}

main();