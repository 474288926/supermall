import {request} from './request.js';

export function getDetail(id) {
	return request({
		url: '/api/index/index/detail',
		responseType: 'json',
		params: {
			id
		}
	})
}

export function getRecommend() {
	return request({
		url: '/api/index/index/recommend'
	})
}

export class Goods {
	constructor(itemInfo, columns, services) {
		this.title = itemInfo.title;
		this.desc = itemInfo.desc;
		this.price = itemInfo.price;
		this.oldPrice = itemInfo.oldPrice;
		this.lowNowPrice = itemInfo.lowNowPrice;
		this.discount = itemInfo.discountDesc;
		this.columns = columns;
		this.services = services;
		this.discountBgColor = itemInfo.discountBgColor;
	}
}