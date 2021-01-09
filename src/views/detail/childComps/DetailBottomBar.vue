<template>
    <div class="bottom-bar">
      <div class="bar-item bar-left">
        <div>
          <i class="icon"></i>
          <span class="text">客服</span>
        </div>
        <div>
          <i class="icon"></i>
          <span class="text">店铺</span>
        </div>
        <div>
          <i class="icon"></i>
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="bar-item bar-right">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
      </div>
<!--      <sport-ball ref="ball" class="sport-ball"></sport-ball>-->
    </div>
</template>

<script>
    export default {
        name: "DetailBottomBar",
        methods:{
            addToCart(){
                this.$emit('addCart')
            }
        }
    }
</script>

<style scoped>
.bottom-bar{
  display: flex;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #ffffff;
  text-align: center;
}

  .bar-item{
    flex: 1;
    display: flex;
  }
  .bar-item>div {
    flex: 1;
  }
  .bar-left .text{
    font-size: 13px;
  }
  .bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("../../../assets/img/my.png");
    background-size: 22px 22px;
  }

  .bar-right{
    font-size: 15px;
    color: #ffffff;
    line-height: 58px;
  }
  .bar-right .cart{
    background-color: gold;
    color: #333333;
  }
  .bar-right .buy{
    background-color: #ff8198;
  }
</style>