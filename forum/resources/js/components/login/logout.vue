<template>


</template>
<script>
export default {
    created(){
        EventBus.$emit('logout');
    }
}
</script>

<style lang="stylus" scoped>

</style>