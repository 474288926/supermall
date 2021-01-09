<template>
	<scroll ref="scroll" :pull-up="true" >
		<div id="category-list">
			<div class="category-title" :class="{active: index === isAction}" v-for="(item, index) in category" :key="index" @click="itemClick(index)">
				{{item.title}}			
			</div>

		</div>
	</scroll>
	
</template>

<script>
	import Scroll from "../../../components/common/scroll/Scroll";

	export default {
		name: 'CategoryList',
		components: {
			Scroll
		},

		data(){
			return {
				isAction: 0
			}
		},

		props: {
			category: Array

		},

		updated() {
			this.$refs.scroll.refresh();
		},

		methods: {
			itemClick(index) {
				this.isAction = index
				this.$emit('selectUtem', index)
			},
		}
	}
</script>

<style scoped>
#category-list{
	width: 100%;
	height: 100%;
	box-sizing: border-box;
}

.category-title{
	height: 44px;
	width: 80px;
	text-align: center;
	line-height: 44px;
}

.category-title.active {
	font-weight: 700;
	color: var(--color-high-text);
	background-color: #fff;
	border-left: 3px solid var(--color-high-text);
}
</style>