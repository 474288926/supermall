<template>
	<div id="category">
		<nav-bar class="category-nav"><template #center>分类</template></nav-bar>
		<div class="content">
			<category-list class="cate-list" :category="category" @selectUtem="selectUtem" />
			<scroll calss="category-scroll" ref="scroll" :probe-type="3" :pull-up="true" >
				<category-goods :subcategories="showSubcategory" @imageLoad="imageLoad" />
			</scroll>
		</div>			
	</div>
</template>

<script>
	import CategoryList from './childComps/CategoryList'
	import CategoryGoods from './childComps/CategoryGoods'

	import NavBar from '../../components/common/navbar/NavBar'
	import Scroll from "../../components/common/scroll/Scroll";

	import {getCategoryList, getSubcategory} from '../../network/category.js'

	export default {
		name: 'Category',
		components: {
			NavBar,
			CategoryList,
			CategoryGoods,
			Scroll
		},
		data() {
			return {
				category: [],
				currentIndex:-1,
				categoryData: {},
			}
		},

		created() {
			this.getCategoryList()

		},

		computed:{
			showSubcategory() {
				if (this.currentIndex === -1) return {}
				return this.categoryData[this.currentIndex].subcategories
			},
		},

		methods: {
			getCategoryList(){
				getCategoryList().then(res =>{
					this.category = res.categorylist
					// console.log(res)
					for (let i = 0; i < this.category.length; i++) {
						this.categoryData[i] = {
							subcategories: {},	
						}
					}
					this.getSubcategory(0)
				})
			},

			getSubcategory(index){
				this.currentIndex = index;
				const maitKey = this.category[index].maitKey;
				getSubcategory(maitKey).then(res =>{
					this.categoryData[index].subcategories = res
					//ES6中的json展开功能
					// this.categoryData = {...this.categoryData}
				})

			},

			//侧边栏的点击事件，点击显示对应的商品信息
			selectUtem(index){
				this.getSubcategory(index)
			},

			imageLoad() {
				this.$refs.scroll.refresh();
				// console.log('159')
			}
		},

	}	
</script>

<style scoped>
#category{
	height: 100vh;
}

.category-nav {
	background-color: var(--color-tint);
	color: #ffffff;
	font-size: 15px;
	position: fixed;
	left: 0;
	right:0;
	top: 0;
	z-index: 9;
}

.content {
	position: absolute;
	left: 0;
	right: 0;
	top: 44px;
	bottom: 49px;
	display: flex;

}

.cate-list{

}
</style>