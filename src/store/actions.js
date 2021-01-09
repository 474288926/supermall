import {
	ADD_COUNTER,
	ADD_TO_CART
} from './mutations-types'

export default {
	addCart(context, payload){
		return new Promise(function(resolve, reject) {
			let oldProduct = null;
			//商品如果存在获取cartList变量商品赋值给oldProduct
			for (let item of context.state.cartList) {
				if (item.id === payload.id ){
					oldProduct = item;
				}
			}
			// 商品存在count+1，不存在加入到cartList变量 
			if (oldProduct){
				context.commit(ADD_COUNTER, oldProduct)
				resolve('当前商品数量+ 1')
			}else{
				payload.count = 1
				context.commit(ADD_TO_CART, payload)
				resolve('添加新的商品')
			}			
		})

	} 
}