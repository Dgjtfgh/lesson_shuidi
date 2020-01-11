from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if nums:
            slowP = 0
            for fastP in range(1, len(nums)):
                if nums[fastP] != nums[slowP]:
                    slowP += 1
                    nums[slowP] = nums[fastP]
            return slowP + 1
        else:
            return 0

x = Solution()
print(x.removeDuplicates([1,1,3,3,3,4,5]))