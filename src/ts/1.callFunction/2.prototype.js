function Parent(name, age) {
	this.name = name;
	this.age = age;
}
Parent.prototype.friends = ["zs", "ls"];
Parent.prototype.eat = function () {
	console.log(this.name + "eat....");
};
function Son(favor, sex) {
	this.favor = favor;
	this.sex = sex;
}
let parent = new Parent('ww',23)
console.log("parent",parent);
let sonObj = new Son('basketball',"boy")
console.log("sonObj",sonObj);

console.log("Son.prototype",Son.prototype);

Son.prototype = new Parent('wl',38)
Son.prototype.constructor = Son
console.log("Son.prototype",Son.prototype);
let sonObj2 = new Son('basketball',"boy")
console.log("sonObj2",sonObj2);
console.log("sonObj2.favor",sonObj2.favor);
console.log("sonObj2.name",sonObj2.name);
console.log("sonObj2.friends",sonObj2.friends);