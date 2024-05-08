<template>
  <v-card style="padding:5pc">
  <v-container fluid>
    <!-- Header -->
    <v-row align="center">
      <v-col cols="12">
        <v-toolbar dense>
          <v-toolbar-title class="text-h5">About Us</v-toolbar-title>
        </v-toolbar>
      </v-col>
    </v-row>

    <!-- Main Content -->
    <v-row justify="center" align="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-text>
            <h2 class="text-h6 mb-4">Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat ante et orci accumsan,
              at eleifend erat feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <h2 class="text-h6 mt-6 mb-4">Our Team</h2>
            <p>
              Meet our dedicated team of professionals who are passionate about delivering top-notch services to our clients.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Footer -->
    <v-row justify="center" align="center" class="mt-6">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-text>
            <div class="text-center">
              <h3 style="color:white" class="mb-4">Follow Us</h3>
              <v-btn
                icon
                href="https://twitter.com/dixitcoder"
                target="_blank"
              >
                <v-icon size="24">mdi-twitter</v-icon>
              </v-btn>
              <v-btn
                icon
                href="https://github.com/dixitcoder"
                target="_blank"
              >
                <v-icon size="24">mdi-github</v-icon>
              </v-btn>
              <v-btn
                icon
                href="https://instagram.com/dixitcoder"
                target="_blank"
              >
                <v-icon size="24">mdi-instagram</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-card>
<v-card style="padding:10pc"></v-card>
</template>

<script>
export default {
  // Add script logic if needed
};
</script>

<style>
/* Add your custom styles here */
</style>
