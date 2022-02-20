// function _extends(parent, son) {
// 	function Middle() {
// 		this.constructor = son.prototype;
// 	}
// 	Middle.prototype = parent.prototype;
// 	return new Middle();
// }

// function _extends(parent) {
// 	let middle = {};
// 	let newMiddle = Object.setPrototypeOf(middle, parent.prototype);
// 	// newMiddle.__proto__=parent.prototype
// 	return newMiddle;
// }
function _extends(son, parent) {
	let newMiddle = Object.setPrototypeOf(son.prototype, parent.prototype);
	// newMiddle.__proto__=parent.prototype
	return newMiddle;
}
