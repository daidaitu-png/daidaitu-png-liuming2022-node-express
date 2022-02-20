export {};

type CustObjType = {
	custname: string;
	degree: number;
};

type funcType = (one: number, two: string) => void;

function func(custobj: CustObjType) {
	console.log("func", custobj.custname);
}

function func1(custfunc: funcType) {
	custfunc(23, "re");
}

func1(function (one: number, two: string) {
	console.log("one:", one, "two:", two);
});

type CustObjType3 = { custname: string; degree: number };
type funcType3 = (one: CustObjType3, two: string) => void;

let func3: funcType3 = function (one: CustObjType3, two: string) {
	console.log(one.custname, ":", two);
};
func3({ custname: "zhangsna", degree: 65 }, "good");

let func31: funcType3 = function ({ degree }: CustObjType3, two: string) {
	console.log(degree, ":", two);
};

function func4(func3: funcType3) {
	func3({ custname: "zhangsna", degree: 65 }, "good");
}

func4(function (one: CustObjType3, two: string) {
	console.log("func4", one.custname, ":", two);
});

func4(function ({degree}: CustObjType3, two: string) {
	console.log("func4", degree, ":", two);
});
