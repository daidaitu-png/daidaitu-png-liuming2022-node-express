export {};

// Omit 反向抓取数据

interface Todo {
	title: string;
	completed: boolean;
	description: string;
}

interface AA {
	[props: string]: any;
}

type Pick<T, K extends keyof T> = {
	[P in K]: T[P];
};
type Exclude<T, K> = T extends K ? never : T;
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type TodoOmitDesc = Omit<Todo, "description">;// Omit 反向抓取数据

type Record<T> = {
	[P in keyof any]: T;
};

type todoRecordType = Record<Todo>;
