<template>
  <v-container>
    <v-card>
      <v-card-title>Chat</v-card-title>
      <v-card-text>
        <v-list v-if="messages.length">
          <v-list-item v-for="message in messages" :key="message.id">
            <v-list-item-content>
              <v-list-item-title v-if="message.sender === sender">{{ message.text }}</v-list-item-title>
              <v-list-item-subtitle v-else class="text-right">{{ message.text }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-alert v-else>No messages</v-alert>
      </v-card-text>
      <v-card-actions>
        <v-text-field v-model="newMessage" label="New Message" @keydown.enter="sendMessage"></v-text-field>
        <v-btn @click="sendMessage" color="primary">Send</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { collection, addDoc, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import {db} from '@/services/firebaseauth'; // Import the Firebase Firestore instance

export default {
  data() {
    return {
      messages: [],
      newMessage: '',
      sender: 'user1', // Replace with actual sender ID
      receiver: 'user2', // Replace with actual receiver ID
    };
  },
  async mounted() {
    await this.fetchMessages();
    this.listenForNewMessages();
  },
  methods: {
    async fetchMessages() {
      try {
        const messagesRef = collection(db, 'messages');
        const q = query(messagesRef, orderBy('timestamp'));

        const querySnapshot = await q.get();
        this.messages = [];
        querySnapshot.forEach((doc) => {
          this.messages.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    },
    async sendMessage() {
      try {
        const message = {
          sender: this.sender,
          receiver: this.receiver,
          text: this.newMessage,
          timestamp: new Date(),
        };

        await addDoc(collection(db, 'messages'), message);
        this.newMessage = ''; // Clear the input field after sending
      } catch (error) {
        console.error('Error sending message:', error);
      }
    },
    listenForNewMessages() {
      const messagesRef = collection(db, 'messages');
      const q = query(messagesRef, orderBy('timestamp'));

      onSnapshot(q, (querySnapshot) => {
        this.messages = [];
        querySnapshot.forEach((doc) => {
          this.messages.push({ id: doc.id, ...doc.data() });
        });
      });
    },
  },
};
</script>

<style scoped>
/* Add custom styles as needed */
</style>
