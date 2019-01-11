<template>
    <div class="shop-container" v-if="homeshoplist.length > 0">
        <div class="shop-list">
            <li class="shop-list-item" v-for="(goods, index) in homeshoplist" :key="index">
                <img :src="goods.hd_thumb_url" alt="" width="100%" />
                <h4 class="list-item-title">{{goods.goods_name}}</h4>
                <div class="list-item-bottom">
                    <span class="item-price">{{goods.market_price}}</span>
                    <span class="item-counter">{{goods.sales_tip}}</span>
                    <div class="item-user" v-for="(bubble, index) in goods.bubble" :key="index">
                        <img :src="bubble.avatar" alt="" width="30px" />
                    </div>
                    <div class="item-buy">去拼单></div>
                </div>
            </li>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "HotShopList",
        computed:{
            ...mapState(['homeshoplist']),
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .shop-container
        margin-bottom: 50px
        background-color #f5f5f5
        margin-bottom 70px
        .shop-list
            .shop-list-item
                width 100%
                margin-bottom 10px
                background-color #ffffff
                list-style none
                .list-item-title
                    height 40px
                    width 94%
                    margin-left 3%
                    padding 0 4px
                    overflow hidden
                    line-height 20px
                    font-weight normal
                .list-item-bottom
                    width 100%
                    display flex
                    flex-direction row
                    align-items center
                    padding-bottom 10px
                    .item-price
                        color #f00
                        font-size 18px
                        margin-left 10px
                        flex 1
                    .item-counter
                        font-size: 12px;
                        color: #ccc;
                        flex 2
                    .item-user
                        flex 1
                        img
                            border-radius 50%
                        img:nth-child(2)
                            margin-left -6px
                    .item-buy
                        flex 2
                        width 60px
                        height 34px
                        background #f00
                        border-radius 8px
                        text-align center
                        color #ffffff
                        line-height 34px
                        margin 0 10px
</style>
