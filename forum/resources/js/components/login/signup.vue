<template>
  <v-container>
      <v-form @submit.prevent="signup">
          <v-text-field
            label="Name"
            v-model="form.name"
            type="Name"
            required
          ></v-text-field>


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

          <v-text-field
            label="Password"
            v-model="form.password_confirmation"
            type="password"
            required
          ></v-text-field>

          <v-btn
            color="green"
            type="submit"
          >
              Signup
          </v-btn>

      </v-form>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            form: {
                name:null,
                email:null,
                password:null,
                password_confirmation:null
            }
        }
    },

    methods:{
        signup(){
            axios.post('/api/auth/signup',this.form)
            .then(res => User.responseAfterLogin(res))
            .catch()
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>