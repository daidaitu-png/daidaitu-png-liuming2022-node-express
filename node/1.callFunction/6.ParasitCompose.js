function People(name, sex, phone) {
	this.name = name;
	this.sex = sex;
	this.phone = phone;
}

People.prototype.doEat = function () {
	console.log(this.name + "eat...");
};

function createNewPrototypeObj(parent,son) {
	function Middle() {
    this.constructor = son
  }
	Middle.prototype = parent.prototype; // middle.__proto__ = parent.prototype; 
	return new Middle();
}

function ChinesePeople(name, sex, phone, national) {
	People.call(this, name, sex, phone);
	this.national = national;
}

O

ChinesePeople.prototype = createNewPrototypeObj(People,ChinesePeople);
// ChinesePeople.prototype.constructor = ChinesePeople;
const cp1 = new ChinesePeople("力士", "boy", 12345, "han");
const cp2 = new ChinesePeople("小雪", "girl", 22222, "weiwuer");
console.log("cp1", cp1);
console.log("cp2", cp2);
