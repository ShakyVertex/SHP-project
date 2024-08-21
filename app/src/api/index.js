// 对所有的api接口进行统一管理
import requests from './request'
import mockRequests from './mockAjax'

// 获取三级菜单数据
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')

// 获取banner（Home首页轮播图）
export const reqGetBannerList = () => mockRequests.get('/banner')

// 获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')

// 获取搜索模块数据
export const reqGetSearchInfo = (params) => requests({
    url: "/list",
    method:"post",
    data: params
})