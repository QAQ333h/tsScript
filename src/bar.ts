type A = number;
type B = 1;
type E = 1;
// extends
type C = A extends B ? true : false;
type D = B extends A ? true : false;
type F = B extends E ? (E extends B ? true : false) : false;
// 分布式条件类型