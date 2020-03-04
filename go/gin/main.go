package main

// import "fmt"
// gin 第三方模块github.com    npm
import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	// map hashmap 数据结构 es6 map set
	// js  es5  json  object
	// var countryCapitalMap map[string]string     // 变量声明 没有分配空间
	// countryCapitalMap = make(map[string]string) // make  alloc 空间
	// countryCapitalMap["France"] = "巴黎"
	// countryCapitalMap["Italy"] = "罗马"
	// countryCapitalMap["Japan"] = "东京"
	// countryCapitalMap["India"] = "新德里"

	//遍历
	// arr  索引
	// map  json   键 没有顺序
	// 区间 10 [0-10]  for(var i = 0; i < 10; i++)
	// for country := range countryCapitalMap {
	// 	fmt.Println(country, "首都是", countryCapitalMap[country])
	// }
	// go gin web 引擎
	engine := gin.Default() // const app = express()
	engine.GET("/", func(context *gin.Context) {
		// context  koa  ctx   express  req + res
		// res.send()
		context.String(http.StatusOK, "hello gin get method") // node listen 8080
	})
	// resetful  使用相对应的语义的请求动词 + url语义化  /login  POST
	// /post/1234  GET 读某篇文章
	// /post POST  新增一篇文章
	// /post  GET  获取文章列表
	engine.POST("/", func(context *gin.Context) {
		// 保存数据 加
		context.String(http.StatusOK, "hello gin post method")
	})
	// PUT 修改 整个替换
	// {username: 'ysw', hobbies: ['喝酒', '特斯拉']}
	engine.PUT("/", func(context *gin.Context) {
		// 保存数据
		context.String(http.StatusOK, "hello gin put method")
	})
	engine.DELETE("/", func(context *gin.Context) {
		// 保存数据
		context.String(http.StatusOK, "hello gin delete method")
	})
	// PATCH 更新局部
	engine.PATCH("/", func(context *gin.Context) {
		// 保存数据
		context.String(http.StatusOK, "hello gin patch method")
	})
	// HEAD  不在意返回的内容 response
	// 在不获取资源的情况下，了解资源的信息
	engine.HEAD("/", func(context *gin.Context) {
		// 保存数据
		context.String(http.StatusOK, "hello gin head method")
	})
	// 选项
	// 测试一个url 支持的所有方法
	engine.OPTIONS("/", func(context *gin.Context) {
		// 保存数据
		context.String(http.StatusOK, "hello gin options method")
	})
	// _   我不处理
	_ = engine.Run(":3000")
}
