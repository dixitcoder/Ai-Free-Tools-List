<!-- ProductList.vue -->
<template>
  <v-container>
    <h2>
      <v-btn color="primary" icon="mdi-store"></v-btn>
      Hacker Tools :
    </h2>
    <br>
    <v-row>
      <v-col
        v-for="(product, index) in products"
        :key="product.id"
        cols="8"
        md="4"
        :class="[
          index % 2 === 0 ? 'bg-grey-lighten-2' : '',
          index % 5 === 0 ? 'py-8' : index % 1 === 0 ? 'py-2' : 'py-4',
          'px-2', // Added class for styling
        ]"
      >
        <v-card width="300">
          <v-img :src="product.src" height="200px"></v-img>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>$ {{ product.price }}</v-card-subtitle>
          <v-card-text>{{ product.description }}</v-card-text>
          <v-card-actions>
            <v-btn class="btn" color="primary" @click="shopLinkitem(product.shopLink)">Shop</v-btn>
          </v-card-actions>
        </v-card>
        <br><br>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    shopLinkitem(item) {
      window.open(item, '_blank');
    }
  },
}
</script>
