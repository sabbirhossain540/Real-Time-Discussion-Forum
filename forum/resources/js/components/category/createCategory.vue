<template>
    <v-container>
        <v-form @submit.prevent="create">

              <v-text-field
            label="Category Name"
            v-model="form.name"
            type="text"
            required
          ></v-text-field>

          <v-btn
            color="teal"
            type="submit"
          >Create</v-btn>
        </v-form>
      
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            form:{
                name:null
            },
        }
    },

    methods:{
        create(){
            axios.post('/api/category',this.form)
            .then(res => console.log(res.data))
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>