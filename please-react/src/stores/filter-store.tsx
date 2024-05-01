import { makeAutoObservable, runInAction } from 'mobx';

import { CustomFilter, getFilter } from '../api/getFilters';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';

class FilterStore {
	filter?: IPromiseBasedObservable<CustomFilter[]>|null;
    isLoading: boolean = false;



    constructor() {
		makeAutoObservable(this);
	}

	getFilterAction = (rentity_filter_name:string) => {
		this.filter = fromPromise(getFilter(rentity_filter_name))	
	}

	clearFilterAction = () => {
		this.filter = undefined
	}


}

export default new FilterStore();