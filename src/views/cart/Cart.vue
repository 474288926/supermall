<template>
	<nav-bar class="nav-bar">
		<template #center>购物车（{{length}}）</template>
	</nav-bar>
	<cart-list />
	<cart-button-bar  />
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar'
	import CartList from './childComps/CartList'
	import CartButtonBar from "./childComps/CartButtonBar"

	import { mapGetters } from 'vuex'

	export default {
		name: 'Cart',
		components: {
			NavBar,
			CartList,
			CartButtonBar
		},
		computed: {
			//第一种写法
			// ...mapGetters(['cartLength'])
			// 将getter属性另取名字写法
			...mapGetters({
				length : 'cartLength'
			})
		}
	}
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #ffffff;
    font-size: 15px;
  }
</style>