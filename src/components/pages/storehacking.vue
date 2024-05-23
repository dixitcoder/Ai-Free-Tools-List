<template>
  <v-app>
    <v-container>
      <v-row>
        <v-card  xs12 md8>
          <ProductList :products="products" @add-to-cart="addToCart"></ProductList>
        </v-card>
        <v-col xs12 md4>
          <!-- <ShoppingCart
            :cart="cart"
            @remove-from-cart="removeItemFromCart"
          ></ShoppingCart> -->
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import ProductList from "@/components/pages/storehacking/ProductList.vue";
// import ShoppingCart from "@/components/pages/storehacking/ShoppingCart.vue";
import {db} from '@/services/firebaseauth'
import { onSnapshot , collection } from "firebase/firestore";
export default {
  components: {
    ProductList,
    // ShoppingCart,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {

    const toolsCollectionRef = collection(db, 'store'); // Change 'book' to your collection name
    onSnapshot(toolsCollectionRef, (snapshot) => {
      const tools = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      this.products = tools // Update the items array with fetched data
    });
  },
  methods: {
    user() {
      this.cartuser = !this.cartuser;
    },
    addToCart(product) {
      this.cart.push(product);
    },
    removeItemFromCart(itemId) {
      this.cart = this.cart.filter((item) => item.id !== itemId); // Remove 1 item at the found index
      console.log(this.cart);
    },
  },
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>
