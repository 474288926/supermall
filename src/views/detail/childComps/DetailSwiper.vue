<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in ctopImage" :key="index">
        <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from '../../../components/common/swiper';
    export default {
        name: "DetailSwiper",
        props: {
            ctopImage:{
                type:Array,
                default() {
                    return []
                }
            }
        },
        data(){
            return {
                isLoad: false
            }
        },
        components:{
            Swiper,SwiperItem
        },
        methods:{
            
        }
    }
</script>

<style scoped>
.detail-swiper{
    height: 300px;
    overflow: hidden;
}
</style>