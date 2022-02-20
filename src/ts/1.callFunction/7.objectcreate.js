function People(name, phone, sex) {
	this.name = name;
	this.sex = sex;
	this.phone = phone;
}

function ChinesePeople(name, phone, sex, national) {
	People.call(this, name, phone, sex);
	this.national = national;
}

// function _extends(parent, son) {
// 	function Middle() {
// 		this.constructor = son.prototype;
// 	}
// 	Middle.prototype = parent.prototype;
// 	return new Middle();
// }
ChinesePeople.prototype = Object.create(People.prototype);
ChinesePeople.prototype.constructor = ChinesePeople;

// ChinesePeople.prototype.constructor = ChinesePeople;
const cp1 = new ChinesePeople("力士", "boy", 12345, "han");
const cp2 = new ChinesePeople("小雪", "girl", 22222, "weiwuer");
console.log("cp1", cp1);
console.log("cp2", cp2);
