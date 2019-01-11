<template>
    <a class="recommend-item">
        <img :src="item.hd_thumb_url" alt=""/>
        <div class="item-title">
            <img :src="item.image_url" alt="">
            <h4>{{item.goods_name}}</h4>
        </div>
        <div class="tag-container">
            <span>退货包运费</span>
            <span>爱逛街</span>
            <span>立减3元</span>
        </div>
        <div class="item-bottom">
            <span class="item-price">¥{{item.market_price}}</span>
            <span class="item-sale">{{item.sales_tip}}</span>
            <div class="item-find" @click="clickCellBtn(item)">
                加入购物车>
            </div>
        </div>
    </a>
</template>

<script>
export default {
  name: 'ShopList',
  props: {
      item: Object,
      clickCell: {
          type: Function,
          default: ()=>{}
      }
  } 
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
.recommend-item
    list-style none
    width 49%
    background-color #ffffff
    margin 0 0 2px 0
    img
        width 100%
    .item-title
        display flex
        flex-direction row
        margin 4px 4px
        img
            width 29px
            height 15px
            margin-right 2px
        h4
            font-size 14px
            line-height 20px
            font-weight normal
            color #111111
            height 20px
            overflow hidden
            margin 0 2px
    .tag-container
        display flex
        flex-direction row
        margin 4px 4px
        span
            color #FF5706
            background-color rgba(255,87,6, 0.08)
            font-size 12px
            margin 0 4px
    .item-bottom
        display flex
        flex-direction row
        align-items center
        margin 4px 0 4px 4px
        .item-price
            color #e02e24
            font-size 16px
            font-weight 700
            flex 1
        .item-sale
            font-size 12px
            color #cccccc
            margin 0 4px
            flex 2
        .item-find
            width 104px
            height 26px
            border 1px solid #c6c6c6
            color #58595b
            font-size 12px
            flex 2
            border-radius 8px 0 0 8px;
            border-right none
            text-align center
            line-height 26px
</style>

