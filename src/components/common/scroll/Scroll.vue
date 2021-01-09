<template>
	<div ref="wrapper">
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'

	export default {
		name: 'Scroll',
		props: {
			probeType: {
				type: Number,
				default: 0
			},
			click: {
				type: Boolean,
				default: true
			},
			pullUp: {
				type: Boolean,
        				default: false
			},
			scrollY: {
			        type: Boolean,
			        default: true
			},
			data: {
				type: Object,
				default: null
			}
		},

		mounted() {
			setTimeout(() => {
			        this._initScroll()
			}, 20)
		},

		methods: {
			_initScroll() {
			        if (!this.$refs.wrapper) {
			          return
			        }
			        // better-scroll的初始化
			        this.scroll = new BScroll(this.$refs.wrapper, {
				          probeType: this.probeType,
		        			pullUpLoad: this.pullUp,
		        			click: this.click,
		        			scrollY: this.scrollY
			        })

			        	this.scroll.on('scroll', (postion) => {
					this.$emit('scroll', postion)
				})
			        	
			          this.scroll.on('pullingUp', () => {
				           this.$emit('pullingUp')
			          })

			},        

			scrollTo(x, y, time = 100) {
				this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
			},

			finishPullUp() {
				setTimeout(() => {
					this.scroll.finishPullUp()
				}, 100)
				
			},

			refresh() {
			        // 代理better-scroll的refresh方法
			        this.scroll && this.scroll.refresh()
			},

		           getScrollY() {
		                  //这里不能写 return this.scroll ? this.scroll.y : 0否则点详情再返回会回到顶部，有bug
		                  return this.scroll.y
		           }			
		},

		watch: {
		      // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
		      data() {
		        setTimeout(() => {
		          this.refresh()
		        }, 20)
		      }
		    }
	}
</script>

<style scoped>

</style>