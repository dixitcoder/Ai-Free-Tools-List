<template>
  <v-card elevation="3">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
<h2>New Add Photos

<v-btn href="/registergallery" color="primary" icon="mdi-plus"></v-btn>

</h2><p style="color:red">one time reload</p>
        </v-col>
        <v-col cols="12" md="6">

          <v-select
            v-model="selectedCategory"
            :items="categories"
            label="Select Category"
            @change="filterGallery"
          ></v-select>
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-btn @click="data()" color="primary"  icon="mdi-refresh"></v-btn>

    





        <v-col cols="12" md="4" v-for="(item, index) in filteredItems" :key="index">
          <v-card>

            <v-img :src="item.src" aspect-ratio="1.5"></v-img>
            <v-card-text>
              <h2>{{ item.username }}</h2>
              <a href='#'>Instagram</a>
            </v-card-text>
            <v-card-actions>
              <v-btn text>Details</v-btn>
              <v-btn text>Next</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import {db} from '@/services/firebaseauth'
import { collection, onSnapshot } from 'firebase/firestore';

export default {
  data() {
    return {
      categories: ['dixitcoder',],
      selectedCategory: 'All',
      selectedImage: null,
      galleryItems: [

        // Add more gallery items as needed
      ],
    };
  },
  computed: {
    filteredItems() {
      if (this.selectedCategory === 'All') {
        return this.galleryItems;
      } else {
        return this.galleryItems.filter(item => item.username === this.selectedCategory);
      }
    },
  },
  methods: {
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
    data(){
      const toolsCollectionRef = collection(db, 'gallery');
      onSnapshot(toolsCollectionRef, (snapshot) => {
        const tools = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      this.galleryItems = tools
      });
    }
  },
};
</script>

<style scoped>
/* Add custom styles as needed */
</style>
