<template>
  <v-card
    color="grey lighten-4"
  >
    <v-toolbar dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>SPA Forum</v-toolbar-title>
       <v-spacer></v-spacer>

      <v-toolbar-item>
    
            <!-- <v-btn>
                Category
            </v-btn> -->
            <router-link v-for="item in items" :key="item.title" :to="item.to" v-if="item.show">
                <v-btn>{{ item.title }}</v-btn>
            </router-link>
            
      </v-toolbar-item>

     

      

    
    </v-toolbar>
  </v-card>
</template>


<script>
export default {
    data(){
      return {
          items: [
            {title: 'Forum', to:'/forum', show:true},
            
            {title: 'Ask Question', to:'/ask', show:User.loggedIn()},
            {title: 'Category', to:'/category', show:User.loggedIn()},
            {title: 'Login', to:'/login', show:!User.loggedIn()},
            {title: 'Logout', to:'/logout', show:User.loggedIn()},

          ]
      }
    },

    created(){
      EventBus.$on('logout', () => {
        User.logout()
      })
    }
}
</script>

<style lang="stylus" scoped>

</style>