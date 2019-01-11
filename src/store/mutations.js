import {
    HOME_CASUAL,
    HOME_NAV,
    SHOP_LIST,
    RECOMMEND_LIST,
    USER_INFO
} from './mutation-type'
export default {
    [HOME_CASUAL](state, {homecasual}){
        state.homecasual = homecasual;
    },
    [HOME_NAV](state, {homenav}) {
        state.homenav = homenav;
    },
    [SHOP_LIST](state, {homeshoplist}) {
        state.homeshoplist = homeshoplist;
    },
    [RECOMMEND_LIST](state, {
        recommendlist
    }) {
        state.recommendlist = recommendlist;
    },
    [USER_INFO](state, {
        userInfo
    }) {
        state.userInfo = userInfo;
    }
}