<template>


  <v-card>
    <v-layout>
      <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon="mdi-dots-vertical" variant="text">click</v-btn> -->

      <v-speed-dial location="bottom center" transition="slide-y-reverse-transition">
        <v-btn
          v-for="action in speedDialActions"
          :key="action.key"
          :icon="action.icon"
        ></v-btn>
      </v-speed-dial>

      <v-main style="height: 200pc">
        <div class="main-container">
          <div class="blur-circle1"></div>
          <div class="blur-circle2"></div>
          <!-- Start Landing Page -->
          <div class="landing-page">
            <header>
              <div class="container">
                <a href="#" class="logo">Dixit <b>Coder</b></a>
                <ul class="links" icon>
                  <v-btn
                    icon="mdi-menu"
                    color="primary"
                    @click.stop="sheet = !sheet"
                  ></v-btn>
                </ul>
                <!-- <ul v-for="item in items" :key="item" class="links">

              <v-btn icon :href="item.link">
    <v-icon>{{ item["prepend-icon"] }}</v-icon>
  </v-btn>
            </ul> -->
              </div>
            </header>
            <div class="content">
              <div class="container">
                <div class="info">
                  <h1>AI Technologies Tools : 256
</h1>
                  <p>
                    The statement "AI technologies are reshaping industries like healthcare, finance, and transportation" reflects the widespread impact of AI across various sectors. As for "256 ai link provide free," it seems like you're looking for a source or directory of AI-related resources. Here's a suggestion for finding free AI resources:
                  </p><br>
                  <v-btn to="/AiToolsList" icon="mdi-robot" color="primary"></v-btn>
                </div>
                <div class="image">
                  <img
                    class="main-image"
                    src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- End Landing Page -->
        </div>
<br><br>
        <section class="about-me" id="about-me">

  <div class="container">
    <div class="about-me-container">
      <div class="about-me-title">
        About <br>  Dixit Patel
      </div>

      <div class="about-me-flex-container">
        <div class="about-me-image">
          <div class="back-div"></div>
          <div class="black-image"><img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/black.jpg" alt="black"></div>
          <div class="main-image"><img height="300" src="https://firebasestorage.googleapis.com/v0/b/dixitcoder-tools-ai.appspot.com/o/432381600_957304799301578_1886847705414183493_n.webp?alt=media&token=8b5a66a8-3f87-48bf-8824-942e7360ac0f" alt="smit"></div>
        </div>
        <div class="about-me-content">

          <div class="logo"><img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/logo.svg" alt="smit"></div>

          <div class="text">
            An ambitious Front-end Developer and designer who takes great pride in the presentation and quality of work.

            <br><br>

            Smit is someone who can design and create simple, beautiful and easy to understand things. He is an expert at taking designs into original, exciting and new directions.
          </div>
        </div>
      </div>

      <div class="mail-button mail-button2">
        <a href="mailto:prajapatismit2906@gmail.com"><img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/mail.svg" alt="mail"></a>
      </div>

    </div>

  </div>
  <!-- About 1 - Bootstrap Brain Component -->

</section>


        <v-bottom-sheet v-model="sheet">
          <template v-slot:activator="{ props }">
            <div class="text-center"></div>
          </template>

          <v-list>
            <v-list-subheader>Open in PDF</v-list-subheader>
            <v-divider></v-divider>

            <v-list-item
              v-for="item in items"
              :class="[
                index % 1 === 0 ? 'py-2' : index % 5 === 0 ? 'py-8' : 'py-4',
                index % 2 === 0 ? 'bg-grey-dark-2' : index % 1 === 0 ? 'bg-slow' : '',
                'px-2', // Added class for styling
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
    menuItems: [
        { text: 'Home', icon: 'mdi-home', route: '/' },
        { text: 'About', icon: 'mdi-information', route: '/about' },
        { text: 'Resume', icon: 'mdi-file-document', route: '/resume' },
        { text: 'Portfolio', icon: 'mdi-folder-open', route: '/portfolio' },
        { text: 'Blog', icon: 'mdi-pencil', route: '/blog' },
        { text: 'Contact', icon: 'mdi-email', route: '/contact' },
        { text: 'Menu', icon: 'mdi-menu', route: '/menu' }, // Additional item
        { text: 'Rewards', icon: 'mdi-trophy', route: '/rewards' }, // Additional item
        { text: 'Gift Cards', icon: 'mdi-gift', route: '/gift-cards' }, // Additional item
      ],
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
        link: "/vue",
        title: "Vue.js Tutorial",
        value: "Learning-Vue",
      },
      {
        "prepend-icon": "mdi-language-javascript",
        link: "/javascript",
        title: "JavaScript Basics",
        value: "Learning-Javascript",
      },
      {
        "prepend-icon": "mdi-language-python",
        link: "/python",
        title: "Python Basics",
        value: "Learning-Python",
      },
      {
        "prepend-icon": "mdi-react",
        link: "/React",
        title: "React Basics",
        value: "Learning-React",
      },
      {
        "prepend-icon": "mdi-language-php",
        link: "/php",
        title: "PHP Basics",
        value: "Learning-PHP",
      },
      {
        "prepend-icon": "mdi-language-java",
        link: "/java",
        title: "Java Basics",
        value: "Learning-Java",
      },
      {
        "prepend-icon": "mdi-language-cpp",
        link: "/c++",
        title: "C++ Basics",
        value: "Learning-c++",
      },
      {
        "prepend-icon": "mdi-language-ruby",
        link: "/ruby",
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
<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
.main-container {
  margin: 0px;
  padding: 0px;
  background-color: black;
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
}
.blur-circle1 {
  width: 200px;
  height: 200px;
  background: linear-gradient(to bottom, white, pink);
  border-radius: 50%;
  filter: blur(120px);
  position: absolute;
  left: 10%;
  top: 20%;
  /* transform: translate(50%); */
}
.blur-circle2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(to bottom, white, pink);
  border-radius: 50%;
  filter: blur(100px);
  position: absolute;
  right: 10%;
  top: 20%;
  /* transform: translate(50%); */
}
body {
  font-family: "Open Sans", sans-serif;
}
a {
  text-decoration: none;
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap");
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: "Nunito", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #002733;
}

.orange {
  color: #FF7A01;
}

.montserrat {
  font-family: "Montserrat", sans-serif;
}

img {
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.container {
  max-width: 1300px;
  margin: 0px auto 0px auto;
  padding: 0px 40px;
}
@media (min-width: 1200px) and (max-width: 1441px) {
  .container {
    max-width: 1250px;
    padding: 0px 36px;
  }
}
@media (max-width: 767px) {
  .container {
    padding: 0px 30px;
  }
}
@media (max-width: 479px) {
  .container {
    padding: 0px 30px 0px 20px;
  }
}

.about-me {
  padding-top: 50px;
  padding-bottom: 50px;
}
.about-me .about-me-container {
  position: relative;
}
@media (max-width: 960px) {
  .about-me .about-me-container {
    padding-bottom: 100px;
  }
}
.about-me .about-me-container .about-me-title {
  font-size: 55px;
  color: #87A4B6;
  font-weight: 700;
}
@media (max-width: 500px) {
  .about-me .about-me-container .about-me-title {
    font-size: 30px;
  }
}

.about-me-flex-container {
  margin-top: -25px;
  margin-left: 150px;
  left: 100px;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 960px) {
  .about-me-flex-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
    gap: 50px;
  }
}
@media (max-width: 500px) {
  .about-me-flex-container {
    margin-top: -10px;
  }
}
.about-me-flex-container .about-me-image {
  position: relative;
  width: 400px;
  height: 400px;
}
@media (max-width: 500px) {
  .about-me-flex-container .about-me-image {
    width: 300px;
    height: 300px;
  }
}
.about-me-flex-container .about-me-image .back-div {
  position: absolute;
  bottom: 0;
  z-index: -3;
  background-color: #013747;
  width: 80%;
  height: 80%;
}
.about-me-flex-container .about-me-image .black-image {
  z-index: -2;
  position: absolute;
  left: 10px;
  bottom: 10px;
  height: 100%;
}
.about-me-flex-container .about-me-image .black-image img {
  height: 100%;
}
.about-me-flex-container .about-me-image .main-image {
  width: 70%;
  height: 70%;
  overflow: hidden;
  position: absolute;
  left: 25%;
  top: 5%;
  box-shadow: rgb(0, 0, 0) 0px 7px 50px 0px;
  transition: all 0.2s ease-out;
}
.about-me-flex-container .about-me-image .main-image:hover {
  transform-origin: top center;
  transform: scale(1.5);
  border-radius: 25px;
}
.about-me-flex-container .about-me-image .main-image img {
  transform-origin: center center;
  transform: scale(2);
  -o-object-fit: cover;
     object-fit: cover;
  transition: all 0.2s ease-out;
}
.about-me-flex-container .about-me-image .main-image img:hover {
  transform: scale(1);
}
.about-me-flex-container .about-me-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  flex: 0 0 40%;
}
@media (max-width: 960px) {
  .about-me-flex-container .about-me-content {
    flex-direction: row-reverse;
  }
}
.about-me-flex-container .about-me-content .logo {
  max-width: 200px;
}
.about-me-flex-container .about-me-content .logo img {
  filter: drop-shadow(0 0 25px rgb(0, 0, 0));
}
@media (max-width: 500px) {
  .about-me-flex-container .about-me-content .logo img {
    transform: rotateZ(90deg);
  }
}
.about-me-flex-container .about-me-content .text {
  color: #87A4B6;
  font-weight: 600;
  font-size: 18px;
}
@media (max-width: 500px) {
  .about-me-flex-container .about-me-content .text {
    font-size: 16px;
  }
}



.mail-button {
  display: flex;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  padding: 15px;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;
}
.mail-button a {
  display: flex;
}
.mail-button img {
  -o-object-fit: contain;
     object-fit: contain;
  transition: all 0.2s ease-out;
}


.mail-button2 {
  background-color: #001925;
  position: absolute;
  bottom: 0;
  left: 0;
  border: 10px solid #001925;
}
.mail-button2 img {
  filter: invert(56%) sepia(42%) saturate(4795%) hue-rotate(360deg) brightness(103%) contrast(105%);
}
.mail-button2:hover {
  background-color: #FF7A01;
  border: 10px solid #FF7A01;
}
.mail-button2:hover img {
  filter: unset;
  transform: scale(1.5);
}

.portfolio-link {

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.portfolio-link a{
  text-decoration: none;
  color: white;

  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
/* Small */
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
/* Medium */
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
/* Large */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
/* End Global Rules */

/* Start Landing Page */
.landing-page header {
  min-height: 80px;
  display: flex;
}
@media (max-width: 767px) {
  .landing-page header {
    min-height: auto;
    display: initial;
  }
}
.landing-page header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 767px) {
  .landing-page header .container {
    flex-direction: column;
    justify-content: center;
  }
}
.landing-page header .logo {
  color: #5d5d5d;
  font-style: italic;
  text-transform: uppercase;
  font-size: 20px;
}
@media (max-width: 767px) {
  .landing-page header .logo {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
.landing-page header .links {
  display: flex;
  align-items: center;
}
@media (max-width: 767px) {
  .landing-page header .links {
    text-align: center;
    gap: 10px;
  }
}
.landing-page header .links li {
  margin-left: 30px;
  color: #5d5d5d;
  cursor: pointer;
  transition: 0.3s;
}
@media (max-width: 767px) {
  .landing-page header .links li {
    margin-left: auto;
  }
}
.landing-page header .links li:last-child {
  border-radius: 20px;
  padding: 10px 20px;
  color: #fff;
  background-color: #6c63ff;
}
.landing-page header .links li:not(:last-child):hover {
  color: #6c63ff;
}
.landing-page .content .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 140px;
  min-height: calc(100vh - 80px);
}
@media (max-width: 767px) {
  .landing-page .content .container {
    gap: 0;
    min-height: calc(100vh - 101px);
    justify-content: center;
    flex-direction: column-reverse;
  }
}
@media (max-width: 767px) {
  .landing-page .content .info {
    text-align: center;
    margin-bottom: 15px;
  }
}
.landing-page .content .info h1 {
  color: #bbbbbb;
  font-size: 44px;
}
.landing-page .content .info p {
  margin: 0;
  line-height: 1.6;
  font-size: 15px;
  color: #b3b3b3;
}
.landing-page .content .info button {
  border: 0;
  border-radius: 20px;
  padding: 12px 30px;
  margin-top: 30px;
  cursor: pointer;
  color: #fff;
  background-color: #6c63ff;
}
.landing-page .content .image img {
  max-width: 100%;
}
/* End Landing Page */

.main-image {
  /* mix-blend-mode:exclusion */
  width: 600px;
  height: 400px;
}
h1,
p {
  color: white;
}
</style>
