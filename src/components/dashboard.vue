<template>
  <v-card>
    <v-layout>
      <v-app-bar color="" prominent style="background-color: #071a2b">
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title >Dashboard</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <!-- <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn> -->
        </template>

        <v-btn @click="printPage"      icon="mdi-arrow-up-bold-box-outline"
        variant="text"></v-btn>
      </v-app-bar>

      <Transition name="slide-fade">
      <v-navigation-drawer
        v-model="drawer"
        style="background-color: #071A2B;font-family: sans-serif;"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="dixitcoder@gmailcom"
            title="Dixit Patel"
          ></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list  dense nav max-width="400" max-height="900">
          <v-list-item
            style="font-size: 20px"
            to="/home"
            prepend-icon="mdi-home"
            title="Home"
            value="Table"
          ></v-list-item>
          <v-list-item
            style="font-size: 20px"

            to="/AiToolsList"
            prepend-icon="mdi-robot"
            color="primary"
            title=" Ai Tools"
            value="AiToolsList"
          ></v-list-item>
          <v-divider
            :thickness="4"
            class="border-opacity-100"
            color="success"
          ></v-divider>
          <p>Uploads In New</p>
          <v-list-item

            style="font-size: 20px"
            @click="selectComponent('tableAdminVue')"
            prepend-icon="mdi-table"
            title="AI Tools Table"
            value="Table"
          ></v-list-item>
          <v-list-item
            style="font-size: 20px"
            @click="selectComponent('registeraitools')"
            prepend-icon="mdi-cloud-upload"
            title="AI Tools Register"
            value="shared"
          ></v-list-item>
          <v-list-item
            style="font-size: 20px"
            @click="selectComponent('corseUploadeVue')"
            prepend-icon="mdi-cloud-upload"
            title="Course Upload"
            value="corse"
          >
          </v-list-item>
          <v-list-item
            style="font-size: 20px"
            @click="selectComponent('registerGallery')"
            prepend-icon="mdi-cloud-upload"
            title="Uploads Gallery"
            value="gallery"
          ></v-list-item>
          <v-list-item
            style="font-size: 20px"
            @click="selectComponent('sendmessage')"
            prepend-icon="mdi-cloud-upload"
            title="Message Send"
            value="Message Send"
          ></v-list-item>
          <v-list-item
          style="font-size: 20px"
          @click="selectComponent('videoUploade')"
          prepend-icon="mdi-video"
          title="Video-Uploade"
          value="Video Send"
        ></v-list-item>


          <br />
          <p>My Pasonal Photos</p>
          <v-divider
            :thickness="4"
            class="border-opacity-100"
            color="success"
          ></v-divider>
          <v-list-item
            style="font-size: 20px"
            color="blue-lighten-2"
            @click="selectComponent('gallery')"
            prepend-icon="mdi-thumb-up"
            title="Gallery"
            value="Logout"
          >
          </v-list-item>
          <v-list-item
          style="font-size: 20px"
          color="blue-lighten-2"
          @click="selectComponent('profile')"
          prepend-icon="mdi-profile"
          title="Profile"
          value="Logout"
        >
        </v-list-item>
          <v-divider
            :thickness="4"
            class="border-opacity-100"
            color="success"
          ></v-divider>
          <v-list-item
            style="font-size: 20px"
            @click="logout"
            prepend-icon="mdi-login"
            title="Logout"
            value="Logout"
          ></v-list-item>
          <v-list-item
            style="font-size: 20px"
            @click="selectComponent('error')"
            prepend-icon="mdi-star"
            title="404"
            value="starred"
          ></v-list-item>

        </v-list>
      </v-navigation-drawer>
    </Transition>
      <v-main style="height: 12500px">
        <v-card style="background-color: #031525">
          <component :is="selectedComponent"></component>
        </v-card>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import corseUploadeVue from "./admin-pages/corse-uploade.vue";
import registeraitools from "@/pages/datamongo.vue";
import registerGallery from "@/pages/register-gallery.vue";
import tableAdminVue from "./pages/table-admin.vue";
import login from "@/pages/login.vue";
import error from "@/components/404.vue";
import gallery from "@/components/pages/profile.vue";
import sendmessage from "@/components/admin-pages/sendmessage.vue";
import videoUploade from "./admin-pages/video-uploade.vue";
import profile from './admin-pages/profile.vue'

// bug in vue js and Vuetify

import locale from "@/pages/home.vue";

// auth
import { ref, onMounted } from "vue";
import { signOut } from "firebase/auth";
import { auth } from "@/services/firebaseauth";
import router from "@/router/index";

export default {
  data() {
    return {
      drawer: false,
      group: null,
      selectedComponent: corseUploadeVue,
      isauthuser: {},
      items: [
        {
          title: "Chapter 1: Introduction to Computer",
          icon: "mdi-home",
          component: corseUploadeVue,
        },
        { title: "Register AI Tools", icon: "mdi-home", component: registeraitools },
        { title: "Uploads gallery", icon: "mdi-home", component: registerGallery },
        { title: "Table", icon: "mdi-home", component: tableAdminVue },
        { title: "Table", icon: "mdi-login", component: login },
        { title: "Table", icon: "mdi-login", component: gallery },
        { title: "Table", icon: "mdi-login", component: sendmessage },
        { title: "Table", icon: "mdi-login", component: videoUploade },

        { title: "Table", icon: "mdi-login", component: profile },


        { title: "Table", icon: "mdi-login", component: error },
      ],
    };
  },
  mounted() {},
  methods: {
    selectComponent(component) {
      this.selectedComponent = component;
      this.drawer = false

    },
    printPage(){
      window.print()
    }
  },
  components: {
    corseUploadeVue,
    registeraitools,
    registerGallery,
    tableAdminVue,
    login,
    error,
    gallery,
    locale,
    sendmessage,
    profile,
    videoUploade
  },
  setup() {
    const isAuthenticated = ref(false);

    onMounted(() => {
      auth.onAuthStateChanged((user) => {
        isAuthenticated.value = !!user;
      });
    });

    async function logout() {
      try {
        await signOut(auth);
        isAuthenticated.value = false; // Set authentication state to false
        router.push("/login"); // Redirect to the login page
      } catch (error) {
        console.error("Logout error:", error);
      }
    }

    const user = ref({}); // Initialize a reactive reference for user data

    onMounted(async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userProfile = await getUserProfile(currentUser.uid); // Assuming getUserProfile fetches user data from Firestore
          user.value = userProfile; // Update the reactive reference with user data
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    });

    return {
      isAuthenticated,
      logout,
      user,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style scoped>
body {
  background-color: #434c50;
  min-height: 100vh;
  font: normal 16px sans-serif;
  padding: 40px 0;
}

.container.gallery-container {
  background-color: #fff;
  color: #35373a;
  min-height: 100vh;
  padding: 30px 50px;
}

.gallery-container h1 {
  text-align: center;
  margin-top: 50px;
  font-family: "Droid Sans", sans-serif;
  font-weight: bold;
}

.gallery-container p.page-description {
  text-align: center;
  margin: 25px auto;
  font-size: 18px;
  color: #999;
}

.tz-gallery {
  padding: 40px;
}

.tz-gallery .row > div {
  padding: 2px;
}

.tz-gallery .lightbox img {
  width: 100%;
  border-radius: 0;
  position: relative;
}

.tz-gallery .lightbox:before {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -13px;
  margin-left: -13px;
  opacity: 0;
  color: #fff;
  font-size: 26px;
  font-family: "Glyphicons Halflings";
  content: "\e003";
  pointer-events: none;
  z-index: 9000;
  transition: 0.4s;
}

.tz-gallery .lightbox:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(46, 132, 206, 0.7);
  content: "";
  transition: 0.4s;
}

.tz-gallery .lightbox:hover:after,
.tz-gallery .lightbox:hover:before {
  opacity: 1;
}

.baguetteBox-button {
  background-color: transparent !important;
}

@media (max-width: 768px) {
  body {
    padding: 0;
  }
}
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
