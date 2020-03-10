import KButton from './src'
// 可以被npm install 
// Vue.use()
KButton.install = function(Vue) {
    Vue.component(KButton.name, KButton)
}

export default KButton