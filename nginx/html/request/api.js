/*
 * @Author: your name
 * @Date: 2020-06-02 15:52:03
 * @LastEditTime: 2020-06-04 09:20:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \officialWebsite\request\api.js
 */
/* ***************************incoming*********************************** */
function findById(params) { //面签页面--根据apid查询已有信息
    return service({
        url: '/api/backend/approvalProcess/findById',
        method: 'get',
        params
    })
}

function getIndex22(params) {

    return service({
        url: 'shop/api/index/getIndexPage',
        method: 'post',
        data: JSON.stringify(params)
    })
}
function getIndex(params) { //页面--index数据
    return service({
        url: 'website/api/index/getIndexPage',
        method: 'get',
        params
    })
}
/**
 *  页面--产品数据
 * @param {*} params categoryId  pageSize  pageIndex
 */
function goodList(params) { //页面--产品数据
    return service({
        url: 'website/api/index/goodList',
        method: 'get',
        params
    })
}

/**
 *  页面--各类列表数据
 * @param {*} params categoryId  pageSize  pageIndex
 */
function newList(data) { //页面数据
    return service({
        url: 'website/api/index/newsList',
        method: 'post',
        data
    })
}
/**
 *  页面--各类列表数据
 * @param {*} params 参数：id
 */
function getNewsByid(data){
    return service({
        url: '/website/api/index/getNewsByid',
        method: 'post',
        data
    })
}

/**
 *  页面--配置数据
 * @param {*} params categoryId  pageSize  pageIndex
 */
function getWbconfig(data) { 
    return service({
        url: 'website/api/index/getWbconfig',
        method: 'post',
        data
    })
}
/**
 * 
 * @param {*} data  title weixin email  phonenumber content 
 */


function saveWords(data) {
    return service({
        url: 'website/api/index/saveWords',
        method:'post',
        data
    })
}

