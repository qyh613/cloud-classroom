


import request from '../utils/http' 



/* 轮播图 */
export function getSwiper (){
    return request.get('http://59.111.104.104:8086/weChat/applet/course/banner/list')
}

/* 课程分类 */
export function getCourse (type,pageNum,pageSize){
    return request.post(`/api/weChat/applet/course/list/type?type=${type}&pageNum=${pageNum}&pageSize=${pageSize}`)
}

/* 头条分类 */
export function getHeadlines (pageNum,pageSize){
    return request.post(`/api/weChat/applet/article/list?pageNum=${pageNum}&pageSize=${pageSize}`,{})
}


/* 底部 */

export function getFooter (dictType,pageNum,pageSize,orderByColumn,isAsc){
    return request.post(`/api/system/dict/data/list/open?dictType=${dictType}&pageNum=${pageNum}&pageSize=${pageSize}&orderByColumn=${orderByColumn}&isAsc=${isAsc}`)
}


// 课程详情
export function getCourseDetails (courseId){
    return request.get(`/api/pc/course/detail/${courseId}`)
}

// 评论
export function getComments (courseId){
    return request.get(`/api/pc/comment/commentList/course/${courseId}`)
}





