<template>
  <v-card >
    <v-layout>
      <v-app-bar :color="selectedColor" prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="sheet = !sheet"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-whatsapp" variant="text"></v-btn>
        </template>

        <!-- <v-btn icon="mdi-dots-vertical" variant="text">click</v-btn> -->

        <v-speed-dial location="bottom center" transition="slide-y-reverse-transition">
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              @click.stop="sheet = !sheet"
              size="large"
              fab
              color="primary"
              dark
              icon
            >
              <v-icon>mdi-home</v-icon>
            </v-btn>
          </template>

          <v-btn
            v-for="action in speedDialActions"
            :key="action.key"
            :icon="action.icon"
          ></v-btn>
        </v-speed-dial>
      </v-app-bar>

      <v-main style="height: 100pc">
        <v-bottom-sheet v-model="sheet">
          <template v-slot:activator="{ props }">
            <div class="text-center"></div>
          </template>

          <v-list>
            <v-list-subheader >Open in PDF</v-list-subheader>
<v-divider></v-divider>

            <v-list-item

              v-for="item in items"
              :class="[
            index % 1 === 0 ? 'py-2' : index % 5 === 0 ? 'py-8' : 'py-4',
            index % 2 === 0 ? 'bg-grey-dark-2' : index % 1 === 0 ? 'bg-slow' : '',
            'px-2',  // Added class for styling
          ]"
              :key="item.title"
              :prepend-icon="item['prepend-icon']"
              :title="item.title"
              :value="item.value"
              :to="item.link"
            ></v-list-item>
          </v-list>
        </v-bottom-sheet>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
import { onMounted } from "vue";
import { Application } from "@splinetool/runtime";
import Cookies from "js-cookie";

export default {
  mounted() {
    onMounted(() => {
      const canvas = document.getElementById("canvas3d");
      const app = new Application(canvas);
      app.load("https://prod.spline.design/astVgoZPfHtry8Um/scene.splinecode");
    });
  },
  computed: {
    colorClass() {
      // Calculate the color class based on the selected color
      return {
        primary: this.selectedColor === "#3f51b5",
        error: this.selectedColor === "#f44336",
        warning: this.selectedColor === "#ff9800",
        success: this.selectedColor === "#4caf50",
      };
    },
  },
  methods: {
    saveColorToCookie() {
      Cookies.set("selectedColor", this.selectedColor);
    },
  },

  data: () => ({
    sheet: false,
    tiles: [
      { img: "keep.png", title: "Keep" },
      { img: "inbox.png", title: "Inbox" },
      { img: "hangouts.png", title: "Hangouts" },
      { img: "messenger.png", title: "Messenger" },
      { img: "google.png", title: "Google+" },
    ],
    drawer: false,
    group: null,
    items: [
      {
        "prepend-icon": "mdi-robot",
        link: "/AiToolsList",
        title: "AI Free Tools",
        value: "myfiles",
      },
      {
        "prepend-icon": "mdi-school",
        link: "/html",
        title: "HTML Tutorial PDF",
        value: "Learning-HTML",
      },
      {
        "prepend-icon": "mdi-book",
        link:'/vue',
        title: "Vue.js Tutorial",
        value: "Learning-Vue",
      },
      {
        "prepend-icon": "mdi-language-javascript",
        link:'/javascript',
        title: "JavaScript Basics",
        value: "Learning-Javascript",
      },
      {
        "prepend-icon": "mdi-language-python",
        link:'/python',
        title: "Python Basics",
        value: "Learning-Python",
      },
      {
        "prepend-icon": "mdi-react",
        link:'/React',
        title: "React Basics",
        value: "Learning-React",
      },
      {
        "prepend-icon": "mdi-language-php",
        link:'/php',
        title: "PHP Basics",
        value: "Learning-PHP",
      },
      {
        "prepend-icon": "mdi-language-java",
        link:'/java',
        title: "Java Basics",
        value: "Learning-Java",
      },
      {
        "prepend-icon": "mdi-language-cpp",
        link:'/c++',
        title: "C++ Basics",
        value: "Learning-c++",
      },
      {
        "prepend-icon": "mdi-language-ruby",
        link:"/ruby",
        title: "Ruby Basics",
        value: "Learning-Ruby",
      },
      {
        "prepend-icon": "mdi-whatsapp",
        title: "whatsapp",
        value: "shared",
      },
      {
        "prepend-icon": "mdi-instagram",
        title: "Instagram",
        value: "Instagram",
      },
    ],
    selectedColor: "#3f51b5",
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  created() {
    // Load the selected color from cookies if available
    const savedColor = Cookies.get("selectedColor");
    if (savedColor) {
      this.selectedColor = savedColor;
    }
  },
};
</script>
