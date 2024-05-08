<script>
import { Loader } from "@googlemaps/js-api-loader";

export default {
  data() {
    return {
      map: null,
      autocomplete: null,
      googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.731474825094!2d73.1692669!3d20.6636047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be095c4a3d7408b%3A0xeb5be12d44e8b41!2sM579%2BCJQ%2C%20Panikhadak%2C%20Gujarat%20396060!5e0!3m2!1sen!2sin!4v1625017431461!5m2!1sen!2sin",
    };
  },
  mounted() {
    const loader = new Loader({
      apiKey: "AIzaSyC_SMz48WZ4whiJPfskMvU-gMCVUKDVD8o",
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      this.map = new google.maps.Map(this.$refs.mapContainer, {
        center: { lat: 37.7749, lng: -122.4194 }, // Default center coordinates (San Francisco)
        zoom: 12, // Default zoom level
      });

      this.autocomplete = new google.maps.places.Autocomplete(this.$refs.searchInput, {
        types: ["geocode"], // Limit to geographical addresses (like pincode)
      });

      // Listen for place changes in the autocomplete input
      this.autocomplete.addListener("place_changed", this.onPlaceChanged);
    });
  },
  methods: {
    onPlaceChanged() {
      const place = this.autocomplete.getPlace();
      if (!place.geometry) {
        return; // No geometry available for the place
      }

      // Center the map on the selected place
      this.map.setCenter(place.geometry.location);
      this.map.setZoom(15); // Adjust zoom level as needed

      // Example: Add a marker for the selected place
      const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: this.map,
        title: place.name,
      });
    },
    searchLocation() {
      // Trigger place search when the button is clicked
      this.autocomplete.search();
    },
  },
};
</script>
<template>
 <v-card>
    <v-container>
      <!-- Header -->
      <v-row>
        <v-col cols="12">
          <h1 style="color: white;">
            <v-icon color="primary" style="padding-right: 1pc;">mdi-map</v-icon>
            Google Maps
          </h1>
        </v-col>
      </v-row>

      <!-- Tool Cards -->
      <v-card elevation="3">

        <v-card-text>
          <iframe
            width="100%"
            height="800"
            frameborder="0"
            style="border: 0"
            :src="googleMapsUrl"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </v-card-text>
      </v-card>

      <!-- Additional content or dialogs -->
      <v-card height="200"></v-card>
    </v-container>
  </v-card>
  <v-card height="200"></v-card>
  <v-card height="200"></v-card>

</template>

<style scope>

</style>
