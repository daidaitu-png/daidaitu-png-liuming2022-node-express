import { Food } from "./entity";

export class FoodDao {
	arrayListFood!: ArrayList;
	init() {
		let foodFish = new Food("F100", "十八碗", "400g泡椒鱼头");
		let foodChafing = new Food("F101", "顶呱呱", "香辣娃娃火锅");
		let foodDatong = new Food("F102", "KFC", "大桶炸鸡");
		let foodFour = new Food("F103", "麦当劳", "ice-cream");
		let foodFive = new Food("F104", "华莱士", "ice-cream2");
		let foodSix = new Food("F105", "成都餐厅", "蚂蚁上树");
		let foodSeven = new Food("F106", "郭林家常菜", "大乱炖");
		let foodEight = new Food("F107", "韩正味", "石锅拌饭");
		this.arrayListFood = new ArrayList();
		this.arrayListFood.add(foodFish);
		this.arrayListFood.add(foodChafing);
		this.arrayListFood.add(foodDatong);
		this.arrayListFood.add(foodFour);
		this.arrayListFood.add(foodFive);
		this.arrayListFood.add(foodSix);
		this.arrayListFood.add(foodSeven);
		this.arrayListFood.add(foodEight);
		return this.arrayListFood;
	}
	findAllFoods() {
		return this.init();
	}
}

// export class Flower {}

export class CustomerDao {}
