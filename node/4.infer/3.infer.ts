export {};
class Subject {
	constructor(public subid: number, public subname: string) {}
}

let chinese = new Subject(100, "yuwen");
let math = new Subject(101, "shuxue");
let english = new Subject(101, "english");

let setZSSubject = new Set<Subject>([chinese, math, english]);
type ss = typeof setZSSubject;
type ElementOD0<T> = T extends Set<infer E> ? E : never;

// let result: ElementOD0<Set<Subject>>;
let result: ElementOD0<typeof setZSSubject>;
