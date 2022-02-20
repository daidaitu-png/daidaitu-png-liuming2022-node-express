let _extends = (function (Son, Parent) {
	function getStaticExtendsWithForIn(Son, Parent) {
		for (const key in Parent) {
			if (Object.prototype.hasOwnProperty.call(Parent, key)) {
				Son[key] = Parent[key];
			}
		}
	}
	function getStaticExtendsWithObjectKeys(Son, Parent) {
		Object.keys[Parent].forEach((key) => {
			Son[key] = Parent[key];
		});
	}
	function getStaticExtendsWithProto(Son, Parent) {
		Son.__proto__ = Parent;
	}
	let MyExtendsStatic = function (Son, Parent) {
		let MyExtendsStatic =
			Object.setPrototypeOf ||
			getStaticExtendsWithForIn ||
			getStaticExtendsWithObjectKeys ||
			getStaticExtendsWithProto;
		return MyExtendsStatic(Son, Parent);
	};
	return function (Son, Parent) {
		MyExtendsStatic(Son, Parent);
		function Middle() {
			this.constructor = Son;
		}
		if (Parent) {
			Middle.prototype = Parent.prototype;
			Son.prototype = new Middle();
		} else {
			Son.prototype = Object.create(null);
		}
		// Son.prototype =
		// 	Parent === null
		// 		? Object.create(null)
		// 		: ((Middle.prototype = Parent.prototype), new Middle());
	};
})();

var Vehicle = (function () {
	function Vehicle(brand_, vehicleNo_, days_, deposit_) {
		this.brand = brand_;
		this.vehicleNo = vehicleNo_;
		this.days = days_;
		this.deposit = deposit_;
		// console.log("constructor Vehicle=>this.brand", this.brand);
	}
	Vehicle.prototype.calRent = function () {
		console.log("constructor Vehicle=>this.brand", this.brand);
		console.log(this.brand + " 车牌号为：" + this.vehicleNo + "开始被租");
		return 0;
	};
	Vehicle.prototype.payDesposit = function () {
		console.log(
			this.brand + " 车牌号为：" + this.vehicleNo + " 支付了：" + this.deposit
		);
	};
	Vehicle.prototype.safeShow = function () {
		console.log("车规则。。。。");
		console.log(this.brand + " 车牌号为：" + this.vehicleNo + " 违规了");
	};
	Vehicle.count = 3;
	return Vehicle;
})();

var Car = (function (_super) {
	_extends(Car, _super);
	function Car(brand_, vehicleNo_, days_, deposit_, type_) {
		var _this = _super.call(this, brand_, vehicleNo_, days_, deposit_) || this;
		_this.type = type_;
		return _this;
	}
	Car.prototype.getPriceByType = function () {
		var rentMoneyByDay = 0;
		if (this.type === "audiQ7") {
			rentMoneyByDay = 800;
		} else if (this.type === "bjxdg8") {
			rentMoneyByDay = 400;
		} else if ((this.type = "farali3")) {
			rentMoneyByDay = 200;
		}
		return rentMoneyByDay;
	};
	Car.prototype.calRent = function () {
		_super.prototype.calRent.call(this);
		return this.days * this.getPriceByType();
	};
	return Car;
})(Vehicle);

let car = new Car("audi", "京45654", 3, 100000, "audiQ7");
console.log(car.calRent());
console.log(Car.count);
console.log("Object.create(null)",Object.create(null));
