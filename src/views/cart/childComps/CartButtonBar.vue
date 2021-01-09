<template>
    <div class="bottom-bar">
        <div class="check-content">
            <check-button class="check-button" :is-checked="isSelectAll" @click.native="checkClick" />
            <span>全选</span>
        </div>
        <div class="price">合计：{{totalPrice}}</div>
        <div class="calculate" @click="calcClick" >去计算：{{checkLength}}</div>
    </div>
</template>

<script>
    import CheckButton from "../../../components/content/checkButton/CheckButton";
    import { mapGetters } from 'vuex'

    export default {
        name: "CartBottonBar",
        components: {CheckButton},
        computed: {
                ...mapGetters(['cartList']),

                totalPrice() {
                    return '￥' + this.cartList.filter(item => {
                        return item.checked
                    }).reduce((preValue, item) => {
                        return preValue + item.lowNowPrice * item.count
                    }, 0).toFixed(2)
                },

                checkLength() {
                    return this.cartList.filter(item => item.checked).length
                },

                isSelectAll() {
                    if(this.cartList.length === 0 ) return false
                    return !(this.cartList.filter(item => !item.checked).length)    
                }
        },

        methods: {
            checkClick() {
                if(this.isSelectAll) {
                    return this.cartList.forEach(item => item.checked = false)
                }else{
                    return this.cartList.forEach(item => item.checked = true)
                }
            },

            calcClick() {
                if(this.checkLength === 0) {
                    this.$toast.show('请选择商品')
                }
            }
        }

    }
</script>

<style scoped>
  .bottom-bar{
    position: fixed;
    display: flex;
    bottom: 49px;
    left: 0;
    right: 0;


    height: 44px;
    line-height: 44px;

    background-color: #e3e7e5;
    font-size: 15px;

  
  }
  .check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 70px;
  }
  .check-button{
    padding-left: 2px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }
  .price{
    margin-left: 40px;
    flex: 1;
  }
  .calculate{
    width: 90px;
    height: 35px;
    background: orangered;
    border-radius: 25px;
    color: white;
    text-align: center;
    line-height: 35px;
    margin: 5px;
  }
</style>