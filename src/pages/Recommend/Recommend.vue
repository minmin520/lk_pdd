<template>
  <div class="recommend-container" ref="wrapper" v-if="userInfo.id || recommendlist.length > 0">
    <ul class="recommend">
      <shop-list
        tag="li"
        v-for="(item, index) in recommendlist"
        :item=item
        :key="index"
        :clickCellBtn="dealWithCellBtnClick"
      />
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
import {mapState} from 'vuex';
import ShopList from '../../components/ShopList/ShopList';
import {addGoodsToCart} from '../../api/index'
export default {
    mounted () {
        //console.log(this.recommendlist);
        // 1、请求轮播数据
        this.$store.dispatch('reqRecommend').then(()=>{
            this.$nextTick(()=>{
                this._initBScroll()
            })
        })
    },
    computed: {
        ...mapState(['recommendlist', 'userInfo']),
    },
    components: {
        ShopList
    },
    // watch: {
    //     recommendlist: {
    //         handler(){
    //             this.$nextTick(()=>{
    //                 this._initBScroll();
    //             })
    //         },
    //         deep:true
    //     }
    // },
    methods: {
        _initBScroll() {
            // console.log(this.recommendlist);
            // 1.1 初始化
            this.listScroll = new BScroll(this.$refs.wrapper, {
                scrollY: true,
                click: true
            });
            console.log(this.listScroll);
            // 1.2 监听列表的滚动
            this.listScroll.on('scroll',(pos) => {
                // this.listScroll.refresh();
            });
            // 1.3
            setTimeout(()=>{ this._refresh() },20)
        },
        _refresh(){
            console.log(3);
            this.listScroll.refresh()
        },
        // 监听商品点击
        async dealWithCellBtnClick(goods) {
            console.log(goods);
            // 发送请求
            let result = await addGoodsToCart(goods);
            console.log(result);
        }
    }
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .recommend-container
        background #F5F5F5
        width 100%
        height 100%
        top: 0
        left: 0
        bottom: 0
        right: 0
        overflow hidden
        position: fixed
       .recommend
            display flex
            flex-direction row
            flex-wrap wrap
            justify-content space-between
            width 100%
            margin 0
            padding 0
            padding-bottom 50px
            position relative
            
</style>

