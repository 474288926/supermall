import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const My = () => import('../views/my/My')
const Detail = () => import('../views/detail/Detail')

const routes = [
	{
		path: '',
		redirect: '/home',
		meta:{
		      showFooter:true
		}
	},
	{
		path: '/home',
		component: Home,
		meta:{
		      showFooter:true
		}		
	},
	{
		path: '/category',
		component: Category,
		meta:{
		      showFooter:true
		}		
	},
	{
		path: '/cart',
		component: Cart,
		meta:{
		      showFooter:true
		}				
	},
	{
		path: '/my',
		component: My
	},
	{
		path: '/detail',
		component: Detail
	},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
