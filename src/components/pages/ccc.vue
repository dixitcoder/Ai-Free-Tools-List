
<template>

  <v-card style="background-color: #031525;">
    <v-container style="background-color: #031525;">
      <!-- Header -->
      <header class="dixit">
        <h1>Our CCC Course Website </h1>
      </header>

      <!-- Tool Cards -->
      <v-expansion-panels style="background-color: #031525;">
    <div style="background-color: #031525;" v-for="(item, index) in items" :key="index" class="tab_container">
      <section  :id="`content${index + 1}`" class="tab-content" v-if="selectedItem === item">
        <component :is="item.component"></component>
      </section>
    </div>
  </v-expansion-panels>
      <v-card elevation="3">
        <div class="container">
          <h2 class="container-heading" style="color: white">Featured Courses CCC</h2>
          <div class="course-list">
            <div class="course" v-for="item in items" :key="item">
              <v-btn color="primary" icon="mdi-robot"></v-btn>
              <h2>{{ item.title }}</h2>
              <div class="dixit">
                <input  style=" width: 5pc;
  height: 5pc;" type="radio" name="tabs" :value="item" v-model="selectedItem">
  <v-btn color="primary"  for="">click black Dote</v-btn>
              </div>
            </div>
          </div>
        </div>
        <br><br>
        <footer>
          <p>&copy; 2024 Your CCC Course Website. All rights reserved.</p>
        </footer>
      </v-card>

      <!-- Additional content or dialogs -->
      <v-card height="200"></v-card>
    </v-container>
  </v-card>


</template>


<script>
import ccc1 from './pages-ccc/ccc-1.vue';
import ccc2 from './pages-ccc/ccc-2.vue';
import ccc3 from './pages-ccc/ccc-3.vue';
import ccc4 from './pages-ccc/ccc-4.vue';
import ccc5 from './pages-ccc/ccc-5.vue';
import ccc6 from './pages-ccc/ccc-6.vue';
import ccc7 from './pages-ccc/ccc-7.vue';
import ccc8 from './pages-ccc/ccc-8.vue';
import ccc9 from './pages-ccc/ccc-9.vue';

export default {
  data() {
    return {
      selectedItem: null, // Track the selected item
      items: [
        { title: "Chapter 1: Introduction to Computer", icon: "mdi-home", component: ccc1 },
        { title: "Chapter 2: Introduction to Operating System", icon: "mdi-account", component: ccc2 },
        { title: "Chapter 3: Word Processing", icon: "mdi-map", component: ccc3 },
        { title: "Chapter 4: SPREAD SHEET", icon: "mdi-calendar", component: ccc4 },
        { title: "Chapter 5: Presentation", icon: "mdi-access-point", component: ccc5 },
        { title: "Chapter 6: INTRODUCTION TO INTERNET AND WWW", icon: "mdi-widgets", color: "info", component: ccc6 },
        { title: "Chapter 7: E-mail, Social Networking and eGovernance Services", icon: "mdi-information", component: ccc7 },
        { title: "Chapter 8: DIGITAL FINANCIAL TOOLS AND APPLICATIONS", icon: "mdi-information", component: ccc8 },
        { title: "Chapter 9: Overview of Future Skills & Cyber Security", icon: "mdi-information", component: ccc9 }
      ]
    };
  },
  components: {
    ccc1, ccc2, ccc3, ccc4 ,ccc5, ccc6, ccc7, ccc8,ccc9
  }
};
</script>


<style scoped>
h2{
  color: black;
}



.container {
  max-width: 1170px;
  margin: auto;
  overflow: hidden;
  padding: 0 20px;
}

.container-heading {
  text-align: center;
  margin: 20px;
}

.container-heading::after {
  content: "";
    display: inline-block;
    width: 10%;
    height: 2px;
    background-color: #ff6200;
    position: relative;
    left: 10px;
    bottom: 5px;
}

.container-heading::before {
  content: "";
    display: inline-block;
    width: 10%;
    height: 2px;
    background-color: #ff6200;
    position: relative;
    right: 10px;
    bottom: 5px;
}

/* Header */

header {
  background: #8451ab;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
  padding: 20px;
  color: #fff;
  text-align: center;
}

header::after {
  content: "";
  clear: both;
  display: table;
}

.logo {
  float: left;
  padding: 10px 0;
}

nav {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
  margin-left: 40px;
  padding-top: 6px;
  position: relative;
}

nav a {
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  margin: 0 10px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #8451ab27;
}

nav a:hover {
  color: #ff6200;
}

nav a::before {
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

nav a:hover::before {
  width: 100%;
}

.course-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-top: 20px;
}

.course {
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 5px;
    transition: transform 0.3s ease;
}

.course:hover {
    transform: translateY(-5px);
}

.course img {
    width: 100%;
    border-radius: 5px;
}

.course h2 {
    margin: 10px;
}

p {
    color: #777;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
    margin: 10px 0;

}

/* Footer */

footer {
  background: #333;
  color: #eee;
  text-align: center;
  padding: 20px;
}
</style>
