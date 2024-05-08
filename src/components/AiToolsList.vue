<template>


  <v-app>
    <v-navigation-drawer app :mini-variant.sync="mini" v-model="drawer">
      <v-list dense>
        <v-list-item-content class="text-center">
        <v-list-item
 style="padding-left:7pc"
 width="1000"
          prepend-avatar="https://firebasestorage.googleapis.com/v0/b/dixitcoder-tools-ai.appspot.com/o/432381600_957304799301578_1886847705414183493_n.webp?alt=media&token=8b5a66a8-3f87-48bf-8824-942e7360ac0f"
        ></v-list-item>

    <v-list-item-title>Dixitcoder - AI Tools</v-list-item-title>
  </v-list-item-content>



        <v-divider></v-divider>

        <v-list-item  v-for="(item, index) in items" :key="index" @click="changeComponent(item.component)" :to="item.link">
          <v-list-item-icon>
  <v-icon style="padding:1px" :style="{ 'font-size': '20px', 'font-weight': 'bold', 'color': 'white' }">{{ item.icon }}</v-icon>
  {{ item.title }}
</v-list-item-icon>


        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar app color="seconder" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Ai Free Tools List</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <component :is="currentComponent"></component>
      </v-container>
    </v-main>
  </v-app>



</template>

<script>
import AiToolList from "@/components/pages/ai-toollist.vue";
import MapsGoogleVue from "./pages/maps-google.vue";
import Calendar from "./pages/calendar.vue";
import AboutVue from './pages/about.vue';

export default {
  data() {
    return {
      drawer: true,
      mini: true,
      items: [
        { "title": "Home", "icon": "mdi-home", "link": "/home" },

      { "title": "AI Tool List", "icon": "mdi-robot", "component": "AiToolList" },
        { "title": "Google Maps", "icon": "mdi-map", "component": "MapsGoogleVue" },
        { "title": "Calendar", "icon": "mdi-calendar", "component": "Calendar" },
        { "title": "About", "icon": "mdi-information", "component": "AboutVue" }
      ],
      currentComponent: "AiToolList", // Initial component to render
    };
  },
  components: {
    AiToolList,
    MapsGoogleVue,
    Calendar,
    AboutVue
  },
  methods: {
    changeComponent(componentName) {
      this.currentComponent = componentName;
    },
  },
};

</script>

<style scoped>
/* Add your custom styles here */
</style>
