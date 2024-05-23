<template>
  <v-container style="padding: 5pc">
    <h2 style="text-align: center"><i>
      <v-icon color="blue darken-2" size="24">mdi-login</v-icon>

      New Book Learning</i></h2>

    <!-- Speed dial button -->
    <v-speed-dial location="bottom center" transition="slide-y-reverse-transition">
      <template v-slot:activator="{ on }">

      </template>
    </v-speed-dial><br><br>

    <!-- Course form -->
 <v-card mx-auto="1000" style="padding:2pc">
  <v-form @submit.prevent="sendDataToFirestore">
    <v-text-field v-model="tools.img" label="Image URL" required></v-text-field>
    <v-text-field v-model="tools.link" label="PDF Link" required></v-text-field>


      <v-text-field v-model="tools.title" label="Title" required></v-text-field>
      <v-text-field v-model="tools.description" label="Description" required></v-text-field>


      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>
 </v-card>
  </v-container>
</template>

<script>
import { collection, addDoc} from "firebase/firestore";
import { db } from "@/services/firebaseauth"; // Assuming you have a Firebase authentication service

export default {
  data() {
    return {
      sheet: false,
      tools: {
        "prepend-icon": "mdi-language-ruby",
        description: "",
        link: "",
        title: "",
        value: "",
        img: ""
      }
    };
  },
  methods: {
    async sendDataToFirestore() {
      try {
        // Create a reference to the "patients" collection
        const patientsCollectionRef = collection(db, "book");

        // Add a new document to the "patients" collection with the form data
        const docRef = await addDoc(patientsCollectionRef, this.tools);

        // Log the ID of the newly created document
        console.log("Document written with ID:", docRef.id);
        location.reload()

      } catch (error) {
        // Handle errors, e.g., show an error message to the user
        console.error("Error adding document:", error);
      }
    }
  }
};
</script>
