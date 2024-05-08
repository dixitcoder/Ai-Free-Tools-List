<script setup>

</script>

<template>

<v-card >

  <v-table style="padding:5pc" fixed-header height="800px">
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">Full Name</th>
            <th class="text-left">Description</th>
            <th class="text-left">Category</th>
            <th class="text-left">Link</th>
            <th class="text-left">
              <v-btn color="primary" @click="fetchData()">   <v-icon>mdi-refresh</v-icon></v-btn>


            </th>
            <th class="text-left">Edit</th>
            <th class="text-left">Delate</th>
          </tr>
        </thead>
        <tbody >
          <tr   :class="[
            index % 1 === 0 ? 'py-2' : index % 5 === 0 ? 'py-8' : 'py-4',
            index % 2 === 0 ? 'bg-grey-lighten-5' : index % 1 === 0 ? 'bg-slow' : '',
            'px-2',  // Added class for styling
          ]" v-for="(patient, index) in tools" :key="patient.id">
            <td>{{ index }}</td>
            <td>{{ patient.Name }} {{ patient.last_name }}</td>
            <td>{{ patient.description }}</td>
            <td>{{ patient.Category }}</td>
            <td >  <a  :href="patient.link" target="_blank">
                <v-btn style="font-size: x-small;" color="link">{{patient.link}}</v-btn>
              </a></td>


          </tr>
        </tbody>
      </v-table>
</v-card>
</template>

<style>

</style>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      maxLength: 100, // Maximum length for displaying text
      dialog: false,
      selectedTool: {},
      Name: "",
      deprecations: "",
    };
  },
  computed: {
    ...mapState(["tools"]),
  },
  methods: {
    ...mapActions(["fetchTools", "deleteTool"]),
    async fetchData() {
      await this.fetchTools(); // Dispatch the fetchTools action
    },
    datalisting(){
       this.fetchData()
    }
  },
};
</script>
