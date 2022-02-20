export {};

class Vehicle {
	public brand: string;
	public vehicleNo: string;
	public days: number;
	// public total: number;
	public deposit: number;
	constructor(
		brand_: string,
		vehicleNo_: string,
		days_: number,
		// total_: number,
		deposit_: number
	) {
		this.brand = brand_;
		this.vehicleNo = vehicleNo_;
		this.days = days_;
		// this.total = total_;
		this.deposit = deposit_;
	}
	public calRent() {
		console.log(this.brand + " 车牌号：" + this.vehicleNo + " 开始被租");
		return 0;
	}
	public payDeposit() {
		console.log(
			this.brand + " 车牌号：" + this.vehicleNo + " 支付了" + this.deposit
		);
	}
	public saveShow() {
		console.log("车规则。。。");
		console.log(this.brand + " 车牌号：" + this.vehicleNo + " 违规了");
	}
}

class Car extends Vehicle {
	public type: string;
	constructor(
		brand_: string,
		vehicleNo_: string,
		days_: number,
		// total_: number,
		deposit_: number,
		type_: string
	) {
		super(brand_, vehicleNo_, days_, deposit_);
		this.type = type_;
	}
	public getPriceByType() {
		let rentMoneyByDay: number = 0;
		if (this.type === "audiQ7") {
			rentMoneyByDay = 800;
		} else if (this.type === "bjxdg8") {
			rentMoneyByDay = 400;
		} else if ((this.type = "farali3")) {
			rentMoneyByDay = 200;
		}
		return rentMoneyByDay;
	}

	public calRent() {
    super.calRent()  // Vehicle.prototype.calRent()
		return this.days * this.getPriceByType();
	}
}

class Customer {
	rent() {}
}

let car = new Car("audi", "京45654", 3, 100000, "audiQ7");
console.log(car.calRent());



class Bus extends Vehicle {
	public seatNum: number;
	constructor(
		brand_: string,
		vehicleNo_: string,
		days_: number,
		// total_: number,
		deposit_: number,
		seatNum_: number
	) {
		super(brand_, vehicleNo_, days_, deposit_);
		this.seatNum = seatNum_;
    if(this.seatNum>200){
      throw new ErrorEvent('座位数不能>200')
    }
	}
	public getPriceBySeatNum() {
		let rentMoneyBySeatNum: number = 0;
		if (this.seatNum <= 16) {
			rentMoneyBySeatNum = 800;
		} else if (this.seatNum >16) {
			rentMoneyBySeatNum = 400;
		} else if ((this.seatNum >40)) {
			rentMoneyBySeatNum = 200;
		}
		return rentMoneyBySeatNum;
	}

	public calRent() {
		return this.days * this.getPriceBySeatNum();
	}
}

let bus = new Bus("audi", "京45654", 3, 100000, 20);
console.log(bus.calRent());