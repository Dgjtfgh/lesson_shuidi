// 树  递归
// 把复杂问题变成多个相同的简单问题   退出条件

// 1. DOM    树状结构  递归
// 		body  root
// 	.container

// 2. Tree
// 3. Vue
// Vue 应用场景
// 	diff ? 算法
// 	树状组件

package main

import (
	"fmt"
)

// 矩形类
type Rectangle struct {
	Length int
	Width  int
}

func (r *Rectangle) Area() int {
	return r.Length * r.Width
}

func main() {
	r := Rectangle{4, 2}
	fmt.Println(r.Area())
}
