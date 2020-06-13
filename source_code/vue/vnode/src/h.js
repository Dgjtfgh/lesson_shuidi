// js   把各种template情况   输出VNode
// tag 标签   
// data  节点的attributes
// 文本节点  没有data
// 有的节点没有子节点
export function h(tag, data = null, children) {
    let flags = null;  // 标记，  什么类型的节点
    return { // VNode
        _isVnode: true,  // 架构vue的过程，就是实现vnode的过程
        flags,   // diff算法优化

    }
}