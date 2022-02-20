export {};

class Container<T extends object> {
	t: T;
	constructor(t_: T) {
		this.t = t_;
	}
	show(): T {
		console.log(this.t);
		return this.t;
	}
}

let obj2: object = { username: "ls", age: 23 };
let c = new Container<object>(obj2);
c.show();

type objtype = { username: string; age: number };

let obj3: objtype = { username: "ww", age: 45 };
let obj4 = <object>obj3;
let c2 = new Container<objtype>(obj3);
c2.show();

