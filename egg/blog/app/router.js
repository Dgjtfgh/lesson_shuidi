/* eslint-disable no-multi-spaces */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // bolg
  // url / method  get  控制器
  router.get('/', controller.home.index);
  // 显示博客列表  所有的博客都查出来
  router.get('/posts', controller.post.index);
  // 显示某篇博客
  // router.get('/posts/:id');
  // 新增
  router.get('/posts/create', controller.post.new);  // 创建表单
  router.post('/posts', controller.post.create);     // 提交表单
  // 删除某篇博客
  // router.delete('/posts/:id');
  // 修改某篇博客
  // router.put('/posts/:id');
};
