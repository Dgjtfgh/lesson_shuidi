<template>
    <div>
        <!-- CarouselItem -->
        <slot />
    </div>
</template>
<script>
export default {
    // 严格下不可或缺
    name: 'CarouselItem',
    // 尽快的  实例化时， mounted  已经挂载到页面了
    created() {
        // console.log(this.$parent);
        this.$parent && this.$parent.updateItems()
    }
}
</script>