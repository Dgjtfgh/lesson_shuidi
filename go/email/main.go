package main // 包

import (
	"log"
	"net/smtp"

	"github.com/jordan-wright/email"
)

func main() { // 入口函数
	e := email.NewEmail() // :=  定义且赋值
	e.From = "1137807913@qq.com"
	// []  Array  多个用户发邮件  { }集合
	e.To = []string{"525876818@qq.com", "1733407461@qq.com", "2426298429@qq.com", "498165738@qq.com"}
	e.Subject = "你在家还好吗？" // 标题
	// byte   go 类型
	e.Text = []byte("自从放假一别，已有两月，甚是想念") // 内容
	e.HTML = []byte(`
	<ul>
		<li><a href="https://juejin.im/post/5e575e02f265da573b0dad5f">掘金</a></li>
		<li><a href="https://www.baidu.com/">百度</a></li>
	</ul>`)
	// 本地并没有搭建邮件服务器   由腾讯服务器转发
	err := e.Send("smtp.qq.com:25", smtp.PlainAuth("", "1137807913@qq.com", "phtewfndqlchhbfh", "smtp.qq.com"))
	e.AttachFile("marker.png") // 附件
	if err != nil {
		log.Fatal(err)
	}
}
