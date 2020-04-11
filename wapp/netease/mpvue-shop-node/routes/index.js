const router = require('koa-router')({
    prefix: '/xwk'
});
const controllers = require('../controllers');

// 首页相关接口
router.get('/index/index', controllers.home.index);

// 搜索相关的接口
router.get('/search/indexaction', controllers.search.index.indexAction);
router.post('/search/addhistoryaction', controllers.search.index.addHistoryAction);
router.post('/search/clearhistoryaction', controllers.search.index.clearHistoryAction);
router.get('/search/helperaction', controllers.search.index.helperAction);

// 商品详情
router.get('/goods/detailaction', controllers.goods.index.detailAction);

// 收藏相关的接口
router.post('/collect/addcollect', controllers.collect.index.addCollect);

router.post('/order/submitAction', controllers.order.index.submitAction);

module.exports = router