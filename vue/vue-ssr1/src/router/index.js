const vueRouter = require("vue-router");
const Vue = require("vue");

Vue.use(vueRouter);

module.exports = () => {
    return new vueRouter({
        mode: "history",
        routes: [{
                path: "/",
                component: {
                    template: `<h1>this is home pages</h1>`
                },
                name: "home"
            },
            {
                path: "/about",
                component: {
                    template: `<h1>this is about pages</h1>`
                },
                name: "about"
            }
        ]
    })
}