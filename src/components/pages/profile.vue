<template>
    <br>
    <div >


        <div class="container gallery-container">

          <h1>All Member  Gallery 👨‍💻</h1>

          <p class="page-description text-center">Futures Collection ⛩</p>

          <div class="tz-gallery">

              <div class="row">

                  <div class="col-sm-12 col-md-4" v-for="item in filteredItems" :key="item">
                      <a class="lightbox">

                        <img
                        v-if="item.src"
                        :src="item.src"
                        alt="Example Images"
                        loading="lazy"
                        @error="setDefaultImage"
                        background-color="primary"
                        data-src="https://photos.fife.usercontent.google.com/pw/AP1GczPmRscCBBoYHOWVFeWs1fEsHwKDML23mNGeFNr0J_YhWtmPwA-FL6ZP=w457-h938-s-no-gm?authuser=1"
                      >

                      </a>
                  </div>


              </div>

          </div>

      </div>

    </div>

</template>

<script>
import { db } from "@/services/firebaseauth";
import { collection, onSnapshot } from "firebase/firestore";
import { getDownloadURL } from 'firebase/storage';

export default {
  data() {
    return {
      categories: ["dixitcoder"],
      selectedCategory: "All",
      selectedImage: null,
      galleryItems: [],
      loading: false,
    };
  },
  computed: {
    filteredItems() {
      if (this.selectedCategory === "All") {
        return this.galleryItems;
      } else {
        return this.galleryItems.filter(
          (item) => item.username === this.selectedCategory
        );
      }
    },
  },
  methods: {
    setDefaultImage(event) {
    event.target.src = 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light';
  },
    handleImageUpload() {
      if (this.selectedImage) {
        const reader = new FileReader();
        reader.readAsDataURL(this.selectedImage);
        reader.onload = () => {
          this.galleryItems.push({ src: reader.result, category: this.selectedCategory });
        };
      }
    },
    filterGallery() {
      // Logic to filter gallery based on selected category
    },
    data() {
      this.loading = true;
      const toolsCollectionRef = collection(db, "gallery");
      onSnapshot(toolsCollectionRef, (snapshot) => {
        const tools = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        this.galleryItems = tools;
        this.loading = false;
      });
    },
    reserve() {
      // Add logic for reserve button click
    },
  },
  mounted() {
    this.data();
  },
};
</script>

<style scoped>
/* Add custom styles as needed */
</style>
