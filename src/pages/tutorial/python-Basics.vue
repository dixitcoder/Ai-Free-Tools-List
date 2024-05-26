<template>
  <v-app>
    <!-- App bar -->
    <v-app-bar app color="secondary" dark>
      <v-app-bar-nav-icon icon="mdi-home" to="/home"></v-app-bar-nav-icon>
      <v-toolbar-title>PDF Viewer {{ pathname }} </v-toolbar-title>
    </v-app-bar>

    <!-- Navigation drawer -->


    <!-- Main content area -->
    <v-main>
      <v-container fluid>
  <h1 class="text-center">PDF Viewer</h1>
  <h3 class="text-center">Embedding a PDF File Using Iframe</h3>
  <iframe
    class="pdf"
    src="https://firebasestorage.googleapis.com/v0/b/dixitcoder-tools-ai.appspot.com/o/python-basics-sample-chapters.pdf?alt=media&token=4ed22e8f-90d6-4206-b46f-fcd344db3d5b"
    width="200%"
    height="900"
    frameborder="0"
    allowfullscreen=""
    loading="lazy"
  ></iframe>
</v-container>

    </v-main>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      drawer: true,
      menuItems: [], // Populate menu items dynamically if needed
      pathname: this.$route.params.name,
      selectedItem: null, // Update selectedItem dynamically based on user interaction
    };
  },
  methods: {
   async dataloade(){
const data = await fetch('https://dixitcoder-tools-ai-default-rtdb.europe-west1.firebasedatabase.app/')
const datacollect = await data.json()
console.log(datacollect);

    },
    selectMenuItem(item) {
      this.selectedItem = item;
      this.drawer = false; // Close the drawer after selecting an item
    },
  },
};
</script>


<style scoped>
.pdf {
  width: 100%;
  aspect-ratio: 4 / 3;
  border: none; /* Remove iframe border */
}

.text-center {
  text-align: center;
}

h1 {
  color: green;
}
</style>
