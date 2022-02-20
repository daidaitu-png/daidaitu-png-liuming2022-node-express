export {};

interface Customer {
	custname: string;
	buymoney: number;
}

// type custFuncType = (cust: Customer) => any;
type custFuncType = (cust: Customer, str: string) => string;

// type inferType<T> = T extends (params: infer P) => any ? P : T;
type inferType<T> = T extends (params: infer P) => any ? P : number;
type inferResultType = inferType<custFuncType>;
