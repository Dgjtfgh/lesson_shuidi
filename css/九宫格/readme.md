从现代浏览器布局的发展， grid 布局(grid-template-columns grid-template-rows )可以帮我们快速搞定，
但是考虑到兼容性问题， 布局方案降级选择需要考虑
flex 自适应布局方案 通过flex:1 也能完成任务
作为盒子模型和float 布局方案， 结合特定的html结构， 
我们在传统低端浏览器种， 也可以完美解决。 
不过 table display 方案， 我也可以在这类问题种尝试
这个布局也是浏览器布局方案的缩影和历史
BFC -> IFC -> FFC -> GFC
