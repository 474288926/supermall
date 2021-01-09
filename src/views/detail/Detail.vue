<template>
	<div id="detail">
		<detail-nav-bar class="detail-nav" @centerClick="centerClick" ref="nav" />
		<scroll class="content" ref="scroll" :probe-type="3" :pull-up="true" @scroll="contentScroll">
			<detail-swiper :ctop-Image="topImage" />
			<detail-bese-info :goods="goodsInfo" />
			<detail-shop-info :shop="shopInfo" />
			<detail-image-info :detail-Info="detailInfo" @imageLoad="imageLoad" />
			<detail-param-info :param-info='paramInfo' ref="params" />
			<detail-comment-info :comment-Info="commentInfo" ref="comment" />
			<good-list :cgoods="recommend" ref="recommend" />
		</scroll>
		<detail-bottom-bar @addCart="addToCart" />
		<back-top @click.native="backTopClick" v-show="isShowBackTop" />
	</div>
</template>

<script>
	import DetailNavBar from './childComps/DetailNavBar'
	import DetailSwiper from './childComps/DetailSwiper'
	import DetailBeseInfo from './childComps/DetailBeseInfo'
	import DetailShopInfo from './childComps/DetailShopInfo'
	import DetailImageInfo from './childComps/DetailImageInfo'
	import DetailParamInfo from './childComps/DetailParamInfo'
	import DetailCommentInfo from './childComps/DetailCommentInfo'
	import DetailBottomBar from "./childComps/DetailBottomBar"

	import Scroll from '../../components/common/scroll/Scroll'
	import GoodList from '../../components/content/good/GoodList'

	import {getDetail, Goods, getRecommend} from '../../network/detail.js'
	import VueEvent from "../../common/event";
	import {itemListenterMixin, backTopMixin} from '../../common/mixin'
	import {debounce} from '../../common/utils'
	import { mapActions } from 'vuex'

	export default {
		name: 'Detail',
		components:{
			DetailNavBar,
			DetailSwiper,
			DetailBeseInfo,
			DetailShopInfo,
			DetailImageInfo,
			DetailParamInfo,
			DetailCommentInfo,
			DetailBottomBar,
			Scroll,
			GoodList
		},

		mixins: [itemListenterMixin, backTopMixin],

		data(){
			return {
				id: null,
				topImage: [],
				goodsInfo: {},
				shopInfo: {},
				detailInfo: {},
				paramInfo: {},
				commentInfo: {},
				recommend: [],
				themeTopY: [],
				getThemTopY: null,
			}
		},

		methods: {
			...mapActions(['addCart']),

			imageLoad(){
				this.$refs.scroll.refresh();
		                     this.themeTopY = []
		                     this.themeTopY.push(44);
		                     this.themeTopY.push(this.$refs.params.$el.offsetTop)
		                     this.themeTopY.push(this.$refs.comment.$el.offsetTop)
		                     this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
		                     this.themeTopY.push(Number.MAX_VALUE)
				// console.log(this.themeTopY)
			},

			centerClick(index) {
				this.$refs.scroll.scrollTo(0, -this.themeTopY[index] + 44, 100)
			},

		          contentScroll(position) {
			           //监听滚动
			           // console.log(position);
			           // 1.获取y值
			           const positionY = -position.y+44
			           //2.positionY和主题中值进行对比
			           let length = this.themeTopY.length
			           for (let i=0;i<length-1;i++) {
			               if (this.currentIndex !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])){
			                   this.currentIndex = i;
			                   //鼠标移动到两个值交界处时打印
			                   this.$refs.nav.currentIndex = this.currentIndex//实现联动，让索引值等于currentIndex值
			               }
			           }
			           //3.是否显示回到顶部
			           this.listenShowBackTop(position)
		          },

		          addToCart() {
		          		const product = {}
				product.image = this.topImage[0];
				product.title = this.goodsInfo.title;
				product.desc = this.goodsInfo.desc;
				product.price = this.goodsInfo.price;
				product.lowNowPrice = this.goodsInfo.lowNowPrice
				product.id = this.id;
				
				this.addCart(product).then(res => {
					this.$toast.show(res)
				})

				// this.$store.dispatch('addCart', product).then(res => {
				// 	console.log(res)
				// })
				
				// console.log(this.$store.state.cartList)
		          },

		          getDetail() {
			          	// 获取ID
				this.id = this.$route.query.id
				// 发送数据请求获取相应数据
				getDetail(this.id).then(res => {
					const data = res;
					this.topImage = data.cmap;
					
					this.goodsInfo = new Goods(data.itemInfo, data.columns, data.services);

					this.shopInfo = data.shopInfo;

					this.detailInfo = data.detailInfo;

					this.paramInfo = data.itemParams

					this.commentInfo = data.rate
				} )
		          },

		          getRecommend() {
		          		getRecommend().then(res => {
				this.recommend = res.data
			})
		          }

		},

		created() {
			this.getDetail()
			this.getRecommend()
		},

		unmounted() {
			VueEvent.off('itemImageLoad')
		}

	}
</script>

<style scoped>
  #detail{
    position: relative;
    background-color: #ffffff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content{
    height: calc(100% - 44px - 58px);
  }
</style>