koa 是node的轻量级开发框架

comment create table

id 
name 用户名称
content 
moment 评论时间 
postid 文章id 
avatar 用户头像

CREAT TABLE USERS{
    id int,
    name varchar[255],
    content varchar[255],
    moment date,
    postid int,
    avatar string
}

- mvc 
  routers 一个模块一个文件 