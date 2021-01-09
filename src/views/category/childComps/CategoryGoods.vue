<template>
	<div class="category-goods" ref="good">
		<div class="item" v-for="(item,index) in subcategories.list" :key="index">
			<a :href="item.link">
				<img class="item-img" :src="item.img" alt="" @load="imgLoad">
				<div class="item-text">{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CategoryGoods',
		props:{
			subcategories: {
				type: Object,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				counter: 0
			}
		},
		methods: {
			imgLoad() {
				if (++this.counter === this.$refs.good.children.length){
					this.$emit('imageLoad');
				}
			}
		}

	}
</script>

<style scoped>
.category-goods{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	height: 100%;
}

.item {
	width: 30%;
	text-align: center;
	font-size: 12px;
	float: right;
	padding: 8px;
}

.item-img {
	width: 100%;
	border-radius: 25px;
}

.item-text {
	margin-top: 15px;
}
</style>