<template>
  <v-card>
    <v-table style="padding: 5pc" fixed-header height="800px">
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Full Name</th>
          <th class="text-left">Description</th>
          <th class="text-left">Category</th>
          <th class="text-left">Link</th>
          <th class="text-left">
            <v-btn color="primary" @click="fetchData()">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </th>
          <th class="text-left">Edit</th>
          <th class="text-left">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :class="[
            index % 1 === 0 ? 'py-2' : index % 5 === 0 ? 'py-8' : 'py-4',
            index % 2 === 0 ? 'bg-grey-lighten-2' : index % 1 === 0 ? 'bg-slow' : '',
            'px-2',
          ]"
          v-for="(patient, index) in items"
          :key="patient.id"
        >
          <td>{{ index }}</td>
          <td>{{ patient.Name }} {{ patient.last_name }}</td>
          <td>{{ patient.description }}</td>
          <td>{{ patient.Category }}</td>
          <td>
            <a :href="patient.link" target="_blank">
              <v-btn style="font-size: x-small;" color="link">{{ patient.link }}</v-btn>
            </a>
          </td>
          <td></td>
          <td>
            <v-btn color="primary" @click="edit(patient.id)" icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </td>
          <td>
            <v-btn color="red" @click="deleteItem(patient.id)" icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <!-- Edit Profile Dialog -->
    <v-dialog v-model="dialog" fullscreen>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Edit Profile</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn variant="text" @click="dialog = false">Cancel</v-btn>
            <v-btn class="btn" color="dark" @click="saveChanges">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list lines="two" subheader>
          <v-list-subheader>User Profile</v-list-subheader>
          <v-row>
            <v-col cols="12">
              <v-card>
                <v-divider />
                <v-card-text>
                  <v-card-title>Profile Details</v-card-title>
                  <v-text-field label="Category" v-model="user.Category"></v-text-field>
                  <v-text-field label="Name" v-model="user.Name"></v-text-field>
                  <v-text-field label="Description" v-model="user.description"></v-text-field>
                  <v-text-field label="Link" v-model="user.link"></v-text-field>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <div v-if="reloade">
            <reloade />
          </div>
        </v-list>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { db } from "@/services/firebaseauth";
import { getDoc, doc, collection, onSnapshot, updateDoc, deleteDoc } from "firebase/firestore";
import { ref } from "vue";

export default {
  data() {
    return {
      dialog: false,
      profileId: "",
      user: {}, // Profile data to be edited
      items: [],
      reloade: false,
    };
  },
  created() {
    const patientsCollectionRef = collection(db, "tools-ai");
    onSnapshot(patientsCollectionRef, (snapshot) => {
      this.items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    });
  },
  methods: {
    async edit(profileId) {
      this.profileId = profileId;
      this.dialog = true;

      try {
        const docRef = doc(db, "tools-ai", this.profileId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          this.user = docSnapshot.data();
        } else {
          console.error("Document not found.");
        }
      } catch (error) {
        console.error("Error fetching document data:", error);
      }
    },
    async saveChanges() {
      try {
        const docRef = doc(db, "tools-ai", this.profileId);
        await updateDoc(docRef, this.user);
        this.dialog = false;
        console.log("Profile updated successfully!");
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    },
    async deleteItem(profileId) {
      if (confirm("Are you sure you want to delete this profile?")) {
        try {
          const docRef = doc(db, "tools-ai", profileId);
          await deleteDoc(docRef);
          console.log("Profile deleted successfully!");
        } catch (error) {
          console.error("Error deleting profile:", error);
        }
      }
    },
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
