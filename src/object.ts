// 纯对象类型
// 使用interface关键字定义对象类型
interface O1 { }
let o1: O1 = {
    a: 1
};

interface O2 {
    name: string;
    age: number;
}
let o2: O2 = {
    name: 'ts',
    age: 18
}

interface O3 {
    name: string;
    age: number;
    gender?: boolean        // ? 表达可选属性
}
let o3: O3 = {
    name: 'typescript',
    age: 18,
}

type O3Name = (typeof o3)["name"];
type O3Age = (typeof o3)["age"];
type O3Gender = (typeof o3)["gender"];
type O3All = (typeof o3)[keyof typeof o3];  // keyof O3 ==> "name"|"age"|"gender"

// keyof T关键字的作用是将对象类型的所有key计算一个联合类型
// keyof any    表达对象的任意属性、名称、范围(string | number | symbol )

type KA = keyof any;    // string | number | symbol 

let t1 = { a: 1, b: false, c: [] };
type T1 = keyof typeof t1;

// 类型转换(类型体操)
type T2 = {
    [key in keyof typeof t1]: (typeof t1)[keyof typeof t1]  // 主动(有穷)用in 
}

// typeof   获取一个变量声明或对象的类型
// keyof    将对象类型的所有key计算一个联合类型
// in       给对象的key一个取值范围
// readonly 创建时设置 只读属性

// 任意属性
type T6 = {
    a: number;
    readonly b: string;
    [key: keyof any]: any   // 被动(无穷)用 :
};

let t6: T6 = {
    a: 1,
    b: ''
}

type T7 = {
    a: null;
    b: undefined;
    c: boolean;
    d: string;
    e: number;
};
type T8 = {
    readonly [key in keyof T7]: T7[key];
};
type T9 = {
    [key in keyof T7]?: T7[key];
};
type T10 = {
    readonly [key in keyof T7]?: T7[key];
};
type T11 = {
    -readonly [key in keyof T7]-?: T7[key];
};

// t6.b = '123'     // 无法为“b”赋值，因为它是只读属性
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是任意属性的类型的子类型
// 如何排除联合类型中的某个成员

type T15 = {
    a: number;
    b: string;
}
type T16 = {
    a: 1,
    c: boolean
};

// T15和T16交叉类型(交集)求他们的公共子类型
type T17 = T15 & T16;

let t17: T17 = {
    a: 1,
    b: '',
    c: false,
}

// 对象类型A和B在交叉过程中，如果A和B中对属性不重叠 则相当于合并两个对象类型的所有属性组成一个新的类型
// 如果存在重叠属性 则将重叠属性不同的类型进行再次交叉

type T18 = T15 | T16;
let t18: T18 = {
    a: 1,
    // b: '',
    c: false
}

// 如何给对象类型添加成员？
type T20 = {
    a: number
};
type T21 = {
    b: string
};
type T22 = {
    c: boolean
};
type T23 = {
    d: undefined
};
type T24 = {
    e: null
};
type T25 = T20 & T21 & T22 & T23 & T24;
type T26 = keyof T25;

interface T30 {
    a: number
};
interface T31 extends T30 {
    b: string
};
interface T32 extends T31 {
    c: boolean
};
interface T33 extends T23 {
    d: undefined
};
interface T34 extends T33 {
    e: null
};

/** 
* 在使用interface和type定义对象类型时，需要合并属性：
* 1、type 使用 & 交叉类型
* 2、interface 同名 则自动合并 不同名 使用extends手动继承
*/

export default {};