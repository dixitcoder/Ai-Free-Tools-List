<template>

  <v-container>
    <v-row>
      <v-col v-for="user in users" :key="user.id" cols="12" sm="6" md="4">
        <!-- Profile Picture -->
        <v-img :src="user.profilePicUrl" :alt="user.username" height="200"></v-img>

        <!-- User Information -->
        <v-card>
          <v-card-title>
            <v-text-field v-model="user.fullName" label="Full Name"></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-text-field v-model="user.username" label="Username"></v-text-field>
            <v-textarea v-model="user.biography" label="Biography"></v-textarea>
            <v-text-field v-model="user.externalUrl" label="External URL"></v-text-field>

            <!-- Links -->
            <v-divider></v-divider>
            <v-list>
              <v-list-item v-for="(link, index) in user.bioLinks" :key="link.title">
                <v-list-item-content>
                  <v-text-field v-model="link.title" label="Link Title"></v-text-field>
                  <v-text-field v-model="link.url" label="Link URL"></v-text-field>
                  <v-select
                    v-model="link.link_type"
                    :items="linkTypes"
                    label="Link Type"
                  ></v-select>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="saveUser(user)">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>


</template>

<script>
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseauth"; // Ensure this points to your Firebase initialization
import Cookies from 'js-cookie';

export default {
  data() {
    return {
      users: [], // State variable to store the fetched users
      selectedUser: null, // State variable to store the selected user data
      dialog: false, // State variable to control the dialog visibility
    };
  },
  methods: {
    async fetchUsers() {
      const cookieValue = Cookies.get("user_id");
      console.log(cookieValue);
      if (cookieValue) {
        const userCollectionRef = collection(db, "userID");
        const q = query(userCollectionRef, where("_userID", "==", cookieValue));

        try {
          const querySnapshot = await getDocs(q);
          this.users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      } else {
        console.log("User ID cookie not found.");
      }
    },
    openUserDialog(user) {
      this.selectedUser = user;
      this.dialog = true;
    },
    closeUserDialog() {
      this.selectedUser = null;
      this.dialog = false;
    }
  },
  created() {
    this.fetchUsers(); // Fetch the users when the component is created
  },
};
</script>
