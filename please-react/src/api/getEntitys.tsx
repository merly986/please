import axios from 'axios';

export type Posts = {
	id: number
	title: string
	body: string
	userId: number
};


export const getPosts = async () =>
	(await axios.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')).data;