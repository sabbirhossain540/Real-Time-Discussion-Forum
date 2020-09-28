<template>
  <v-container>
      <v-form @submit.prevent="login">
          <v-text-field
            label="Email"
            v-model="form.email"
            type="email"
            required
          ></v-text-field>

          <v-text-field
            label="Password"
            v-model="form.password"
            type="password"
            required
          ></v-text-field>

          <v-btn
            color="green"
            type="submit"
          >
              Login
          </v-btn>

          <router-link to="/signup"><v-btn
            color="blue"
            type="submit"
          >
              Sign Up
          </v-btn></router-link>

      </v-form>
      
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            form: {
                email:null,
                password:null
            }
        }
    },

    methods:{
        login(){
            User.login(this.form)
            //Using for redirect path
            this.$router.push('forum')
        }
    },
    created(){
      if(User.loggedIn()){
        this.$router.push({name:'forum'})
      }
    }
}
</script>

<style lang="stylus" scoped>

</style>