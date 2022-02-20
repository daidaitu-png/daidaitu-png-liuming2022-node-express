export {};

interface Customer {
	custname: string;
	buymoney: number;
}

// type custFuncType = (cust: Customer) => any;
type custFuncType = (cust: Customer) => string;

// type inferType<T> = T extends (params: infer P) => any ? P : T;
type inferType<T> = T extends (params: any) => infer P ? P : T;
type inferResultType = inferType<custFuncType>;
