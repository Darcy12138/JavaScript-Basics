# JavaScript-Basics

JavaScript基础学习

# JavaScript基础第01天

## 1-初识JavaScript

### 1.1 JavaScript是什么

+ 是一种运行在客户端的脚本语言(Script就是脚本的意思)
+ 脚本语言,不需要编译,运行过程由js解释器(js引擎)**逐行**来进行解释并执行
+ 可以基于Node.js技术来进行服务器端编程



### 1.2作用

+ **实现业务逻辑和页面控制**

-  表单动态校验（密码强度检测）  （ JS 产生最初的目的 ）
-  网页特效
-  服务端开发(Node.js)
-  桌面程序(Electron)
-  App(Cordova) 
-  控制硬件-物联网(Ruff)
-  游戏开发(cocos2d-js)



### 1.3 ECMAScript

 ECMAScript：规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准。



### 1.4书写位置

1.行内式: 不推荐使用,可读性很差,一般不用

2.内嵌式: 可以将多行js代码写到<script>标签中...通常学习时用的方式

3.外部js文件: 适合代码量比较大的情况 `<script src="my.js"></script>`



## 2-JavaScript的输出语句

为了方便信息的输入输出，JS中提供了一些输入输出语句，其常用的语句如下：

| 方法             | 说明                                                     | 归属   |
| ---------------- | -------------------------------------------------------- | ------ |
| alert(msg)       | 浏览器弹出警示框(主要用来显示消息给用户)                 | 浏览器 |
| console.log(msg) | 浏览器控制台打印输出信息(用来给程序员自己看运行时的消息) | 浏览器 |
| prompt(info)     | 浏览器弹出输入框，用户可以输入                           | 浏览器 |



## 3-变量的概念

### 3.1 什么是变量

变量是一个用于存放数字的容器，通过变量名获取数据，也可以进行修改

### 3.2 变量的使用

- 声明
- 赋值

#### 3.2.1变量的声明

```js
// 声明变量
var age;//声明一个名为age的变量
```

- var 是一个 JS关键字，用来声明变量( variable 变量的意思 )。使用该关键字声明变量后，计算机会自动为变量分配内存空间，不需要程序员管

- age 是程序员定义的变量名，我们要通过变量名来访问内存中分配的空间

#### 3.2.2 变量的赋值

```js
age = 10; //给age 这个变量的赋值为10
```

- = 用来把右边的值赋给左边的变量空间中   此处代表赋值的意思
- 变量值是程序员保存到变量空间里的值

#### 3.2.3 变量的初始化

```js
var age  = 18;  // 声明变量同时赋值为 18   
```

- 声明一个 age的变量 ,并赋值为18



### 3.3 变量的语法拓展

#### 3.3.1 更新变量

一个变量被重新复赋值后，它原有的值就会被覆盖，变量值将以最后一次赋的值为准。

```js
var age = 18;

age = 81;   // 最后的结果就是81因为18 被覆盖掉了  
```

#### 3.3.2 同时声明多个变量

```js
var age = 10,  name = 'zs', sex = 2;     //同时声明多个变量时，只需要写一个 var， 多个变量名之间使用英文逗号隔开。
```

#### 3.3.3 声明变量的特殊情况

| 情况                           | 说明                        | 结果      |
| ------------------------------ | --------------------------- | --------- |
| var  age ; console.log (age);  | 只声明 不赋值               | undefined |
| console.log(age)               | 不声明 不赋值  直接使用     | 报错      |
| age   = 10; console.log (age); | 不声明   只赋值(不推荐使用) | 10        |



### 3.4变量的命名规范

- 由字母(A-Za-z)、数字(0-9)、下划线(_)、美元符号( $ )组成，如：usrAge, num01, _name
- 严格区分大小写。var app; 和 var App; 是两个变量
- 不能 以数字开头。  18age   是错误的
- 不能 是关键字、保留字。例如：var、for、while
- 变量名必须有意义
- 驼峰命名法:首字母小写,后面的单词收字母需要大写





## 4-数据类型

### 4.1 为什么需要数据类型

- 在计算机中，不同的数据所需占用的存储空间是不同的，为了便于把数据分成所需内存大小不同的数据，充分利用存储空间，于是定义了不同的数据类型。
- 简单来说，数据类型就是数据的类别型号。比如姓名“张三”，年龄18，这些数据的类型是不一样的。



### 4.2变量的数据类型

#### 4.2.1 js把数据类型分为两类

- 简单数据类型 （Number,String,Boolean,Undefined,Null）

- 复杂数据类型 （object)	

```js
var age = 10;        // 这是一个数字型
var areYouOk = '是的';   // 这是一个字符串     
```

JavaScript 拥有动态类型，同时也意味着相同的变量可用作不同的类型：

```js
var x = 6;           // x 为数字
var x = "Bill";      // x 为字符串    
```



#### 4.2.2 简单数据类型

| 简单数据类型 | 说明                               | 默认值    |
| ------------ | ---------------------------------- | --------- |
| Number       | 数字型,包含整型值和浮点型值        | 0         |
| Boolean      | 布尔值类型,如true/false,等价于1和0 | false     |
| String       | 字符串类型,如"张翔"                | ""        |
| Undefined    | var a ;只声明不赋值,a=undefined    | undefined |
| Null         | var a = null ;声明变量a的值为空值  | null      |

- 数字型 Number

  JavaScript 数字类型既可以用来保存整数值，也可以保存小数(浮点数）。  

  ```js
  var age = 21;       // 整数
  var Age = 21.3747;  // 小数     
  ```

  1. 数字型进制

     最常见的进制有二进制、八进制、十进制、十六进制。

     ```js
       // 1.八进制数字序列范围：0~7
      var num1 = 07;   // 对应十进制的7
      var num2 = 019;  // 对应十进制的19
      var num3 = 08;   // 对应十进制的8
       // 2.十六进制数字序列范围：0~9以及A~F
      var num = 0xA;   
     ```

     现阶段我们只需要记住，在JS中八进制前面加0，十六进制前面加 0x  

  2. 数字型范围

     JavaScript中数值的最大和最小值

     ```js
     alert(Number.MAX_VALUE); // 1.7976931348623157e+308
     alert(Number.MIN_VALUE); // 5e-324
     ```

     - 最大值：Number.MAX_VALUE，这个值为： 1.7976931348623157e+308

     - 最小值：Number.MIN_VALUE，这个值为：5e-32

  3. 数字型三个特殊值

     ```js
     alert(Infinity);  // Infinity
     alert(-Infinity); // -Infinity
     alert(NaN);       // NaN
     ```

     - Infinity ，代表无穷大，大于任何数值

     - -Infinity ，代表无穷小，小于任何数值

     - NaN ，Not a number，代表一个非数值

  4. isNaN

     用来判断一个变量是否为非数字的类型，返回 true 或者 false

     ![](01/笔记/images/图片17.png)

     ```js
     var usrAge = 21;
     var isOk = isNaN(userAge);
     console.log(isNum);            // false ，21 不是一个非数字
     var usrName = "andy";
     console.log(isNaN(userName));  // true ，"andy"是一个非数字
     ```

- 字符串型 String

  字符串型可以是引号中的任意文本，其语法为 双引号 "" 和 单引号''

  ```js
  var strMsg = "我爱北京天安门~";  // 使用双引号表示字符串
  var strMsg2 = '我爱吃猪蹄~';    // 使用单引号表示字符串
  // 常见错误
  var strMsg3 = 我爱大肘子;       // 报错，没使用引号，会被认为是js代码，但js没有这些语法
  ```

  因为 HTML 标签里面的属性使用的是双引号，JS 这里我们更推荐使用单引号。

  1. 字符串引号嵌套

     JS 可以用单引号嵌套双引号 ，或者用双引号嵌套单引号 (外双内单，外单内双)

     ```js
     var strMsg = '我是"高帅富"程序猿';   // 可以用''包含""
     var strMsg2 = "我是'高帅富'程序猿";  // 也可以用"" 包含''
     //  常见错误
     var badQuotes = 'What on earth?"; // 报错，不能 单双引号搭配
     ```

  2. 字符串转义符

     类似HTML里面的特殊字符，字符串中也有特殊字符，我们称之为转义符。

     转义符都是 \ 开头的，常用的转义符及其说明如下：

     | 转义符 | 解释说明                          |
     | ------ | --------------------------------- |
     | \n     | 换行符，n   是   newline   的意思 |
     | \ \    | 斜杠   \                          |
     | \'     | '   单引号                        |
     | \"     | ”双引号                           |
     | \t     | tab  缩进                         |
     | \b     | 空格 ，b   是   blank  的意思     |
  
  3. 字符串的长度
  
     通过length属性可以获取当前字符串有几个字符
  
     ```js
     let str = '这个字符串有9个字';
     alert(str.length);//弹出9
     ```
  
  

​				4. 字符串的的拼接

​					数值会相加,字符会相连

​			
