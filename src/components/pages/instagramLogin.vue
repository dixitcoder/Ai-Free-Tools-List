<template>
  <div>
    <div>
      <ul>
        <li v-for="item in collection" :key="item.id || item._id">
          {{ item.name }}
          <!-- If item has a products array, display the 6th product -->
          <ul v-if="item.products">
            <li v-for="product in item.products" :key="product.id || product._id">
              <div v-if="product">
                <img :src="product.thumbnail" alt="">
                <!-- <span>{{ product }}</span> -->
                <div v-for="hacker in product.images" :key="hacker">
                  <ol>
                    <li>
                      <img :src="hacker" alt="">
                    </li>
                  </ol>
                </div>
                {{ product.category }}||<br>
                {{ product.brand }}||<br>
                {{ product.stock }}||<br>
                {{ product.rating }}||<br>
                {{ product.discountPercentage }}||<br>
                {{ product.description }}||<br>
                {{ product.price }}||<br>
                {{ product.title }}|| <br>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div :style="{ left: mouseX + 'px', top: mouseY + 'px' }">
        <br />
        <h2 style="font-style: italic">
          <center>
            <v-icon>mdi-instagram</v-icon>
            Instagram
          </center>
        </h2>
        <v-conte style="padding: 1pc" class="d-flex">
          <v-text-field v-model="username" label="username" :rules="rules"></v-text-field>
        </v-conte>
        <v-conte style="padding: 1pc" class="d-flex">
          <v-text-field v-model="password" label="password" :rules="rules"></v-text-field>
        </v-conte>
        <v-conte style="padding: 2pc" class="d-flex">
          <v-btn @click="loginWithInstagram" color="primary">Login</v-btn>
          <!-- <v-btn @click="apitest" color="primary">API</v-btn> -->
        </v-conte>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      collection: [],
      rules: [],
    };
  },
  methods: {
    loginWithInstagram() {
      const clientId = '17841465746493825';
      const redirectUri = '/home';
      const scope = 'basic';

      const authUrl = `https://api.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;

      window.location.href = authUrl;
    },
    async apitest() {
      const data = await fetch('http://10.10.10.9:4000/');
      const test = await data.json();
      this.collection = test;
      console.log(this.collection);
    },
  },
};
</script>

<style></style>
