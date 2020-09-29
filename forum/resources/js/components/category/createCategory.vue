<template>
    <v-container>
        <v-form @submit.prevent="create" class="mb-5">

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
   
         <v-card
            class="mx-auto"
        >
            <v-toolbar
            color="indigo"
            dark
            >
            <v-toolbar-title>Category List</v-toolbar-title>
            </v-toolbar>
            <v-list>
            <v-list-item v-for="category in categories" :key="category.id">
                <v-list-item-action>
                 <v-btn icon small>
                    <v-icon color="orange">edit</v-icon>
                </v-btn>
                </v-list-item-action>

                <v-list-item-content>
                <v-list-item-title>{{ category.name }}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                <v-btn icon small @click="destroy">
                    <v-icon color="red">delete</v-icon>
                </v-btn>
                </v-list-item-action>
            </v-list-item>
            </v-list>
        </v-card>
      
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            form:{
                name:null
            },
            categories:{}
        }
    },

    methods:{
        create(){
            axios.post('/api/category',this.form)
            .then(res => console.log(res.data))
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