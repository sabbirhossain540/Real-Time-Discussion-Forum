<template>
    <v-container>
        <v-form @submit.prevent="create">

              <v-text-field
            label="Title"
            v-model="form.title"
            type="text"
            required
          ></v-text-field>

           <v-select
            
            :items="categories"
            item-text="name"
            item-value="id"
            v-model="form.category_id"
            label="Category"
            autocompleted
            ></v-select>

            <v-textarea
            solo
            name="input-7-4"
            label="Solo textarea"
            v-model="body"
            ></v-textarea>

          <v-btn
            color="green"
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
                title:null,
                category_id:null,
                body:null
            },
            categories:[]
        }
    },
    created(){
        axios.get('/api/category')
        .then(res => this.categories = res.data)
    },
    methods:{
        create(){
            alert("ok");
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>