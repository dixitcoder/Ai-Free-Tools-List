

<script>
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/services/firebaseauth'; // Assuming you have a Firebase Firestore database instance

export default {
  data() {
    return {
      items: [] // Array to store fetched items
    };
  },
  mounted() {
    const toolsCollectionRef = collection(db, 'book'); // Change 'book' to your collection name
    onSnapshot(toolsCollectionRef, (snapshot) => {
      const tools = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      this.items = tools; // Update the items array with fetched data
    });
  }
};
</script>
<template>
 <v-card style="background-color: #031525;">
    <v-container style="background-color: #031525;">
      <!-- Header -->


      <!-- Tool Cards -->
      <v-card elevation="3">
<header class="dixit">
        <h1 >Our Programming Course Website PDF</h1>
    </header>

    <div style="background-color: #031525;"  class="container">
        <h2 class="container-heading" style="color:white">Featured Courses</h2>
        <div class="course-list">
            <!-- HTML Course -->

            <!-- CSS Course -->
            <div class="course" v-for="item in items" :key="item">
                <img :src="item.img" alt="CSS Course Image">
                <h2>{{item.title}}</h2>
                <p>{{item.description}}</p>
              <div class="dixit">  <v-btn :href="item.link" class="dixit" color="primary" >PDF</v-btn>
              </div>
            </div>
        </div>
    </div>

   <br><br>
    <footer>
        <p>&copy; 2024 Your Programming Course Website. All rights reserved.</p>
    </footer>

      </v-card>

      <!-- Additional content or dialogs -->
      <v-card height="200"></v-card>
    </v-container>
  </v-card>
  <v-card height="200"></v-card>
  <v-card height="200"></v-card>

</template>

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
