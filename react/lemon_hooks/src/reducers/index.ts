import { combineReducers } from "redux";
// modules 模块化
import { membersReducers } from './members';
import { MemberEntity } from '../model';
// vuex  modules
// 一个文件一个reducer函数
// 接口 reducer 
export interface State {
    members: MemberEntity[]
}
export const state = combineReducers({
    members: membersReducers
})