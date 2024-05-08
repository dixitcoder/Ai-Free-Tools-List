<script>
import { auth } from "@/services/firebaseauth";
import { signInWithEmailAndPassword  , createUserWithEmailAndPassword} from "firebase/auth";
export default {
  data() {
    return {
      emailLogin: "admin@gmail.com",
    passwordLogin: "123123",
    emailReg:'',
    passwordReg:''
    }
  },
  methods: {
    doLogin() {createUserWithEmailAndPassword
      signInWithEmailAndPassword(auth, this.emailLogin, this.passwordLogin)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         this.$router.push('/home')
window.open('www.google.com')
         console.log(user);
          // Additional logic after successful login
        })
        .catch((error) => {
          console.log(error);
        });
    },
    doRegister(){

      createUserWithEmailAndPassword(auth, this.emailReg, this.passwordReg)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ..
  });

    }
  },

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
                  <input
                    v-model="confirmReg"
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
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
