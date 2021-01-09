import {request} from './request.js';

export function getHomeMultidata() {
	return request({
		url: 'http://123.207.32.32:8000/home/multidata'
	})
}

export function getGoodsData(type ,page) {
	return request({
		url: '/api/index/index/goods',
		responseType: 'json',
		params: {
			type,
			page
		}
	})
}