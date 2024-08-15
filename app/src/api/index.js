// 对所有的api接口进行统一管理
import requests from './request'
import mockRequests from './mockAjax'

// 三级联动接口
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')
export const reqGetBannerList = () => mockRequests.get('/banner')