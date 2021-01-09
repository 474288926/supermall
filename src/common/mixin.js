import {debounce} from "./utils";
import VueEvent from "./event";
import BackTop from '../components/content/backTop/BackTop'

export const itemListenterMixin = {
	mounted() {
			let newRefresh = debounce(this.$refs.scroll.refresh, 200)
			 	
			 VueEvent.on('itemImageLoad', () => {
			 	newRefresh()
			 })

	}
}

export const backTopMixin = {
 	components: {
	    BackTop
	},

	data() {
		  return {
		      isShowBackTop:false
		  }
	},

	methods:{
		  backTopClick(){
		      this.$refs.scroll.scrollTo(0,0)
		  },

		  listenShowBackTop(postion){
		      this.isShowBackTop = (-postion.y) > 1000;
		  }
	}
}