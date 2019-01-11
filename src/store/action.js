import {
    getHomeCasual,
    getHomeNav,
    getShopList,
    getRecommendShopList,
    getUserInfo
} from "../api/index";
import {
    HOME_CASUAL, HOME_NAV, SHOP_LIST, RECOMMEND_LIST, USER_INFO
} from './mutation-type'
export default {
  // 1. 获取首页的轮播图
  async reqHomeCasual({commit}) {
      const result = await getHomeCasual();
      commit(HOME_CASUAL, {
          homecasual: result.message
      });
  },
  // 2. 获取首页的导航
  async reqHomeNav({commit}) {
      const result = await getHomeNav();
      commit(HOME_NAV, {
          homenav: result.message
      });
  },
  // 3. 获取首页商品列表
  async reqShopList({commit}) {
      const result = await getShopList();
      commit(SHOP_LIST, {
          homeshoplist: result.message
      });
  },
  // 4. 获取推荐商品列表
  reqRecommend({commit}) {
      return new Promise(async  (resolve, reject) => {
          const result = await getRecommendShopList();
          commit(RECOMMEND_LIST, {
              recommendlist: result.message
          });
          resolve()
      })
  },
  // 6、同步用户信息
  syncUserInfo({commit}, userInfo) {
    commit(USER_INFO, {
        userInfo
    });
  },
  // 7、异步获取用户信息
  async getUserInfo({commit}) {
      console.log(0);
      const result = await getUserInfo();
      console.log(result);
      commit(USER_INFO, {userInfo: result.message});
  },
}