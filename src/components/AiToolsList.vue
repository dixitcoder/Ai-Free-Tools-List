<template>


  <v-app>
    <v-navigation-drawer app :mini-variant.sync="mini" v-model="drawer" style="background-color: #031525;">
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
<span style="padding-left: 1pc;">Product categories
</span>
<br>
  <v-list-item
    class="dixit"
    v-for="(item, index) in items"
    :key="index"
    @click="changeComponent(item.component,item.title)"
    :to="item.link"
    :style="{ backgroundColor: item.backgroundColor, borderBottom: '10px solid ' + item.borderColor , color:item.color }"

  >

    <v-list-item-icon :style="{ color: item.color }">
      <v-icon
        style="padding: 5px;"
        :style="{ 'font-size': '20px', 'font-weight': 'bold', color: item.color }"
      >
        {{ item.icon }}
      </v-icon>
    </v-list-item-icon>
    <span
      class="title"
      :style="{ color: item.textColor, fontSize: item.fontSize }"
      style="padding-left: 10px;font-family: sans-serif;"
    >
      {{ item.title }}
    </span>
  </v-list-item>


      </v-list>
    </v-navigation-drawer>


    <v-app-bar app  style="background-color: #031525;"  >

      <v-toolbar-title style="display: flex; font-family:sans-serif;color:#fff;width:bold;padding-left: 24px;">{{title}}</v-toolbar-title>

    <!-- dashboard -->
    <v-btn icon to="/dashboard" color="blue">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <!-- Logout Button -->
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon >mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>


    <v-main>
      <v-container fluid style="background-color: #031525;">
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
import recivemessage from '@/components/pages/recivemessage.vue'
import livestream from '@/components/pages/livestream.vue'

export default {
  data() {
    return {
      drawer: true,
      title:'',
      mini: true,
      items: [
  { "title": "Home", "icon": "mdi-home", "link": "/home" },
  { "title": "Ai Tool", "icon": "mdi-robot", "component": "AiToolList" },

  { "title": "Google Maps", "icon": "mdi-map", "component": "MapsGoogleVue" },
  { "title": "Animation Gallery", "icon": "mdi-calendar", "component": "Calendar" },
  { "title": "Courses", "icon": "mdi-access-point", "component": "corese" },

  { "title": "CCCs", icon:"mdi-antenna", color:'info' , "component": "ccc" },
  { "title": "Message", icon:"mdi-message", color:'info' , "component": "recivemessage" },
  { "title": "Live Stream", icon:"mdi-video", color:'info' , "component": "livestream" },


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
    ccc,
    recivemessage,
    livestream
  },
  methods: {
    changeComponent(componentName,title) {
      this.currentComponent = componentName;
      this.drawer = false
      this.title = title;
    },
  },
};

</script>

<style scoped>
/* Add your custom styles here */
 .dixit:hover {
  color: #ff6200;
  background-color: #10253B;
  border: 2px solid rgb(0, 71, 138);
  border-radius: 30px;
}

 .dixit::before {
  content: "";
  display: block;
  height: 2px;
  width: 100%;
  background-color: #34ff0b;
  position: absolute;
  top: 0;
  width: 0%;
  transition: all ease-in-out 250ms;
}

 .dixit:hover::before {
  width: 100%;
}
.title{
  font-family: sans-serif;

  color: rgb(211, 227, 253)  ;
  width: 500;
  font-size: 14px  ;
  line-height: 20px ;
  font: bold;
  font-family:sans-serif;
}
</style>
