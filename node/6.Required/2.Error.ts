export {};

interface Error {
	name: string;
	message: string;
	stack?: string;
}

interface SyntaxError extends Error {}

interface CompileError extends SyntaxError {
	code: number;
	loc?: SourceLocation;
}

export interface SourceLocation {
	start: Position;
	end: Position;
	source: string;
}
export interface Position {
	offset: number;
	line: number;
	column: number;
}

type Required<T> = {
	[P in keyof T]-?: T[P];
};
type CompileErrorType = Required<CompileError>;

type Partial<T> = {
	[P in keyof T]?: T[P];
};

type CompileErrorPartial = Partial<CompileError>;

type ReadOnly<T> = {
	readonly [P in keyof T]: T[P];
};
