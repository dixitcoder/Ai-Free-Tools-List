<template>
<v-container class="grey lighten-5">
  <v-row>
    <v-col>
      <v-hover v-slot:default="{ hover }">
        <v-card :class="{ 'on-hover': hover }">
          <v-card-title>Shopping Cart</v-card-title>
          <v-card-subtitle   v-if="cart.length > 0">Total: $ <span style="color:white;font-style:italic"> {{ totalPrice.toFixed(2) }} </span></v-card-subtitle>
          <v-card-text>
            <v-list v-if="cart.length > 0">
              <v-list-item v-for="(item) in cart" :key="item">
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <img :src="item.thumbnail" :alt="item">
                  <v-list-item-subtitle>$ {{ item.price.toFixed(2) }} </v-list-item-subtitle>
                </v-list-item-content>
<br>
                <v-list-item-action><br>
<v-card theme="light" width="100" class="btn">
              <v-btn icon color="primary" @click="removeFromCart(item.id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-card>
                </v-list-item-action><br>
                <v-divider
  :thickness="11"
  class="border-opacity-75"
  color="info"
></v-divider>
              </v-list-item>

            </v-list>
            <p v-else>No items in the cart</p>
            <v-divider></v-divider>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    }
  },
  methods: {
    removeFromCart(itemId) {
      // alert("notworkid"+itemId);
    this.$emit('remove-from-cart', itemId);
  }
  }
};
</script>

<style scoped>
.on-hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 0.3s ease;
}
/* Add custom styles if needed */
</style>
