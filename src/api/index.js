import ajax from './ajax'

// 1、基础路径
const BASE_URL = 'http://127.0.0.1:3000/api';

// 2、请求方法

// 2.1请求首页的轮播图
export const getHomeCasual = () => ajax(BASE_URL + '/homecasual');

// 2.2请求首页的导航
export const getHomeNav = () => ajax(BASE_URL + '/homenav');

// 2.3请求首页的商品数据
export const getShopList = () => ajax(BASE_URL + '/shoplist');

// 2.4请求推荐的商品数据
export const getRecommendShopList = () => ajax(BASE_URL + '/recommendshoplist');

// 2.6请求短信验证码
export const getPhoneCode = (phone) => ajax(BASE_URL + '/send_code', {phone});

// 2.7手机验证码登录
export const phoneCodeLogin = (phone, code) => ajax(BASE_URL + '/login_code', {phone,code}, 'POST');

// 2.8 用户名和密码登录
export const pwdLogin = (name, pwd, captcha) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST');

// 2.8 获取用户的登录信息
export const getUserInfo = () => ajax(BASE_URL + '/user_info');

// 2.12 加入购物车
export const addGoodsToCart = (user_id, goods_id, goods_name, thumb_url, price) => ajax(BASE_URL + '/api/add_shop_cart', {
    user_id, goods_id, goods_name, thumb_url, price
}, 'POST');

