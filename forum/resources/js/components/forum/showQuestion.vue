<template>
    <v-card>
        <v-container fluid>
            <v-card-title>
                <div>
                    <div class="headline">
                        {{ data.title }}
                    </div>
                    <span class="grey--text">{{ data.user }} said {{ data.created_at }}</span>
                </div>

                <v-spacer></v-spacer>
                <v-btn color="teal">5 Replies</v-btn>
                
            </v-card-title>

            <v-card-text v-html="data.body">

            </v-card-text>

            <v-card-actions v-if="own == data.user_id">
                <v-btn icon small>
                    <v-icon color="orange">edit</v-icon>
                </v-btn>

                <v-btn icon small @click="destroy">
                    <v-icon color="red">delete</v-icon>
                </v-btn>

            </v-card-actions>
            
        </v-container>
    </v-card>
</template>

<script>
export default {
   props:['data'],
   data(){
       return{
           own: User.id()
       }
   },
   methods:{
       destroy(){
           axios.delete('/api/question/'+this.data.slug)
           .then(res => this.$router.push('/forum'))
       }
   }
}
</script>

<style lang="stylus" scoped>

</style>