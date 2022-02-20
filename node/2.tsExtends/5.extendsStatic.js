module.exports = extendsStatic = (function (Son, Parent) {
	function getStaticExtendsWithForIn(Son, Parent) {
		for (const key in Parent) {
			if (Object.prototype.hasOwnProperty.call(Parent, key)) {
				Son[key] = Parent[key];
			}
		}
	}
	function getStaticExtendsWithObjectKeys(Son, Parent) {
		Object.keys(Parent).forEach((key) => {
			Son[key] = Parent[key];
		});
	}
	function getStaticExtendsWithProto(Son, Parent) {
		Son.__proto__ = Parent;
	}
	return function (Son, Parent) {
		let MyExtendsStatic =
			Object.setPrototypeOf ||
			getStaticExtendsWithForIn ||
			getStaticExtendsWithObjectKeys ||
			getStaticExtendsWithProto;
		return MyExtendsStatic(Son, Parent);
	};
})();
