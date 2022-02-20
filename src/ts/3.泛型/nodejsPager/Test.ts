import Pager from "./Pager";
import { FoodDao } from "./dao";

let pager = new Pager(3)
let foodDao = new FoodDao()
pager.dataList = foodDao.findAllFoods()
console.log(pager.showCurrentPageData());
