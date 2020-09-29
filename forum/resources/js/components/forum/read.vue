<template>
    <show-question :data= question></show-question>
</template>

<script>
import ShowQuestion from './showQuestion'
export default {

    data(){
        return{
            question:{}
        }
    },
    components:{ShowQuestion},
    created(){
        let getSlug = this.$route.params.slug;
        
         axios.get('/api/question/'+getSlug)
         .then(res => this.question = res.data.data)
    }
}
</script>

<style lang="stylus" scoped>

</style>