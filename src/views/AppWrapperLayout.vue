<script setup lang="ts">
import SnackBarProvider from "@/components/SnackBarProvider.vue";
</script>
<template>
  <v-app>
    <snack-bar-provider>
      <v-container fluid><router-view></router-view></v-container>
    </snack-bar-provider>
  </v-app>
</template>
