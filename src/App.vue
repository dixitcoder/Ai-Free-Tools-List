<template>
  <router-view></router-view>
  
  <div v-if="check" >
    <VBtn
      color="error"
      class="product-upgrade-to-pro"
      target="_self"
      rel="noopener noreferrer"
    >
      <v-icon style="font-size:1.5pc" class="fa-regular fa-pen-to-square">mdi-message</v-icon>

      <VMenu
        open-on-hover
        activator="parent"
        offset="15"
        max-width="400px"
        :close-on-content-click="true"
        transition="slide-y-reverse-transition"
      >
      <VCard>
  <VCardTitle>Welcome to AI Tools List:</VCardTitle>
  <VCardText>
    Explore our collection of AI tools designed to assist you in various tasks. From machine learning algorithms to data visualization tools, we've got you covered!
  </VCardText>
  <VCardText>
    Click on the buttons below to learn more about each tool or to add a new tool to our list.
  </VCardText>
</VCard>

      </VMenu>
    </VBtn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: this.$store.state.users,
    };
  },
  computed: {
    check() {
      // Check if the current route is not the login page
      return this.$route.path !== '/login';
    },
  },
  mounted() {
    console.log(this.check);
  },
};
</script>

<style lang="scss" scoped>
.product-upgrade-to-pro {
  position: fixed;
  z-index: 999;
  inset-block-end: 5%;
  inset-inline-end: 79px;

  .v-application &.v-btn.v-btn--elevated {
    box-shadow: 0 1px 20px 1px rgb(var(--v-theme-error)) !important;

    &:hover {
      box-shadow: none !important;
    }
  }
}
</style>
