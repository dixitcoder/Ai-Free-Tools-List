<script setup>
import { ref } from "vue";
const dialog = ref(false);
import { db } from "@/services/firebaseauth";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

const message = ref({
  text: "",
});

const messageData = ref([]);

const sendMessage = async () => {
  try {
    // Create a reference to the "patients" collection
    const patientsCollectionRef = collection(db, "messages");

    // Add a new document to the "patients" collection with the form data
    const docRef = await addDoc(patientsCollectionRef, message.value);

    // Log the ID of the newly created document
    console.log("Document written with ID:", docRef.id);
    location.reload();
  } catch (error) {
    // Handle errors, e.g., show an error message to the user
    console.error("Error adding document:", error);
  }
};

const messagerecive = async () => {
  const patientsCollectionRef = collection(db, "messages");
  onSnapshot(patientsCollectionRef, (snapshot) => {
    messageData.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
};

messagerecive();
</script>

<template>
  <!-- <h2 class="btn" style="color: aqua">Send</h2> -->
  <div>
    <div class="pa-4 text-center">
      <v-dialog v-model="dialog" max-width="600">
        <template v-slot:activator="{ props: activatorProps }">
          <div class="text-right">
            <v-btn
              icon="mdi-plus"
              color="#162C46"
              size="50"
              width="200"
              class="text-none font-weight-regular"
              prepend-icon="mdi-account"
              text="Edit Profile"
              variant="tonal"
              v-bind="activatorProps"
            ></v-btn>
          </div>
        </template>

        <v-card prepend-icon="mdi-account" title="User Profile">
          <v-col>
            <v-text-field
              v-model="message.text"
              color="primary"
              label="Message"
            ></v-text-field>
          </v-col>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

            <v-btn
              color="primary"
              text="Send"
              variant="tonal"
              @click="sendMessage"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
  <div>
    <!-- send message  -->
    <div style="padding: 1pc">


      <v-card

    style="padding: 1pc;border-radius: 25px;"

        class="mx-auto text-white"

        color="#162C46"
        max-width="950"
        title="Cheat"
        prepend-icon="mdi-message"

      >
        <template v-slot:prepend>
          <v-icon size="x-large"></v-icon>
        </template>

        <v-card-text class="text-h5 py-2">
          "To send a message to Dixit Patel, you can try emailing him at
          dixitcoder@gmail.com. If you prefer to call him, his phone number is
          +91.8160724541. Keep in mind that this information may not be up-to-date, so
          it's always a good idea to double-check before reaching out."
        </v-card-text>

        <v-card-actions style="background-color: #0D2136;padding:2pc" v-for="message in messageData" :key="message">
          <v-list-item class="w-100">
            <template v-slot:prepend>
              <v-avatar
                color="grey-darken-5"
                image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-avatar>
            </template>

            <v-list-item-title>Dixitcoder</v-list-item-title>

            <v-list-item-subtitle>{{message.text}}</v-list-item-subtitle>

            <template v-slot:append>
              <div class="justify-self-end">
                <v-icon class="me-1" icon="mdi-instagram" color="primary"></v-icon>
                <!-- <span class="subheading me-2">256</span> -->
                <!-- <span class="me-1">·</span>
                <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                <span class="subheading">45</span> -->
              </div>
            </template>

          </v-list-item>


        </v-card-actions>

      </v-card>
      <!-- </template> -->
    </div>
  </div>
</template>

<style scoped></style>
