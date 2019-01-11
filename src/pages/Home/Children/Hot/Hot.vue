<template>
    <div class="hot">
        <!-- 轮播图 -->
        <div class="swiper-container" v-if="homecasual.length > 0">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(casual, index) in homecasual" :key="index">
                    <img :src="casual.imgurl" alt="" width="100%" />
                </div>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <!-- 中间导航 -->
        <hot-nav/>
        <!-- 广告位 -->
        <div class="hot-ad">
            <img src="../../imgs/hot_ad/home_ad.gif" alt="" width="100%" />
        </div>
        <!-- 商品列表 -->
        <hot-shop-list/>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'

    import HotNav from './HotNav'
    import HotShopList from './HotShopList'
    import {mapState} from 'vuex';
    export default {
        name: "Hot",
        mounted () {
            // 1、请求轮播数据
            this.$store.dispatch('reqHomeCasual');
            // 2、请求首页导航数据
            this.$store.dispatch('reqHomeNav');
            // 3、请求首页商品列表数据
            this.$store.dispatch('reqShopList');
        },
        computed: {
            ...mapState(['homecasual'])
        },
        components: {
            HotNav,
            HotShopList
        },
        watch: {
            homecasual() {
                this.$nextTick(()=>{
                    new Swiper('.swiper-container', {
                        autoplay: true,//可选选项，自动滑动
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                        }
                    });
                })
            }
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .hot
        width 100%
        height 100%
        background #f5f5f5
        .swiper-container
            margin-top 36px
        .hot-ad
            background #ffffff
            margin 8px 0;
            padding 5px
</style>
