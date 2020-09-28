<template>
  <v-card
    color="grey lighten-4"
  >
    <v-toolbar dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>SPA Forum</v-toolbar-title>
       <v-spacer></v-spacer>

      <v-toolbar-item>
          <v-btn>
                Forum
            </v-btn>
            <v-btn>
                Ask Question
            </v-btn>
            <v-btn>
                Category
            </v-btn>
            <router-link to="/login">
                <v-btn>Login</v-btn>
            </router-link>
            
      </v-toolbar-item>

     

      

    
    </v-toolbar>
  </v-card>
</template>


<script>
export default {
    
}
</script>

<style lang="stylus" scoped>

</style>