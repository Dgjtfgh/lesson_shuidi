// 向外提供一个reducer 函数
// redux reducer 纯函数
// members [] 初始状态
import { MemberEntity } from '../model';
export const membersReducers = (state: MemberEntity[] = []) => {
    return state;
}