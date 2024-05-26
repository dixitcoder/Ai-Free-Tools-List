<script setup>
import { ref, computed, onMounted } from "vue";
import router from "@/router";
import { signInWithEmailAndPassword , createUserWithEmailAndPassword  } from "firebase/auth";
import {addDoc,collection} from 'firebase/firestore'

import { useStore } from "vuex";
import { auth ,db} from "@/services/firebaseauth";

// user login
const emailLogin = ref('')
const passwordLogin = ref('')

// user register
const emailReg = ref('')
const passwordReg = ref('')

const loginError = ref(false);
const isAuthenticated = ref(false);



const store = useStore();

const userID  =ref('')

const usertoken = ref({
  _userID:'',
  fullName: "Dixit Patel",
      username: "dixitcoder",
      profilePicUrl: "https://instagram.fkul18-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ad=z-m&_nc_ht=instagram.fkul18-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=hzidlFdfQAUQ7kNvgELxUqR&edm=AEaYFD0BAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AYB0LkC4Svwvp9ozva-RtocX_P_s72ThfbtoOqbeKg9Nzw&oe=6658C20F&_nc_sid=de718f",
      biography: "Web Developer | Crafting digital experiences with code and creativity ☕✨ | Dreamer by night, building digital bridges by day 🌉 | Transforming ideas",
      externalUrl: "https://login-b3036.web.app/",
      bioLinks: [
        { title: "Patel_dixit_1005", url: "https://login-b3036.web.app/", link_type: "external" },
        { title: "Facebook profile", url: "https://www.facebook.com/profile.php?id=61553112200387&ref=xav_ig_profile_web", link_type: "facebook" },
        { title: "Dixitcoder AI Tools", url: "https://dixitcoder-tools-ai.web.app", link_type: "external" }
      ]
})

const newcall = () => {
  let log = store.state.users;
  log = false;
  console.log(log);
};

import Cookies from "js-cookie";



newcall();

onMounted(() => {
  auth.onAuthStateChanged((user) => {
    isAuthenticated.value = !!user;
    if (user) {
      router.push("/dashboard");
    }
  });
});

const doRegister = async () => {
  createUserWithEmailAndPassword(auth, emailReg.value, passwordReg.value)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
     userID.value  =   user.uid
     usertoken.value._userID = user.uid
     sendUserID()

// Set a cookie
Cookies.set("user_id", userID.value, { expires: 365 });

// Get a cookie
const cookieValue = Cookies.get("user_id");

console.log(cookieValue); // Output: NJOb0ZlTZqURFIvymdiXUQ1g0NH3
  })
  .catch((error) => {
  console.log(error);
  })
}



const doLogin = async () => {
  console.log(emailLogin,passwordLogin);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      emailLogin.value,
      passwordLogin.value
    );
    const user = userCredential.user;

    isAuthenticated.value = true;
    const data = JSON.stringify(user);
    console.log(data);
Cookies.set("user_id", user.uid, { expires: 365 });

// Get a cookie
const cookieValue = Cookies.get("user_id");

console.log(cookieValue);
    router.push("/dashboard");
  } catch (error) {
    loginError.value = true;
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
};


const sendUserID = async () => {
  try {
    // Create a reference to the "patients" collection
    const patientsCollectionRef = collection(db, "userID");

    // Add a new document to the "patients" collection with the form data
    const docRef = await addDoc(patientsCollectionRef, usertoken.value);

    // Log the ID of the newly created document
    console.log(userID.value);
    console.log(usertoken);
    console.log("Document written with ID:", docRef.id);

  } catch (error) {
    // Handle errors, e.g., show an error message to the user
    console.error("Error adding document:", error);
  }
};

</script>

<template>

  <div>
    <div id="app">
      <div class="login-page">
        <transition name="fade">
          <div v-if="!registerActive" class="wallpaper-login"></div>
        </transition>
        <div class="wallpaper-register"></div>

        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
              <div
                v-if="!registerActive"
                class="card login"
                v-bind:class="{ error: emptyFields }"
              >
                <h1>Sign In</h1>
                <div  class="form-group">
                  <input
                    v-model="emailLogin"
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    required
                  />
                  <input
                    v-model="passwordLogin"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    required
                  />
                  <input  type="submit" class="btn btn-primary" @click="doLogin" />
                  <p>
                    Don't have an account?
                    <a
                      href="#"
                      @click="(registerActive = !registerActive), (emptyFields = false)"
                      >Sign up here</a
                    >
                  </p>
                  <p><a href="#">Forgot your password?</a></p>
                </div>
              </div>

              <div v-else class="card register" v-bind:class="{ error: emptyFields }">
                <h1>Sign Up</h1>
                <div class="form-group">
                  <input
                    v-model="emailReg"
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    required
                  />
                  <input
                    v-model="passwordReg"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    required
                  />

                  <input type="submit" class="btn btn-primary" @click="doRegister" />
                  <p>
                    Already have an account?
                    <a
                      href="#"
                      @click="(registerActive = !registerActive), (emptyFields = false)"
                      >Sign in here</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  line-height: 1rem;
}

.card {
  padding: 20px;
}

.form-group {
  input {
    margin-bottom: 20px;
  }
}

.login-page {
  align-items: center;
  display: flex;
  height: 100vh;

  .wallpaper-login {
    background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
      no-repeat center center;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .wallpaper-register {
    background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
      no-repeat center center;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  h1 {
    margin-bottom: 1.5rem;
  }
}

.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
