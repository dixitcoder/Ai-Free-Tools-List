<template>

  <v-container style="padding:5pc">
    <h2 style="text-align:center"><i>
      <v-speed-dial location="bottom center" transition="slide-y-reverse-transition">
          <template v-slot:activator="{ on }">

            <v-btn v-on="on" @click.stop="sheet = !sheet" size="large"  icon>
              <v-icon color="blue darken-2" size="24">mdi-login</v-icon>

            </v-btn>
          </template>


        </v-speed-dial>
      New Register AI Tools</i></h2>
    <v-icon color="blue darken-2" size="24">mdi-question</v-icon>

    <p style="padding:1pc">It looks like you're working on a project related to registering AI tools. How can I assist you further with this?</p>
    <v-form @submit.prevent="sendDataToFirestore">

      <v-text-field v-model="tools.Name" label="Name" required></v-text-field>
      <v-text-field v-model="tools.link" label="Link" required></v-text-field>
      <v-text-field v-model="tools.Category" label="Category"></v-text-field>

      <v-textarea v-model="tools.description" label="Depression"></v-textarea>

      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>
  </v-container>
  <v-container>
    <div>
    <h2> Documents in "tools-ai" Collection:{{ id }}</h2>
  </div>
  </v-container>
  <v-card>
    <!-- Content -->


    <!-- Dialog -->
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <!-- Dialog Content -->

        <v-card-actions>
          Done
          <v-btn color="primary" @click="submitForm">Submit</v-btn>
          <v-btn color="error" @click="closePopup">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { collection, addDoc, getDocs ,deleteDoc,doc} from "firebase/firestore";
import { db } from "@/services/firebaseauth"; // Assuming you have a Firebase authentication service


export default {
  data() {
    return {
      dialog: false,
      tools: {
        Name: "",
        link: "",
        description: "",
        Category:''
      },
      documents: [],
      id:''
    };
  },
  async mounted() {
    try {
        const querySnapshot = await getDocs(collection(db, 'tools-ai'));
        // Map query snapshot to an array of document data
        this.documents = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
  },
  methods: {
    closePopup(){
      this.dialog= false
    },
    async sendDataToFirestore() {
      try {
        // Create a reference to the "patients" collection
        const patientsCollectionRef = collection(db, "tools-ai");

        // Add a new document to the "patients" collection with the form data
        const docRef = await addDoc(patientsCollectionRef, this.tools);

        // Log the ID of the newly created document
        console.log("Document written with ID:", this.id=docRef.id);
        location.reload()

      } catch (error) {
        // Handle errors, e.g., show an error message to the user
        console.error("Error adding document:", error);
      }
    },
    async deleteDocument(documentId) {
      try {
        await deleteDoc(doc(db, 'tools-ai', documentId));
        console.log('Document successfully deleted!');
        // After deletion, fetch data again to update the UI
        await this.fetchData();
        location.reload()
      } catch (error) {
        console.error('Error deleting document:', error);
      }


    },

  },
};
</script>
