package main

import "fmt"

func singleNumber(nums []int) int {
	// m := make(map[int]int)
	// for _, v := range nums {
	// 	fmt.Printf("%d\n ", v)
	// 	_, ok := m[v] // 检测一下 hashMap 有这个key吗？
	// 	fmt.Println(ok)
	// 	if ok {
	// 		// 出现过 两次
	// 		fmt.Println(m, v)
	// 		delete(m, v) // 删除了
	// 	} else {
	// 		m[v] = 1
	// 	}
	// }
	// for k := range m {
	// 	return k
	// }
	// return 0

	res := 0
	for _, n := range nums {
		res ^= n
	}
	return res
}

func main() {
	// fmt.Printf("%d ", 3^3^4)
	fmt.Printf("%d ", singleNumber([]int{4, 1, 2, 1, 2}))
	// fmt.Printf("%d ", singleNumber([]int{2, 2, 1}))
}
