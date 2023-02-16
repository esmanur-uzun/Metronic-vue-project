<template>
    <v-dialog v-model="dialog" max-width="600px">
        <v-btn flat slot="activator" class="success">Ekle</v-btn>
        <v-card>
            <v-card-title>
                <h2>Add a new stocks</h2>
            </v-card-title>
        </v-card>
    </v-dialog>
</template>
<script>
export default{
    data(){
        return {
            dialog: true
        }
    }
}
</script>