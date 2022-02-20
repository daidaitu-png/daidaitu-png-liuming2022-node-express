import { type } from "os";

export {};

type func1 = (one: number, two: string) => string;
type func2 = (one: number) => string;

type beginType1 = func1 extends func2 ? func1 : never;
type beginType2 = func2 extends func1 ? func2 : never;

type extractType1 = Extract<func1, func2>;
type extractType2 = Extract<func2, func1>;

let func: func1 = (one: number, two: string): string => {
	return "sdad";
};
func(3, "sd");

function testFun(fun: func1) {
	func(3, "sdw");
}

testFun(function (one: number): string {
	console.log(one);
	return "addd";
});
