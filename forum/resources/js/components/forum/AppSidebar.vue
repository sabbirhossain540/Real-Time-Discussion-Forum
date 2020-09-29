<template>
  <v-card
    max-width="500"
    class="mx-auto"
  >
    <v-toolbar
      color="indigo"
      dark
    >
      <v-toolbar-title>Category</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-item v-for="category in categories" :key="category.id">
        <v-list-item-content>
          <v-list-item-title>{{ category.name }}</v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
    data(){
        return{
            categories:{}
        }
    },
    created(){
        axios.get('/api/category')
        .then(res => this.categories = res.data)
    }

}
</script>

<style lang="stylus" scoped>

</style>