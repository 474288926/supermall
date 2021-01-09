import {request} from './request.js';

export function getCategoryList (){
	return request({
		url: '/api/index/index/category',
		responseType: 'json'
	})
}

export function getSubcategory(maitKey) {
	return request({
		url:'/api/index/index/subcategory',
		params: {
			maitKey
		}
	})
}