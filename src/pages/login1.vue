<template>
  <div style="padding: 2pc">
    <v-card class="mx-auto" max-width="400" style="padding: 2pc">
      <v-card-title class="text-center">Login</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Username"
            v-model="username"
            prepend-icon="mdi-account"
            required
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            prepend-icon="mdi-lock"
            type="password"
            required
          ></v-text-field>
          <v-btn
            class="btn"
            color="primary"
            @click="login"
            :disabled="!isValid"
          >Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    isValid() {
      return this.username !== '' && this.password !== '';
    }
  },
  methods: {
    login() {
      if (this.isValid) {
        // Add your login logic here
        console.log('Logging in with', this.username, this.password);
      } else {
        console.log('Form is not valid');
      }
    }
  }
}
</script>

<style>
/* Add custom styles here if needed */
</style>
