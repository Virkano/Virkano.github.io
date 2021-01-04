---
title: ES6的实用技术
date: 2020-1-4 11:30:00
author: Kano Zhao
tags: ["front end", "learning path"]
---

## 一、const 定义常量
ES6之前并没有定声明常量的方式， ES6标准中引入了新的const来定义常量。
```javascript
const a = 123;
a = 456; //会报错，常量无法覆盖
console.log(a);
```

## 二、let块级变量
用let定义的变量只在块当中起作用，离开变量外界的块（括号）就会被销毁。
```javascript
if (true) {
    var a = 123;
    let b = 456;
}
console.log(a);
console.log(b); //报错，访问不到变量
```
```javascript
let a = 123;
let a = 456;
console.log(a); //无法覆盖重复变量
```

## 三、模板自变量
用于字符串拼接和写模板，使用 ` (左上角波浪线)，变量用${}
```javascript
var user = "张三";
var age = 18;
var sex = "男";
console.log(`大家好我的名字是${user}，今年${age}，我是${sex}生`);
console.log("大家好我的名字是"+user+"，今年"+age+"，我是"+sex+"生");//传统写法
```

## 四、解构赋值
交换值
```javascript
var a = 1;
var b = 2;
[a, b] = [b, a];
console.log(a, b); //2, 1
```
从数组里获得元素
```javascript
var array = [1, 2, 3, 4];
var [a, , b] = array;
console.log(a, b); //1, 3
```
从对象中获取值
```javascript
var obj = {user: "张三", age: 18, sex: "男", job: "前端开发"};
var {user, job} = obj
console.log(user, job);
```
返回值解构
```javascript
function arr() {
    var a = 1, b = 2, c = 3, d = 4;
    return {a, b, c, d}
 }
 var {a, c} = arr();
 console.log(a, c); // 1, 3
```

## 五、箭头函数
箭头函数相当于匿名函数，并且简化了函数定义。()中放参数，没有参数就省略，箭头后面是函数体。

```javascript
var fun = (x, y) => {
    console.log(x + y);
}
fun(2, 3)
```
ES6之前访问函数外面的this比较麻烦，箭头函数可以直接访问到最外出的this，不需要转换

## 六、对象中函数的声明
```javascript
var obj = {
    user: "张三",
    job(){
        return "web前端开发"
    }
}
console.log(obj.job())
```

## 七、for-of循环遍历

```javascript
var arr=["aaaa", "bbbb", "cccc", "ddddd"];
for(var i of obj){
    console.log(i)
}
```

## 八、默认参数
```javascript
function fun(x = 0, y = 2, z = true){
    console.log(x, y, z);
}
fun();  // 0 2 true
fun(4, 0, false); // 4 0 false
```

## 九、展开运算符 ...
```javascript
arr1 = [1, 2, 3, 4, 5];
arr2 = ["a", "b", "c", "d"];
arr3 = arr1.concat(arr2);
arr4 = [...arr1, ...arr2];

console.log( arr3 );   //[1, 2, 3, 4, 5, "a", "b", "c", "d"]
console.log( arr4 );   //[1, 2, 3, 4, 5, "a", "b", "c", "d"]
```