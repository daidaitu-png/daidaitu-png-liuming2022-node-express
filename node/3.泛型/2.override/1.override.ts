export {};

function cross<T extends object, U extends object>(objOne: T, objTwo: U): T & U;
function cross<T extends object, U extends object, V extends object>(
	objOne: T,
	objTwo: U,
	objThree: V
): T & U & V;
function cross<T extends object, U extends object, V extends object>(
	objOne: T,
	objTwo: U,
	objThree?: V
) {
	let obj = {};
	let combine = obj as T & U;
	Object.keys(objOne).forEach((key) => {
		combine[key] = objOne[key];
	});
	Object.keys(objTwo).forEach((key) => {
		// if (!Object.prototype.hasOwnProperty.call(combine, key)) {
		if (!combine.hasOwnProperty(key)) {
			combine[key] = objTwo[key];
		}
	});
	if (objThree) {
		// let obj = {};
		// let combine2 = obj as T & U & V;
		// let combine2 = combine as T & U & V;
		let combine2 = combine as typeof combine & V;
		Object.keys(objThree).forEach((key) => {
			// if (!Object.prototype.hasOwnProperty.call(combine2, key)) {
			if (!combine2.hasOwnProperty(key)) {
				combine2[key] = objThree[key];
			}
		});
		return combine2;
	}
	return combine;
}
