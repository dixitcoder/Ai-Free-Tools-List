<script>
import router from "../../router/index";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      maxLength: 100, // Maximum length for displaying text
      dialog: false,
      selectedTool: {},
      coder:'',
      Name: "",
      deprecations: "",
      searchQuery: "",
      dialoghack: '',
      items:['Note-taking',
'Content',
'Image Design',
'Image Design',
'Video Design',
'Web Design',
'Customer Service',
'Content',
'Video Design',
'Data Analysis',
'Customer Service',
'Image Design',
'Machine Learning',
'Coding',
'Transcribing',
'Content',
'Content',
'Chatbot',
'Automation',
'Content',
'Content',
'Automation',
'Data Analysis',
'Academic',
'Machine Learning',
'Content',
'Human Resources',
'Legal',
'Legal',
'Audio',
'Content',
'Human Resources',
'Content',
'Image Design',
'Image Design',
'Presentations',
'Storytelling',
'Customer Service',
'Copywriting',
'Audio',
'Coding',
'SEO',
'Transcribing',
'Content',
'Content',
'Content',
'Content',
'Data Analysis',
'Customer Service',
'User Personas',
'Healthcare',
'Image Design',
'Video Design',
'Career',
'Accessibility',
'Automation',
'Video Design',
'Machine Learning',
'Legal',
'Transcribing',
'Academic',
'Content',
'Email',
'Finance',
'Customer Service',
'Legal',
'Content',
'Content',
'Transcribing',
'Entertainment',
'User Personas',
'Machine Learning',
'Human Resources',
'Career',
'Copywriting',
'Content',
'Audio',
'Content',
'Video Design',
'A deep learning platform that automates model creation and deployment for businesses to leverage AI.',
'Entertainment',
'',
'Customer Service',
'Machine Learning',
'Image Design',
'Chatbot',
'Security',
'Content',
'Customer Service',
'Content',
'Content',
'Coding',
'Machine Learning',
'Video Design',
'Image Design',
'Audio',
'Copywriting',
'Translation',
'Transcribing',
'Transcribing',
'Video Design',
'Sales',
'Data Analysis',
'Copywriting',
'Coding',
'Image Design',
'Search Engine',
'Customer Service',
'Image Design',
'Customer Service',
'Web Design',
'Web Design',
'Content',
'Image Design',
'Academic',
'Machine Learning',
'SEO',
'Image Design',
'Video Design',
'Coding',
'Copywriting',
'Customer Service',
'Image Design',
'Human Resources',
'Customer Service',
'Content',
'Storytelling',
'Image Design',
'Presentations',
'Search Engine',
'Image Design',
'Audio',
'Entertainment',
'Content',
'Content',
'Sales',
'Healthcare',
'Finance',
'Sales',
'Image Design',
'Chatbot',
'Whiteboard',
'Transcribing',
'Content',
'Note-taking',
'Content',
'Coding',
'Audio',
'Customer Service',
'Note-taking',
'Audio',
'Image Design',
'Video Design',
'Content',
'Customer Service',
'Image Design',
'Data Analysis',
'Image Design',
'Content',
'Copywriting',
'Note-taking',
'Sales',
'Chatbot',
'Image Design',
'Sales',
'Document Creation',
'Email',
'Entertainment',
'Transcribing',
'Data Analysis',
'Search Engine',
'User Personas',
'Content',
'Image Design',
'Machine Learning',
'Finance',
'',
'Coding',
'Image Design',
'Storytelling',
'Content',
'Sales',
'Content',
'Content',
'Forms',
'Copywriting',
'Content',
'Automation',
'Document Creation',
'Image Design',
'Audio',
'Machine Learning',
'Chatbot',
'Content',
'Translation',
'Security',
'Career',
'Image Design',
'Customer Service',
'Academic',
'Security',
'Email',
'Transcribing',
'Transcribing',
'Transcribing',
'Content',
'Video Design',
'Email',
'Content',
'Chatbot',
'Content',
'Content',
'SEO',
'Search Engine',
'Video Design',
'Image Design',
'Content',
'Image Design',
'SEO',
'Copywriting',
'Image Design',
'Content',
'Image Design',
'Customer Service',
'Accessibility',
'Customer Service',
'Automation',
'Machine Learning',
'Learning Management System',
'Human Resources',
'Automation',
'Image Design',
'Copywriting',
'Sales',
'Search Engine',
'Coding',
'User Personas',
'Copywriting',
'Video Design',
'Coding',
'Data Analysis',
'Content',
'Content',
'Sales',
'Document Creation',
'Data Analysis',
'Content',
'Image Design',
'Note-taking',
'Document Creation',
'Coding',
'Image Design',
'Search Engine',
'Content',
'Search Engine',
'Academic',
'Healthcare',
'Content',
'Sales',
'Security',
'Data Analysis',
'Transcribing',
'Search Engine',
'SEO',
'Human Resources',
'Audio',
'Copywriting',
'Image Design',
'Data Analysis',
'Fonts',
'SEO',
'Security',
'Career',
'Content',
'Chatbot',
'Human Resources',
'Automation',
'Transcribing',
'Audio',
'Copywriting',
'Automation',
'Data Analysis',
'Audio',]
    };
  },
  computed: {
    ...mapState(["tools"]),
    filteredItems() {
      return this.tools.filter((patient) =>
        `${patient.Name} ${patient.Category}}`
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())
      );
    },
  },
  mounted() {
    this.removeDuplicates()
  },
  methods: {
    removeDuplicates() {
      // Use Set to remove duplicates
      this.uniqueItems = [...new Set(this.items)];
    },
    ...mapActions(["fetchTools", "deleteTool"]),
    async fetchData() {
      await this.fetchTools(); // Dispatch the fetchTools action
    },
    newpage(toolpage) {
      router.push(`/aiInfo/${toolpage}`);
    },
    getLimitedText(text) {
      if (text.length <= this.maxLength) {
        return text;
      } else {
        return `${text.slice(0, this.maxLength)}...`;
      }
    },
    openDialog(name, info) {
      this.Name = name;
      this.deprecations = info;
      this.dialog = true;
    },
  },
};
</script>

<template>
  <div>
    <v-container>
      <!-- Header -->
      <v-row>
        <v-col style="padding: 5pc" cols="20">
          <h1 style="color: white">
            <v-icon color="primary" style="padding-right: 1pc; color: primary"
              >mdi-robot</v-icon
            >Ai Free Tools List
          </h1>
        </v-col>
      </v-row>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark dark">
          <div class="container-fluid">
            <a style="color: white" class="navbar-brand" href="#">
              <v-icon color="red">mdi-heart</v-icon>
              AI Tools {{ tools.length }}
            </a>

            <!-- Add the v-text-field for filtering -->
            <v-text-field
              v-model="searchQuery"
              color="success"
              append-inner-icon="mdi-user"
              auto-select-first
              class="flex-full-width"
              density="comfortable"
              item-props
              menu-icon=""
              placeholder="Search Google or type a URL"
              prepend-inner-icon="mdi-filter"
              rounded
              theme="light"
              variant="solo"
            ></v-text-field>

            <!-- Display filtered items -->
            <v-list>
           <div class="pa-4 text-center">
    <v-dialog
      width="auto"
      scrollable
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          color="primary"
          prepend-icon="mdi-filter"
          text="Select Category"
          variant="outlined"
          v-bind="activatorProps"
        ></v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card
          prepend-icon="mdi-filter"
          title="Select Filter"
        >
          <v-divider class="mt-3"></v-divider>

          <v-card-text class="px-4" style="height: 300px;">
            <v-radio-group
              v-model="searchQuery"
              messages="Select a Country from the radio group"
              column
            >
            <v-select
            v-model="searchQuery"
  label="Select"
  :items="items"
  variant="solo-filled"
></v-select>



            </v-radio-group>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn
              text="Close"
              @click="isActive.value = false"
            ></v-btn>

            <v-spacer></v-spacer>

            <v-btn
              color="surface-variant"
              text="Save"
              variant="flat"
              @click="isActive.value = false"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
            </v-list>

            <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->

            <v-card-text
              >Listing show ai tools free refresh click
              <v-btn color="primary" @click="fetchData()">
                <v-icon>mdi-refresh</v-icon></v-btn
              >
            </v-card-text>

          </div>
        </nav>
      </div>
      <v-card loading text="" variant=""></v-card>

      <!-- Tool Cards -->

      <v-row>
        <v-col v-for="(tool, index) in filteredItems" :key="index" cols="16" md="4" >
          <v-card
          :class="[
              index % 1 === 0 ? 'py-2' : index % 5 === 0 ? 'py-8' : 'py-4',
              index % 2 === 0 ? 'bg-grey-lighten-2' : index % 1 === 0 ? 'bg-slow' : '',
              'px-2', // Added class for styling
            ]"
            max-width="600"
            style=""
          >
            <v-icon color="green" style="padding-left: 2pc">mdi-robot</v-icon>
            <v-icon color="info" style="padding-left: 0pc">mdi-robot</v-icon>
            <v-card-title>{{ tool.Name }}</v-card-title>
            <!-- Show limited text with "Show More" option -->
            <v-card-text>{{ getLimitedText(tool.description) }}</v-card-text>
            <v-card-actions>
              <a :href="tool.link" target="_blank">
                <v-btn
                :class="[
              index % 1 === 0 ? 'py-2' : index % 5 === 0 ? 'py-8' : 'py-4',
              index % 2 === 0 ? 'bg-grey-lighten-2' : index % 1 === 0 ? 'bg-slow' : '',
              'px-2', // Added class for styling
            ]"
                 variant="outlined" color="primary">Link</v-btn>
              </a>


              <v-chip
                @click="openDialog(tool.Name, tool.description)"
      append-icon="mdi-information"
      class="ma-2"
      color="orange"
    >
      Description
    </v-chip>

    <v-chip

      append-icon=""
      class="ma-5"
      color="success"
    >
      {{tool.Category}}
    </v-chip>

              <!-- <v-card-actions>
                <v-spacer></v-spacer>

                <v-speed-dial location="right top" transition="fade-transition">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-fab v-bind="activatorProps" size="small" icon="mdi-book"></v-fab>
                  </template>

                  <v-btn color="dark" style="font-style: italic; font-size: x-small">{{
                    tool.Category
                  }}</v-btn>
                </v-speed-dial>
              </v-card-actions> -->
              <!-- <v-card-actions style="padding-left: 7pc">
                <v-spacer></v-spacer>

                <v-speed-dial location="left center" transition="fade-transition">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-fab v-bind="activatorProps" size="small" icon="mdi-share"></v-fab>
                  </template>

                  <v-btn
                    key="3"
                    :href="tool.link"
                    icon="mdi-whatsapp"
                    target="_blank"
                    color="link"
                  ></v-btn>
                  <v-btn
                    key="3"
                    @click="newpage(tool.id)"
                    icon="mdi-logout"
                    target="_blank"
                    color="link"
                  ></v-btn>
                </v-speed-dial>

                <!-- <v-btn

                color="medium-emphasis"
                icon="mdi-share-variant"
                size=""
              ></v-btn> -->
              <!-- </v-card-actions> -->
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Dialog for more information -->
      <v-dialog v-model="dialog" max-width="600">
        <v-card>
          <v-card-title>{{ Name }}</v-card-title>
          <v-card-text>{{ deprecations }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<style></style>
