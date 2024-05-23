<template>


  <v-card>
    <v-layout>
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title> Dashboard</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>


      <v-navigation-drawer v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary expand-on-hover >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list  dense  nav max-width="400" max-height="600">
          <v-list-item style="font-size:20px;" to="/home"  prepend-icon="mdi-home" title="Home" value="Table"></v-list-item>
          <v-list-item style="font-size:20px;" to="/AiToolsList"  prepend-icon="mdi-robot" color="primary" title=" Ai Tools" value="AiToolsList"></v-list-item>
          <v-divider
  :thickness="4"
  class="border-opacity-100"
  color="success"
></v-divider>

<p>Uploads In New </p>

          <v-list-item style="font-size:20px;" @click="selectComponent('tableAdminVue')"  prepend-icon="mdi-table" title="AI Tools Table" value="Table"></v-list-item>


          <v-list-item style="font-size:20px" @click="selectComponent('registeraitools')" prepend-icon="mdi-cloud-upload" title="AI Tools Register" value="shared"></v-list-item>
          <v-list-item style="font-size:20px" @click="selectComponent('corseUploadeVue')" prepend-icon="mdi-cloud-upload" title="Course Upload" value="corse">


          </v-list-item>

          <v-list-item style="font-size:20px" @click="selectComponent('registerGallery')" prepend-icon="mdi-cloud-upload" title="Uploads Gallery" value="gallery"></v-list-item>
          <br>
          <p>My Pasonal Photos</p>
          <v-divider
  :thickness="4"
  class="border-opacity-100"
  color="success"
></v-divider>
          <v-list-item style="font-size:20px"    color="blue-lighten-2" @click="selectComponent('gallery')" prepend-icon="mdi-thumb-up" title="Gallery" value="Logout">

    </v-list-item>
    <v-divider
  :thickness="4"
  class="border-opacity-100"
  color="success"
></v-divider>

          <v-list-item style="font-size:20px" @click="logout" prepend-icon="mdi-login" title="Logout" value="Logout"></v-list-item>

          <v-list-item style="font-size:20px" @click="selectComponent('error')" prepend-icon="mdi-star" title="404" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>


      <v-main style="height: 1250px;">
        <v-card>
    <v-layout>
      <!-- rail -->



      <v-main style="height: 1250px">
        <v-card>
          <component :is="selectedComponent"></component>
        </v-card>
      </v-main>
    </v-layout>
  </v-card>
      </v-main>
    </v-layout>
  </v-card>


</template>

<script>
import corseUploadeVue from './admin-pages/corse-uploade.vue'
import registeraitools from '@/pages/datamongo.vue'
import registerGallery from '@/pages/register-gallery.vue';
import tableAdminVue from './pages/table-admin.vue';
import login from '@/pages/login.vue';
import error from '@/components/404.vue'
import gallery from '@/components/pages/profile.vue'

// bug in vue js and Vuetify

import locale from '@/pages/home.vue'

// auth
import {ref , onMounted} from 'vue'
import { signOut } from 'firebase/auth';
import {auth} from '@/services/firebaseauth'
import router from '@/router/index';


export default {
  data() {
    return {
      drawer: false,
      group: null,
      selectedComponent: corseUploadeVue,
      isauthuser:{},
      items: [
        { title: "Chapter 1: Introduction to Computer", icon: "mdi-home", component: corseUploadeVue },
        { title: "Register AI Tools", icon: "mdi-home", component: registeraitools },
        { title: "Uploads gallery", icon: "mdi-home", component: registerGallery },
        { title: "Table", icon: "mdi-home", component: tableAdminVue},
        { title: "Table", icon: "mdi-login", component: login},
        { title: "Table", icon: "mdi-login", component: gallery},
        { title: "Table", icon: "mdi-login", component: error},
      ]
    }
  },
  mounted() {

  },
  methods: {
    selectComponent(component) {
      this.selectedComponent = component;
    }
  },
  components: {
    corseUploadeVue,registeraitools,registerGallery,tableAdminVue,login,error,gallery,locale
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
        router.push('/login'); // Redirect to the login page
      } catch (error) {
        console.error('Logout error:', error);
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
      user
    };
  },
  watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>
<style scoped>

</style>
