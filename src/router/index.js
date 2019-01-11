import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home/Home';
import Recommend from '../pages/Recommend/Recommend';
import Chat from '../pages/Chat/Chat';
import Search from '../pages/Search/Search';
import Me from '../pages/Me/Me';
import Login from '../pages/Login/Login';

import Hot from '../pages/Home/Children/Hot/Hot';
import Box from '../pages/Home/Children/Box'
import Dress from '../pages/Home/Children/Dress'
import Ele from '../pages/Home/Children/Ele'
import Food from '../pages/Home/Children/Food'
import General from '../pages/Home/Children/General'
import Man from '../pages/Home/Children/Man'
import Mbaby from '../pages/Home/Children/Mbaby'
import Shirt from '../pages/Home/Children/Shirt'

import Mesetting from '../pages/Me/MeSetting';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                // 热门版块
                {
                    path: 'hot',
                    component: Hot,
                    meta: {
                        showBottomTabBar: true
                    }
                },
                // 服饰版块
                {
                    path: 'dress',
                    component: Dress
                },
                // 鞋包版块
                {
                    path: 'box',
                    component: Box
                },
                // 母婴版块
                {
                    path: 'mbaby',
                    component: Mbaby
                },
                // 百货版块
                {
                    path: 'general',
                    component: General
                },
                // 食品版块
                {
                    path: 'food',
                    component: Food
                },
                // 内衣版块
                {
                    path: 'shirt',
                    component: Shirt
                },
                // 男装版块
                {
                    path: 'man',
                    component: Man
                },
                // 电器版块
                {
                    path: 'ele',
                    component: Ele
                },
                // 重定向
                {
                    path: '/home',
                    redirect: '/home/hot'
                }
            ],
            meta: { showBottomTabBar: true}
        },
        {
            path: '/recommend',
            component: Recommend,
                meta: {
                    showBottomTabBar: true
                }
        },
        {
            path: '/chat',
            component: Chat,
                meta: {
                    showBottomTabBar: true
                }
        },
        {
            path: '/search',
            component: Search,
                meta: {
                    showBottomTabBar: true
                }
        },
        {
            path: '/setting',
            component: Mesetting
        }, {
            path: '/me',
            component: Me,
            meta: {
                showBottomTabBar: true
            }
        }, {
            path: '/login',
            component: Login
        }, {
            path: '/',
            component: Home
        }
    ]
});