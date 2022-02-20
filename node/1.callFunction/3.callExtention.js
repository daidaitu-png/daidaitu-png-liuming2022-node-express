function Parent(name, age) {
	this.name = name;
	this.age = age;
  console.log(this);
}
Parent.prototype.friend = ["sz", "sd"];
Parent.prototype.eat = function () {
	console.log(this.name + "eat...");
};

function Son(name, age, favor, sex) {
	Parent.call(this, name, age);
	this.favor = favor;
	this.sex = sex;
}

let sonObj2 = new Son("lisi",45,"volleyball","girl")
