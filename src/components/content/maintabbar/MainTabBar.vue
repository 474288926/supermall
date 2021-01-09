<template>
	      <tab-bar>
	      	<tab-bar-item path="/home" activeColor="#FF6666">
	      		<template #item-icon><img  src="../../../assets/img/home.png" alt=""></template>
	      		<template #item-icon-active><img  src="../../../assets/img/home-active.png" alt=""></template>
	      		<template #item-text><div>首页</div></template>
	      	</tab-bar-item>
	      	<tab-bar-item path="/category">
	      		<template #item-icon><img src="../../../assets/img/category.png" alt=""></template>
	      		<template #item-icon-active><img src="../../../assets/img/category-active.png" alt=""></template>
	      		<template #item-text><div>分类</div></template>
	      	</tab-bar-item>
	      	<tab-bar-item path="/cart" activeColor="#FF6666">
	      		<template #item-icon><img src="../../../assets/img/shoppingcart.png" alt=""></template>
	      		<template #item-icon-active><img src="../../../assets/img/shoppingcart-active.png" alt=""></template>
	      		<template #item-text><div>购物车</div></template>
	      	</tab-bar-item>
	      	<tab-bar-item path="/my" activeColor="#FF6666">
	      		<template #item-icon><img src="../../../assets/img/my.png" alt=""></template>
	      		<template #item-icon-active><img src="../../../assets/img/my-active.png" alt=""></template>
	      		<template #item-text><div>我的</div></template>
	      	</tab-bar-item>
	      </tab-bar>
</template>

<script>
	import TabBar from '../../common/tabbar/TabBar'
	import TabBarItem from '../../common/tabbar/TabBarItem'

	export default {
		name: 'MainTabBar',
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style scoped>

</style>