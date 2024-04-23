// 每一个ts文件默认都不是一个具有作用域的模块 为了全局共享类型
// 但是如果在ts中主动使用模块化语法(import、export、export default)，那么该文件就具备作用域

// ts的内置类型(内置类型)
let n1: number = 1;
let n2: string = "";
let n3: boolean = false;
let n4: null = null;
let n5: undefined = undefined;
let n6: never;   // 空集合  never就是数学集合概念中的空集

// 集合中一个成员的自定义集合
let n7: 1 = 1;
let n8: false = false;
let n9: '' = '';

// 集合中出现两个成员怎么处理
let n10: 1 | 2 = 1;
let n11: 1 | "" = 1;
// 如果有多个成员 需要使用 | 连接组成一个新集合
// 以上操作就是数学概念上的并集
// 交集
let n13: number & 1 = 1;
let n14: number & string;

/** 
总计：
    1.类型的本质是集合，赋值的本质是值属不属于该集合
    2.类型的运算(|=>联合类型、&=>交叉类型)相当于数学中的集合运算(并集、交集)
*/

// ! 确定赋值断言
let n15!: number;
let n16!: 1 | 2;

// 如果变量a:A可以赋值给变量b:B (b=a不报错)则说明什么?
n15 = n16;

// 👀变量的初始化和变量间的赋值本质是判断包含关系👀

// 顶部类型和底部类型
// 顶部类型：是所有集合的父集，顶部类型是所有类型的父类型(any、unknown)
// 底部类型：是所有集合的子集，底部类型是所有类型的子类型(any、undefined、null、never)

// 如何验证某一个类型是顶部类型？
let n17: any;
// n17 = nx;

// n4
// n5

let n23: unknown;
let m1: undefined = n5;
let m2: null = n4;
let m3: unknown = n23;
let m4: any;
n5 = m1;
n4 = m2;
n23 = m3;
m4 = m1;
m1 = m4;

// 并集-->联合类型
// 怎么去定义自定义类型呢？ type
// 使用type关键字定义新类型
type ns = number | string;
type one = 1;

// 使用type关键字给原有类型设置别名
type N = number;    // N就是number类型的别名

export default {}