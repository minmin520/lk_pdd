<template>
    <div class="hot-nav">
        <!--  滚动区域 -->
        <div class="hot-nav-content" v-if="homenav.length > 0">
            <div class="nav-content-inner">
                <a class="inner-item" v-for="(nav, index) in homenav" :key="index">
                    <img :src="nav.iconurl" alt="" width="30%" />
                    <span>{{nav.icontitle}}</span>
                </a>
            </div>
        </div>
        <!-- 进度条 -->
        <div class="hot-nav-bottom">
            <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'HotNav',
        data () {
            return {
                // 1、 屏幕的宽度
                screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                // 2、滚动内容的宽度
                scrollContentW: 720,
                // 3、滚动条背景的长度
                bgBarW: 100,
                // 4、滚动条的长度
                barXWidth: 0,
                // 5、 起点
                startX: 0,
                // 6、 记录结束点
                endFlag: 0,
                // 7、移动的距离
                barMoveWidth: 0
            }
        },
        mounted(){
            this.getBottomBarWidth();
            this.bindEvent();
        },
        computed:{
            ...mapState(['homenav']),
            innerBarStyle() {
                return {
                    width: `${this.barXWidth}px`,
                    left: `${this.barMoveWidth}px`
                }
            }   
        },
        methods:{
            // 获取滚动条的长度
            getBottomBarWidth() {
                this.barXWidth = this.bgBarW*(this.screenW/ this.scrollContentW);
            },
            // 监听移动事件
            bindEvent() {
                this.$el.addEventListener('touchstart', this.handleTouchStart, false);
                this.$el.addEventListener('touchmove', this.handleTouchMove, false);
                this.$el.addEventListener('touchend', this.handleTouchEnd, false);
            },
            handleTouchStart(event) {
                // 1、获取第一个触点
                let touch = event.touches[0];
                // 2、求出第一个起始点
                this.startX = Number(touch.pageX);
            },
            handleTouchMove(event) {
                // 1、获取移动中的点
                let touch = event.touches[0];
                // 2、求出移动的距离
                let moveWidth = Number(touch.pageX) - this.startX;
                // 3、求出滚动条走的距离
                this.barMoveWidth = -((this.bgBarW/this.scrollContentW)*moveWidth - this.endFlag);
                // 4、边界值的处理
                if (this.barMoveWidth <= 0) {
                    this.barMoveWidth = 0;
                } else if (this.barMoveWidth >= this.bgBarW - this.barXWidth) {
                    this.barMoveWidth = this.bgBarW - this.barXWidth;
                }
            },
            handleTouchEnd() {
                // 获取结束的点
                this.endFlag = this.barMoveWidth;
            }
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .hot-nav
        width 100%
        height 180px
        background #ffffff
        position relative
        padding-bottom 10px
        .hot-nav-content
            width 100%
            height 100%
            overflow-x scroll
            .nav-content-inner
                width 720px
                display flex
                flex-direction row
                flex-wrap wrap
                .inner-item
                    width 90px
                    height 90px
                    display flex
                    flex-direction column
                    justify-content center
                    align-items center
                    img
                        margin-bottom 4px
                    span
                        font-size 12px
        .hot-nav-content::-webkit-scrollbar
            display none
        .hot-nav-bottom
            width 100px
            height 2px
            background-color #ccc
            position absolute
            left 50%
            bottom: 10px
            margin-left -50px
            .hot-nav-bottom-inner
                position absolute
                left 0
                width 0
                height 100%
                background-color orangered
</style>
