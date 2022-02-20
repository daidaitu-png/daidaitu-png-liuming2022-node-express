export {};

type CustObjType = {
	custname: string;
	degree: number;
};

let { custname, degree }: CustObjType = { custname: "ww", degree: 123 };

function func(custObj: CustObjType) {
	console.log("func", custObj.custname);
}

func({ custname: "ls", degree: 88 });
