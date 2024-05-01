import { makeAutoObservable } from 'mobx';

import { Posts, getPosts } from '../api/getPosts';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';

class PostsStore {
	posts?: IPromiseBasedObservable<Posts[]>;
	isLoading: boolean = false;
	constructor() {
		makeAutoObservable(this);
	}

	getPostsAction = () => {
		this.isLoading = true;
		this.posts = fromPromise(getPosts());
		this.isLoading = false;
	}

	clearPostsAction = () => {
		this.posts = undefined;
	}
}

export default new PostsStore();