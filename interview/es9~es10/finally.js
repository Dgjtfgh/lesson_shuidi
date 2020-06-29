let state = {
    isLoading: true
}

Promise.resolve().then (() => {

})
.catch(() => {

})
.finally(() => {
    // resolve  reject  都走到这里来
    state.isLoading = false;
})