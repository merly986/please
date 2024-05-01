import { makeAutoObservable } from 'mobx';


class AutorizationStore {
	isAutorization: boolean = false
	constructor() {
		makeAutoObservable(this);
	}


	isAutorizationAction = () => {
		this.isAutorization = true
	}

	isLogOutAction = () => {
		this.isAutorization = false
	}


}

export default new AutorizationStore()