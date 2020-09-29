<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
        <question v-for="question in questions" :key="question.path" :data=question>

        </question>
      </v-flex>
      <v-flex xs-4>
        <appsidebar></appsidebar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import question from './question'
import appsidebar from './AppSidebar'
export default {
    data(){
      return{
        questions:{}
      }
    },
    components:{question, appsidebar},

    created(){
      axios.get('/api/question')
      .then(res => this.questions = res.data.data)
      .catch(error => console.log(error.response.data))
    }
}
</script>

<style lang="stylus" scoped>

</style>