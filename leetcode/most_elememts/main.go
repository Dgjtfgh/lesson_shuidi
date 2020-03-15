package main

import "fmt"

func majorElement(nums []int) int {
	majority, count := nums[0], 1
	for i := 1; i < len(nums); i++ {
		if count == 0 {
			majority = nums[i]
		}

		if nums[i] == majority {
			count++
		} else {
			count--
		}
	}
	return majority
}

func main() {
	fmt.Println(majorElement([]int{2, 2, 1, 1, 1, 2, 2}))
}
