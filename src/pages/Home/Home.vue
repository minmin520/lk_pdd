<template>
    <div class="home">
        <ly-tab
            v-model="selectedId"
            :items="items"
            :options="options"
            class="fix"
            @change="handleChange">
        </ly-tab>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
            selectedId: 0,
            items: [
                {label: '热门'},
                {label: '服饰'},
                {label: '鞋包'},
                {label: '母婴'},
                {label: '百货'},
                {label: '食品'},
                {label: '内衣'},
                {label: '男装'},
                {label: '电器'}
            ],
            options: {
                activeColor: '#e9232c'
            // 可在这里指定labelKey为你数据里文字对应的字段名
            },
            // 二级路有
            subRouteUrl: ['/home/hot', '/home/dress', '/home/box', '/home/mbaby', '/home/general', '/home/food', '/home/shirt', '/home/man', '/home/ele']
        }
    },
    methods:{
        handleChange(item, index) {
            this.$router.replace(this.subRouteUrl[index]);
        }
    }
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
.home
    background yellow
    width 100%
    height 100%
    .fix 
        position fixed
        left 0
        top 0
        z-index 998
</style>

