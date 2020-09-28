import createApp from "./main.js";

const getData = function() {
    return new Promise((reslove, reject) => {
        let str = 'this is async data!';
        reslove(str);
    })
}

export default (context) => {
    return new Promise(async(reslove, reject) => {
        let { url } = context;

        context.propsData = 'this is a data from props!';
        context.asyncData = await getData();

        let { app, router } = createApp(context);
        router.push(url);
        // router 回调函数
        // 当所有异步请求完成之后就会触发
        router.onReady(() => {
            let matchedComponents = router.getMatchedComponents();
            if (!matchedComponents.length) {
                return reject();
            }
            reslove(app);
        }, reject)
    })
}