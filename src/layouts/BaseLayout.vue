<script setup lang="ts">
import ThePrincipalUserSidebar from "@/components/ThePrincipalUserSidebar.vue";
</script>

<template>
  <v-app>
    <!-- <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link> -->
    <v-container class="pa-0">
      <v-row>
        <v-col
          cols="2"
          :style="{ minWidth: '88px' }"
          class="flex-grow-0 flex-shrink-0 sidebar"
        >
          <ThePrincipalUserSidebar />
        </v-col>
        <v-col class="flex-grow-1">
          <router-view></router-view>
        </v-col>
        <v-col cols="2" class="flex-grow-0 flex-shrink-1 sidebar">
          <v-sheet class="ma-2 pa-2">
            I'm 5 column wide and I shrink if there's not enough space
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.sidebar {
  position: sticky;
  top: 0;
}
</style>
