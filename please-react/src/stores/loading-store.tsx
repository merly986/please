import { makeAutoObservable } from 'mobx';
class LoadingStore {
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
export default LoadingStore;