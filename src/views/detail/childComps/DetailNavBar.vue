<template>
	<nav-bar class="nav-bar">
		<template #left><img src="../../../assets/img/sb.png" alt="" @click="backClick"></template>
		<template #center><div v-for="(item, index) in title" class="center-item" :class="{active: currentIndex === index}" @click="centerClick(index)">{{item}}</div></template>
	</nav-bar>
</template>

<script>
	import NavBar from '../../../components/common/navbar/NavBar'

	export default {
		name: 'DetailNavBar',
		components: {
			NavBar
		},
		data(){
			return {
				title: ['商品','参数','评论','推荐'],
				currentIndex: 0
			}
		},
		methods: {
			centerClick(index) {
				this.currentIndex = index
				this.$emit('centerClick', index)
			},

			backClick(){
				this.$router.go(-1)
			}
		}		
	}
</script>

<style scoped>
.nav-bar{
	height: 44px;
}

.nav-bar img{
	margin-top: 8px;
	width: 30px;
	height: 30px;
}

>>>.center{
	display: flex;
	font-size: 14px;
}

.center-item{
	flex: 1;
}

.active{
	color: red;
}
</style>