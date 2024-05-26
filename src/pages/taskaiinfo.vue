<template>
  <v-card
style="padding-left: 9pc;padding-top:8pc;padding:2pc"
theme="light"
  >
  <v-btn color="dark" style="color:white"  icon @click="goBack">
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>

  <br>

  <v-container>
    <v-card theme="dark" style="padding:10pc">
      <div class="card bg-dark text-light">
  <div class="card-body">
    <h5 class="card-title">{{tool.Name}}</h5>
    <p class="card-text">
      {{ tool.description }}
    </p>
    <a :href="tool.link" class="btn btn-primary" target="_blank">Link : {{tool.Name}}</a>
  </div>
</div>
<h2>{{ tools.id }}</h2>

    </v-card>
  </v-container>
</v-card>
</template>

<script>

import { mapState, mapActions } from "vuex";
import router from '@/router';

export default {
  computed: {
    ...mapState(["tools"]),
    tool() {
      // Get the tool ID from the route params
      const toolId = this.$route.params._id;
      console.log(toolId);
      // Find the tool with the matching ID in the tools array
      return this.tools.find(tool => tool.id === toolId) || {};
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    goBack(){
      router.push('/AiToolsList')
    },
    ...mapActions(["fetchTools", "deleteTool"]),
    async fetchData() {
      await this.fetchTools(); // Dispatch the fetchTools action
    },
  },
};
</script>
