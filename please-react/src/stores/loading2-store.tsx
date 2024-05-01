import { makeAutoObservable } from 'mobx';
class Loading2Store {
	loading: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	loadingStart = () => {
		this.loading = true;
	};

	loadingEnd = () => {
		this.loading = false;
	};
}
export default Loading2Store;