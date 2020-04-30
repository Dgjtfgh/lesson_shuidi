import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as actionTypes from './store/actionCreators';
import Slider from '../../components/slider/';
import Scroll from '../../baseUI/scroll/index';
import { Content } from './style';
import {forceCheck} from 'react-lazyload';
import Loading from '../../baseUI/loading/index';
// 将数据状态map
function Recommend(props){
  // const { route } = props;
  // console.log(props)
  const { bannerList, enterLoading } = props;
  const { getBannerDataDispatch } = props;
  useEffect(() => {
    if(!bannerList.size){
      getBannerDataDispatch();
    }
    // if(!recommendList.size){
    //   getRecommendListDataDispatch();
    // }
    // eslint-disable-next-line
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS() : [];

  return (
    <Content>
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
        </div>
      </Scroll>
      { enterLoading ? <Loading></Loading> : null }
    </Content> 
  );
}
 
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
  // 不要再这里将数据toJS,不然每次diff比对props的时候都是不一样的引用，还是导致不必要的重渲染, 属于滥用immutable
  bannerList: state.getIn(['recommend', 'bannerList']),
  // recommendList: state.getIn(['recommend', 'recommendList']),
  // enterLoading: state.getIn(['recommend', 'enterLoading'])//简单数据类型不需要调用toJS
});
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    // getRecommendListDataDispatch() {
    //   dispatch(actionTypes.getRecommendList());
    // },
  }
};
// React.memo 性能优化  props更新的时候 重绘
// HOC 组件  高阶组件  装饰器
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));