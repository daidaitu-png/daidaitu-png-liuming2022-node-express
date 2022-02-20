export {};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface Todo {
	title: string;
	completed: boolean;
	description: string;
	other?: string;
	date?: Date;
}

type Required<T> = {
	[P in keyof T]-?: T[P];
};

type RequiredTodo = Required<Todo>;

let todoItem: RequiredTodo = {
	title: "da",
	completed: false,
	description: "sdada",
	other: "sd",
	date: new Date(),
};
