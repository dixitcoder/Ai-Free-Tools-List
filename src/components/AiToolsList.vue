<template>


  <v-app>
    <v-navigation-drawer app :mini-variant.sync="mini" v-model="drawer">
      <v-list dense rail>
        <v-list-item-content class="text-center">
        <v-list-item
 style="padding-left:7pc"
 width="1000"
          prepend-avatar="https://firebasestorage.googleapis.com/v0/b/dixitcoder-tools-ai.appspot.com/o/432381600_957304799301578_1886847705414183493_n.webp?alt=media&token=8b5a66a8-3f87-48bf-8824-942e7360ac0f"
        ></v-list-item>

    <v-list-item-title >Dixitcoder - AI Tools</v-list-item-title>
  </v-list-item-content>


  <v-divider
  :thickness="4"
  class="border-opacity-100"
  color="success"
></v-divider>
  <v-list-item
  style="font-style: italic;"
    class="dixit"
    v-for="(item, index) in items"
    :key="index"
    @click="changeComponent(item.component)"
    :to="item.link"
    :style="{ backgroundColor: item.backgroundColor, borderBottom: '1px solid ' + item.borderColor }"
  >
    <v-list-item-icon :style="{ color: item.color }">
      <v-icon
        style="padding: 1px;"
        :style="{ 'font-size': '20px', 'font-weight': 'bold', color: item.color }"
      >
        {{ item.icon }}
      </v-icon>
    </v-list-item-icon>
    <span
      class="title"
      :style="{ color: item.textColor, fontSize: item.fontSize }"
    >
      {{ item.title }}
    </span>
  </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar app color="dark" class="dixit" dark>
  <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  <v-toolbar-title style="display: flex; font-style: italic;">Ai Free Tools List</v-toolbar-title>

<!-- dashboard -->
<v-btn icon to="/dashboard" color="blue">
    <v-icon>mdi-cloud-upload</v-icon>
  </v-btn>
  <!-- Logout Button -->
  <v-btn icon @click="logout">
    <v-icon>mdi-logout</v-icon>
  </v-btn>
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
import corese from './pages/corese.vue'
import profile from './pages/profile.vue'
import ccc from './pages/ccc.vue'

export default {
  data() {
    return {
      drawer: true,
      mini: true,
      items: [


        { "title": "Home", "icon": "mdi-home", "link": "/home" },
        { "title": "Ai Tool", "icon": "mdi-robot", "component": "AiToolList" },



        { "title": "Google Maps", "icon": "mdi-map", "component": "MapsGoogleVue" },
        { "title": "Animation Gallery", "icon": "mdi-calendar", "component": "Calendar" },
        { "title": "Corese ", "icon": "mdi-access-point", "component": "corese" },

        { "title": "CCC", icon:"mdi-antenna",color:'info' , "component": "ccc" },
        { "title": "About", "icon": "mdi-information", "component": "AboutVue" }
      ],
      currentComponent: "AiToolList", // Initial component to render
    };
  },
  components: {
    AiToolList,
    MapsGoogleVue,
    Calendar,
    AboutVue,
    corese,
    profile,
    ccc
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
 .dixit:hover {
  color: #ff6200;
}

 .dixit::before {
  content: "";
  display: block;
  height: 5px;
  width: 100%;
  background-color: #ff6200;
  position: absolute;
  top: 0;
  width: 0%;
  transition: all ease-in-out 250ms;
}

 .dixit:hover::before {
  width: 100%;
}
</style>
