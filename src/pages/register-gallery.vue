<script setup>
import avatar1 from "/home/dixitcoder/Desktop/DixitCoder_Project/tools-ai/src/assets/img/bruce-mars.jpg";
import routes from "@/router/index";
import { db  } from "@/services/firebaseauth";
import {storage} from "@/services/firebaseauth"
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc ,getDocs } from "firebase/firestore";
import {  uploadBytes } from 'firebase/storage';
import { ref } from "vue";
import router from "@/router/index";


const selectedFile = ref(null);






const done = ref(true);

const totoal = ref(Number())

const items= ref([])

const patient = ref({
  src:avatar1,
  username:'',
  Depression:""
});


console.log(patient.value.picture);

const refInputEl = ref();
const accountDataLocal = ref(patient);
const isAccountDeactivated = ref(false);






const file = ref(null);
const imageUrl = ref(null);
const progress = ref(0);
const error = ref(null);


// Event handler for file change
const handleFileChange = (e) => {
  file.value = e.target.files[0];
  if (file.value) {
    patient.value.src = URL.createObjectURL(file.value);
  }
};


// Event handler for image upload
const uploadImage = async () => {

  if (!file.value) {
    console.error('No file selected');
    return;
  }

  const storageRef1 = storageRef(storage, `gallery/${file.value.name}`);
  const uploadTask = uploadBytesResumable(storageRef1, file.value);

  try {
    uploadTask.on('state_changed',
      (snapshot) => {
        const progressValue = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        progress.value = progressValue;
      },
      (error) => {
        error.value = error.message;
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        imageUrl.value = downloadURL;
        console.log('Image URL:', patient.value.src=downloadURL);
        addPatient()
      }
    );
  } catch (error) {
    error.value = error.message;
  }
};








const addPatient = async () => {

  try {
    // Create a reference to the "patients" collection
    const patientsCollectionRef = collection(db, "gallery");

    // Add a new document to the "patients" collection with the form data
    const docRef = await addDoc(patientsCollectionRef, patient.value);

    // Log the ID of the newly created document
    console.log("Document written with ID:", docRef.id);
    location.reload()
  } catch (error) {
    // Handle errors, e.g., show an error message to the user
    console.error("Error adding document:", error);
  }
};



const changeAvatar = (file) => {
  const fileReader = new FileReader();
  const { files } = file.target;
  if (files && files.length) {
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = () => {
      if (typeof fileReader.result === "string")
        accountDataLocal.value.picture = fileReader.result;
    };
  }
};



async function  uploadFile() {
  if (!selectedFile.value) {
    console.error('No file selected');
    return;
  }

  try {
    const storageRef = ref(storage, `uploads/${selectedFile.value.name}`);

    // Put the file in storage
    const uploadTask = uploadBytes(storageRef, selectedFile.value);

    // Wait for the upload to complete
    const snapshot = await uploadTask;

    console.log('File uploaded successfully!', snapshot);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}



</script>

<template>


  <VRow v-if="done">
    <VCol cols="25" style="padding:3pc">
     <a href="/AiToolsList" class="link"> <h2>

      <v-icon to="/AiToolsList">mdi-arrow-left</v-icon>

      </h2></a>
      <VCard style="padding:2pc;background-color: #0D2136;"  append-icon="mdi-instagram" title="Photos Uploads">

        <VCardText class="d-flex-center" >
          <!-- 👉 Avatar -->
          <VAvatar
            rounded="lg"
            size="400"
            class="me-6"
            :image="patient.src"
          />


          <!-- 👉 Upload Photo -->

        </VCardText>

        <VDivider />

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">


            <VRow>
             <!-- firest Name -->

             <VCol md="6" cols="12">
              <form class="d-flex flex-column justify-center gap-5">

            <!-- <p class="text-body-1 mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p> -->
          </form>

        <VDivider />
        <v-file-input
        ref="refInputEl"
              type="file"
              name="file"
              accept=".jpeg,.png,.jpg,GIF"
              hidden
              @change="handleFileChange"
          ></v-file-input>
              <VTextField v-model="patient.username" label="username" />
              <VTextField v-model="patient.Depression" label="Depression" />
              <v-btn @click="uploadImage()" color="primary">submit</v-btn>

              </VCol>
              <!-- Form Actions -->
<br>
              <!-- Is Active -->


            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <div v-else>
    <v-sheet
      elevation="12"
      max-width="600"
      rounded="lg"
      width="100%"
      class="pa-4 text-center mx-auto"
    >
      <v-icon
        class="mb-5"
        color="success"
        icon="mdi-check-circle"
        size="112"
      ></v-icon>
      <!-- <h2 class="text-h5 mb-6">{{patient.first_name}}  {{ patient.last_name }}</h2> -->

      <h2 class="text-h5 mb-6"> Registration  successfully</h2>


      <p class="mb-4 text-medium-emphasis text-body-2">
        Dental clinic information successfully registered!
        <br>
        To see a report on this reconciliation, click
        <a href="#" class="text-decoration-none text-info" @click="viewReconciliationReport">View reconciliation report.</a>
        <br>
        Otherwise, you're done!
      </p>


      <v-divider class="mb-4"></v-divider>

      <div class="text-end">
        <v-btn
          class="text-none"
          color="success"
          rounded
          variant="flat"
          width="90"
          to="/typography"
        >
          Done
        </v-btn>
      </div>
    </v-sheet>
  </div>
</template>
