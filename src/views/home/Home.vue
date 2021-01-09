<template>
	<div id="home">
		<nav-bar class="home-nav"><template #center>购物街</template></nav-bar>
		<tab-control class="home-tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick" v-show="isTabFixed" ref="topTabControl" />
		<scroll class="home-scroll" ref="scroll" :data="showGoods" :probe-type="3" :pull-up="true"  @scroll="getPostion" @pullingUp="loadMore" >
			<home-swiper :cbanners="banners" @swiperimageLoad="swiperimageLoad" />
			<home-recommend :cproducts="products"/>
			<home-feature-view/>
			<tab-control class="home-tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl" />
			<good-list :cgoods="showGoods" />
		</scroll>
		<back-top @click.native="backTopClick" v-show="isShowBackTop" />
	</div>
</template>

<script>
 	import NavBar from '../../components/common/navbar/NavBar'
 	import Scroll from '../../components/common/scroll/Scroll'

 	import HomeSwiper from "./childComps/HomeSwiper";
 	import HomeRecommend from "./childComps/HomeRecommend";
 	import HomeFeatureView from "./childComps/HomeFeatureView";

 	import TabControl from '../../components/content/tabControl/TabControl'
 	import GoodList from '../../components/content/good/GoodList'

 	import {getHomeMultidata, getGoodsData} from '../../network/home.js'
 	import VueEvent from "../../common/event";
 	import {itemListenterMixin, backTopMixin} from '../../common/mixin'

	export default {
		name: 'Home',
		components: {
			NavBar,
			HomeSwiper,
			HomeRecommend,
			HomeFeatureView,
			TabControl,
			GoodList,
			Scroll
		},

		mixins: [itemListenterMixin, backTopMixin],

		data() {
			return {
				banners: [],
				products: [],
				goods: {
					pop: {page: 0, list: []},
					new: {page: 0, list: []},
					sell: {page: 0, list: []}
				},
				currentType: 'pop',
				taboffsetTop: 0,
				isTabFixed: false,
				saveY: 0
			}
		},
		computed: {
		            showGoods() {
		                return this.goods[this.currentType].list
		            }
		},

		 activated() {
		 	this.$refs.scroll.scrollTo(0, this.saveY);
		    	// 同时刷新better-scroll防止不能滚动
		    	this.$refs.scroll.refresh();
		 },

		deactivated() {
			this.saveY = this.$refs.scroll.getScrollY();
			VueEvent.off('itemImageLoad')
		},

		created() {
			this.getHomeMultidata()

			this.getHomeGoodsData('pop')
			this.getHomeGoodsData('new')
			this.getHomeGoodsData('sell')
	
		},

		methods: {
			tabClick(index){
				switch(index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break		
				}

				this.$refs.topTabControl.currentIndex = index;
				this.$refs.tabControl.currentIndex = index;
				// console.log(this.$refs.scroll.getScrollY())
				
			},


			getHomeMultidata(){
				getHomeMultidata().then(res => {
					// console.log(res.data.recommend.list);
					this.banners= res.data.banner.list;
					this.products = res.data.recommend.list;
					// console.log(res)
				})
			},
			getHomeGoodsData(type) {
				
				let page = this.goods[type].page + 1
				getGoodsData(type, page).then(res => {
					// console.log(res)
					this.goods[type].list.push(...res.data)
					this.goods[type].page += 1 	
					
				})
				
			},

		            getPostion(postion) {
		            	// 判断backtopclick是否吸顶
	            	    	this.listenShowBackTop(postion)
	            	    	// 判断tabControl是否吸顶
	            	    	this.isTabFixed = -postion.y > this.taboffsetTop
		            },
		            loadMore() {
		            	
	            		this.getHomeGoodsData(this.currentType)
	            		this.$refs.scroll.finishPullUp()
	            		this.$refs.scroll.refresh()

		            },
		            swiperimageLoad() {
		            	// console.log(this.$refs.tabcontrol.$el.offsetTop)
		            	 this.taboffsetTop = this.$refs.tabControl.$el.offsetTop
		            }
		}

		
	}
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

.home-nav {
	background-color: var(--color-tint);
	color: white;
	position: fixed;
	left: 0;
	right:0;
	top: 0;
	z-index: 9;
}

.home-tab-control{
    /*两个要混合使用*/
    position: sticky;
    top: 43px;/*顶部navbar的高度*/
    z-index: 9;
}

  .home-scroll{
    /* height:300px; */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
</style>