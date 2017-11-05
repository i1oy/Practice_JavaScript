"use strict"

// Operators
function main() {
    {
        // Unary Operators
        var age = 18;
        ++age; // 19
        --age; // 18
        age++;
        age--;
        var pos = + age;
        var neg = - pos;

        /*  递增和递减操作符不仅适用于整数，
        *   也适用于字符串、布尔值、浮点数值和对象 
        *   
        *   对于字符串、布尔值的操作，其基本上思想是转换为数值，
        *   然后进行加减1的操作
        *   应用于浮点数值时，则直接执行加减1操作
        *   应用于对象时，首先调用valueOf()方法取得可操作性的值
        *   然后对该值应用前述规则
        */

        /* 一元加或减操作符，在应用于非数值时，
        会像Number()转型函数一样执行转换 */
    }

    // Bitwise Operators
    {
        // NOT
        var num1 = 25;
        var num2 = ~num1;   // -26, (-num1 - 1)

        // AND
        var result = 25 & 3;    // 1, 0001 1001 & 0000 0011 = 0000 0001

        // OR
        var result2 = 25 | 3;   //  27, 0001 1001 | 0000 0011 = 0001 1011

        // XOR, 按位异或
        var result3 = 25 ^ 3;   //  26, 0001 1001 ^ 0000 0011 = 0001 1010

        // Left Shift
        var oldVal = 2;
        var newVal = oldVal << 3;   // 16, 0000 0010-> 0001 0000

        // Signed Right Shift
        oldVal = 64;
        var newVal2 = oldVal >> 5;  // 2, 0100 0000 -> 0000 0010

        // Unsigned Right Shift
        var newVal3 = oldVal >>> 5; // 2
        oldVal = -64;
        var newVal4 = oldVal >>> 5; // 134217726
    }

    // Boolean Operators
    {
        // Logical Not
        // !true

        // Logical And
        // true && false

        // Logical Or
        // true || false

    }

    // Multiplicative Operators
    {
        // ES定义了3个乘性操作符：乘法，除法，求模
        // *, /, %
    }

    // Additive Operators
    {
        // +/-
    }

    // Relational Operators
    {
        // <, >, <=, >=
    }

    // Equality Operators
    {
        // ==, !=
        console.log(null == undefined);  // true
        
        // ===, !==
        console.log(null === undefined);  // false
    }

    // Conditional Operators
    {
        // variable = boolean_expression ? true_value : false_value;

    }

    // Assignment Operators
    {
        // 赋值操作符
        // =, *=, /=, %=, +=, -=, <<=, >>=, >>>=, <<<
    }

    // Comma Operators
    {
        // 逗号操作符多用于声明多个变量；除此之外，还可以用于赋值。
        // 在用于赋值时，逗号操作符会返回表达式中的最后一项。
    }


};

main();