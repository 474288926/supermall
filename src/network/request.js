import axios from 'axios'
import VueAxios from 'vue-axios'

export function request(config) {
	const instance = axios.create({
		// baseURL: 'http://123.207.32.32:8000',
		timeout: 5000
	})

	// 添加请求拦截器
	instance.interceptors.request.use(function (config) {
	    // 在发送请求之前做些什么
	    return config;
	  }, function (error) {
	    // 对请求错误做些什么
	    
	  });

	// 添加响应拦截器
	instance.interceptors.response.use(function (res) {
	    // 对响应数据做点什么
	    return res.data;
	  }, function (error) {
	    // 对响应错误做点什么
	    console.log(error)
	  });

	return instance(config)
}