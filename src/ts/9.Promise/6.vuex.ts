export {};

type funcType22 = (one: CustObjType, two: string) => void;
type Commit = (type: string, payload?: any) => void;

type CustObjType = {
	custname: string;
	degree: number;
	commit: Commit;
};

let custobj: CustObjType = {
	custname: "热法",
	degree: 77,
	commit: function (type: string, payload: any) {
		console.log(type, ":", payload);
	},
};
custobj.commit("login", {
	username: "bajie",
	address: "gaolaozhuang",
});

function func1({ commit }: CustObjType, two: string) {
	// console.log("func1: ", custobj_.custname);
	commit("login", {
		username: "bajie",
		address: "gaolaozhuang",
	});
}
func1(custobj, "sdafgg");
