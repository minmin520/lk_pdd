<template>
    <div class="bottom-tab">
        <span class="tab-item" @click="switchTo('/home')">
            <img :src="$route.path.includes('/home')>0 ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" class="" alt=""/>
            <span :class="$route.path.includes('/home')>0 ? 'on': ''">首页</span>
        </span>
        <span class="tab-item" @click="switchTo('/recommend')">
            <img :src="$route.path === '/recommend' ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" class="" alt=""/>
            <span :class="'/recommend' === $route.path ? 'on': ''">推荐</span>
        </span>
        <span class="tab-item" @click="switchTo('/search')">
            <img :src="$route.path === '/search' ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" class="" alt=""/>
            <span :class="'/search' === $route.path ? 'on': ''">搜索</span>
        </span>
        <span class="tab-item" @click="switchTo('/chat')">
            <img :src="$route.path === '/chat' ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" class="" alt=""/>
            <span :class="'/chat' === $route.path ? 'on': ''">购物车</span>
        </span>
        <span class="tab-item" @click="switchTo('/me')">
            <img :src="$route.path === '/me' ? tabBarImgArr[4].selected : tabBarImgArr[4].normal" class="" alt=""/>
            <span :class="'/me' === $route.path ? 'on': ''">我的</span>
        </span>
    </div>
</template>
<script>
export default {
    name: 'tabbar',
    data() {
        return {
            tabBarImgArr: [
                {
                    normal: require('../../../public/static/img/icon_home.png'),
                    selected: require('../../../public/static/img/icon_home_selected.png')
                },
                {
                    normal: require('../../../public/static/img/icon_intro.png'),
                    selected: require('../../../public/static/img/icon_intro_selected.png')
                },
                {
                    normal: require('../../../public/static/img/icon_search.png'),
                    selected: require('../../../public/static/img/icon_search_selected.png')
                },
                {
                    normal: require('../../../public/static/img/icon_chat.png'),
                    selected: require('../../../public/static/img/icon_chat_selected.png')
                },
                {
                    normal: require('../../../public/static/img/icon_mine.png'),
                    selected: require('../../../public/static/img/icon_mine_selected.png')
                }
            ]
        }
    },
    methods: {
        switchTo(path) {
            this.$router.replace(path);
        }
    },
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .bottom-tab
        width 100%
        height 50px
        background #ffffff
        position fixed
        bottom 0
        left 0
        display flex
        z-index 999
        .tab-item
            display flex
            flex 1
            flex-direction column
            align-items center
            justify-content center
            font-size 14px
            color #666666
            img 
                width 35%
                margin-bottom 2px
            .on 
                color red


</style>
