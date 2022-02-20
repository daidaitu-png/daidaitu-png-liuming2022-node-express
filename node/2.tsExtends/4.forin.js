function People(name, age) {
	this.name = name;
	this.age = age;
}
People.sex = "boy";
People.eat = function () {
	console.log("eat...");
};
People.prototype.play = function () {
	console.log("play ball...");
};

function Middle() {
	this.count = 123;
}
Middle.swim = false;

People.__proto__ = Middle;
// for (const key in People) {
// 	console.log("key", key);
// }

function ChinesePeople(name, sex, love, national) {
	this.name = name;
	this.sex = sex;
	this.love = love;
	this.national = national;
}
for (const key in People) {
	if (Object.prototype.hasOwnProperty.call(People, key)) {
		console.log("key", key);
		ChinesePeople[key] = People[key];
	}
}

console.log(ChinesePeople.sex);
