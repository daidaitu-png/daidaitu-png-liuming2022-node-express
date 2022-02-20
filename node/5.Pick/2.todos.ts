export {};

type Pick<T, K extends keyof T> = {
	[P in K]: T[P];
};

interface Todo {
	title: string;
	completed: boolean;
	description: string;
}

let todoList: Todo[] = [
	{
		title: "da",
		completed: false,
		description: "sdada",
	},
	{
		title: "da",
		completed: false,
		description: "sdada",
	},
];

type Record<T> = {
	[P in keyof any]: T;
};

type todoRecordType = Record<Todo>;

let todoRecord: todoRecordType = {};
todoList.map((todo) => {
	todoRecord[todo["title"]] = todo;
});

console.log(todoRecord);

