<script setup lang="ts">
import { getRandomChuckNorrisJoke } from "@/services/our-backend/get-random-chuck-norris-joke.service";
import { ref, defineProps } from "vue";

const props = defineProps<{
  apiKey: string;
}>();

const data = ref<Object | null>();

const fetchData = async () => {
  const response = await getRandomChuckNorrisJoke(props.apiKey);
  data.value = response;
};
</script>

<template>
  <v-card title="Random joke" subtitle="/chuck-norris-jokes/random">
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-btn color="primary" @click="fetchData">Fetch Data</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <pre class="code">{{ data }}</pre>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.code {
  overflow-x: auto;
}
</style>
