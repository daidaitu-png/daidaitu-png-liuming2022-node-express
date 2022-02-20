import ArrayList from "./ArrayList";

export default class Pager {
	firstRecordNoCurPage!: number;
	pageSize: number = 3;
	pageCount: number = 0;
	dataList!: ArrayList;
	constructor(pageCount: number) {
		this.pageCount = pageCount;
	}
	public showCurrentPageData() {
		this.firstRecordNoCurPage = this.pageSize * (this.pageCount - 1);
		let lastRecordNoCurPage = this.firstRecordNoCurPage + this.pageSize - 1;
		return lastRecordNoCurPage >= this.dataList.size() - 1
			? this.dataList.element.slice(
					this.firstRecordNoCurPage,
					this.dataList.size()
			  )
			: this.dataList.element.slice(
					this.firstRecordNoCurPage,
					lastRecordNoCurPage + 1
			  );
	}
}
