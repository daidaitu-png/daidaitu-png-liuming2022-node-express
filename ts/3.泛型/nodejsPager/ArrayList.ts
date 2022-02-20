export default class ArrayList {
	public element: Array<object>;
	constructor() {
		this.element = [];
	}
	public index: number = 0;
	public add(ele: object) {
		this.checkIndex();
		this.element[this.index++] = ele;
	}
	public checkIndex() {}
	public size() {
		return this.element ? this.element.length : 0;
	}
  get(index:number):object{
    
  }
}
