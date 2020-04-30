// vuex state getters actions mutations
// redux state, reducer actions
import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import { getBannerRequest } from '../../../api/request';

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
});

// export const changeRecommendList = (data) => ({
//   type: actionTypes.CHANGE_RECOMMEND_LIST,
//   data: fromJS(data)
// });

// export const changeEnterLoading = (data) => ({
//   type: actionTypes.CHANGE_ENTER_LOADING,
//   data
// });

export const getBannerList = () => {
  return (dispatch) => {
    // 1. ajax 请求
    // 2. 修改
    getBannerRequest().then(data => {
      const action = changeBannerList(data.banners);
      dispatch(action);
    }).catch(() => {
      console.log("轮播图数据传输错误");
    }) 
  }
};
// export const getRecommendList = () => {
//   return (dispatch) => {
//     getRecommendListRequest().then(data => {
//       dispatch(changeRecommendList(data.result));
//       dispatch(changeEnterLoading(false));//改变loading
//     }).catch(() => {
//       console.log("推荐歌单数据传输错误");
//     });
//   }
// };