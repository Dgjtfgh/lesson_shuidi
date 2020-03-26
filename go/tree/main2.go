// go  tree
package main

import "fmt"

// 树结点
type Node struct {
	value int
	left  *Node
	rigth *Node
}

// 找结点  时间复杂度   由链表的O(N) -> O(logN)
func (node *Node) FindNode(n *Node, x int) *Node {
	if n == nil {
		return nil
	} else if n.value == x {
		return n
	} else {
		p := node.FindNode(n.left, x) // 沿着左子树
		if p != nil {                 // 找到了
			return p
		}
		return node.FindNode(n.rigth, x) // 沿着右子树
	}
}

func (node *Node) GetTreeHeigth(n *Node) int {
	if n == nil {
		return 0
	} else {
		// 当前结点的高度？  Math.max(左子树高度+1, 右子树高度+1)
		lHeight := node.GetTreeHeigth(n.left)
		rHeight := node.GetTreeHeigth(n.rigth)
		if lHeight > rHeight {
			return lHeight + 1
		} else {
			return rHeight + 1
		}
	}
}

func (node *Node) GetLeafNode(n *Node) {
	// 	// 叶子结点，  左结点和右结点为空
	if n != nil {
		if n.left == nil && n.rigth == nil {
			fmt.Printf("%d", n.value)
		}
		node.GetLeafNode(n.left)
		node.GetLeafNode(n.rigth)
	}
}

func preorderTraversal(n *Node) {
	if n == nil {
		return
	}
	fmt.Printf("%d ", n.value)
	preorderTraversal(n.left)
	preorderTraversal(n.rigth)
}

func midsequenceTraversal(n *Node) {
	if n == nil {
		return
	}

	midsequenceTraversal(n.left)
	fmt.Printf("%d ", n.value)
	midsequenceTraversal(n.rigth)
}

func postorderTraversal(n *Node) {
	if n == nil {
		return
	}
	postorderTraversal(n.left)
	postorderTraversal(n.rigth)
	fmt.Printf("%d ", n.value)
}

func CreateNode(value int) *Node {
	return &Node{value, nil, nil} // & 取地址
}

// tree  treeNode   递归的概念来定义的
func main() {
	root := CreateNode(5) // 根结点
	root.left = CreateNode(2)
	root.rigth = CreateNode(4)
	root.left.rigth = CreateNode(7)
	root.left.rigth.left = CreateNode(6)
	root.rigth.left = CreateNode(8)
	root.rigth.rigth = CreateNode(9)

	fmt.Printf("%d\n", root.FindNode(root, 4).value)
	fmt.Printf("%d\n", root.GetTreeHeigth(root))
	root.GetLeafNode(root)
	fmt.Print("\n")
	// 前序遍历
	preorderTraversal(root)
	fmt.Print("\n")
	// 中序遍历
	midsequenceTraversal(root)
	fmt.Print("\n")
	// 后序遍历
	postorderTraversal(root)
}