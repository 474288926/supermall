<template>
	<scroll class="content" ref="scroll" :pull-up="true">
		<cart-list-item v-for="(item, index) in cartList " :key="index" :product="item" />
	</scroll>
</template>

<script>
	import CartListItem from './CartListItem'

	import Scroll from "../../../components/common/scroll/Scroll";

	import { mapGetters } from 'vuex';

	export default {
		name: 'CartList',
		components : {
			Scroll,
			CartListItem
		},
		computed: {
			...mapGetters(['cartList'])
		},
		activated(){
			this.$refs.scroll.refresh()
		}
	}
</script>

<style scoped>
  .content{
    /* height:300px; */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 93px;
    right: 0;
    left: 0;
  }
</style>