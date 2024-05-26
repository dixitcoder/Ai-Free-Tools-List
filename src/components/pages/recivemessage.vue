<script setup>
import {ref}from 'vue'
import { db } from "@/services/firebaseauth";

import { onSnapshot,collection } from "firebase/firestore";

const message = ref([])

const messagerecive = async () =>{
  const patientsCollectionRef = collection(db, "messages");
    onSnapshot(patientsCollectionRef, (snapshot) => {
      message.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    });
}

messagerecive()




</script>

<template>
  <div>

    <br>
    <v-card


    class="mx-auto text-white"
    style="padding: 1pc;border-radius: 25px;"
    color="#162C46"
    max-width="950"
    title="New Update"
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

    <v-card-actions style="background-color: #0D2136;padding:2pc;" v-for="message in message" :key="message">
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
      <br><br>


    </v-card-actions>

  </v-card>

  </div>
</template>

<style>

</style>
