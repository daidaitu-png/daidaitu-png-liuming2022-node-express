export {};

type funcType2 = (one: CustObjType, two: string) => void;
type CustObjType = {
	custname: string;
	degree: number;
	commit: Commit;
};
type Commit = (type: string, payload?: any) => void;

class Store<S> {
	state!: S;
	commit!: Commit;
  constructor(storeOptions:StoreOptions<S>){

  }
}

let store: Store<string> = {
	state: "wangwu",
	commit: (type: string, payload: any) => {
		console.log(type, ": ", payload);
	},
};

// let store2 = new Store();

// let { state: mystate, commit: mycommit }: Store<string> = {
// 	state: "wangwu",
// 	commit: (type: string, payload: any) => {
// 		console.log(type, ": ", payload);
// 	},
// };

let { commit }: Store<string> = {
	state: "wangwu",
	commit: (type: string, payload: any) => {
		console.log(type, ": ", payload);
	},
};

function func12({ commit }: Store<string>, two: string) {
	commit("func12=>login", {
		username: "bajie",
		address: "gaolaozhuang",
	});
}

func12(store, "ads");

interface StoreOptions<S> {
	state: S;
	// action: {
	// 	[key: string]: (store: Store<S>, payload?: any) => any;
	// };
	action: ActionTree<S, S>;
}

interface ActionTree<S, R> {
	// [key: string]: (store: Store<S>, payload?: any) => any;
	[key: string]: ActionHandler<S, R>;
}

type ActionHandler<S, R> = (store: Store<S>, payload?: any) => any;

let actionFunc: ActionHandler<string, number> = (
	{ commit } /*: Store<string>*/,
	payload /*: any*/
) => {
	commit("func12=>searchhistoryfood", {
		id: 100,
		food: "sdadadf",
	});
};

let storeOptions: StoreOptions<string> = {
	state: "zhaoliu",
	action: {
		searchFoodHistory({ commit } /*: Store<string>*/, payload: any) {},
	},
};


function createStore<S>(storeOptions:StoreOptions<S>){
  return new Store<S>(storeOptions)
}