<template>
  <v-container>
    <v-card>
      <v-card-title>Dixitcoder Message : </v-card-title>

      <v-card-text>
        <v-list v-if="messages.length">
          <v-list-item v-for="message in messages" :key="message.id">
            <v-list-item-content>

              <v-card
    class="mx-auto"
    max-width="425"
  >
    <v-list lines="three">
      <v-list-subheader>@Dixitcoder</v-list-subheader>

      <v-list-item
        prepend-avatar="https://firebasestorage.googleapis.com/v0/b/dixitcoder-tools-ai.appspot.com/o/432381600_957304799301578_1886847705414183493_n.webp?alt=media&token=8b5a66a8-3f87-48bf-8824-942e7360ac0f"
        title="@Dixitcoder "
      >
      <v-list-item-title v-if="message.sender === sender">{{ message.text }}</v-list-item-title>
              <v-list-item-subtitle v-else class="text-right">{{ message.text }}</v-list-item-subtitle>
      </v-list-item>

      <v-divider inset></v-divider>
    </v-list>
  </v-card>

            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-alert v-else>No messages</v-alert>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
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
