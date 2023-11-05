<script setup lang="ts">
import { ref, provide } from "vue";

const text = ref<string | null>(null);
const snackbar = ref<boolean>(false);

const showSnackbar = (messageText: string) => {
  snackbar.value = true;
  text.value = messageText;
};

provide("snackBarProvider", { showSnackbar });
</script>

<template>
  <slot />
  <v-snackbar v-model="snackbar" :timeout="3000">
    {{ text }}
    <template v-slot:actions>
      <v-btn color="blue" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
