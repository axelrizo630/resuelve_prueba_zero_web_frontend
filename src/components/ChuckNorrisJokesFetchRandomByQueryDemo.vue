<script setup lang="ts">
import { getRandomChuckNorrisJokeByQuery } from "@/services/our-backend/get-random-chuck-norris-joke-by-query.service";
import { ref, defineProps } from "vue";

const props = defineProps<{
  apiKey: string;
}>();

const data = ref<Object | null>();
const query = ref<string | null>(null);

const fetchData = async () => {
  if (query.value === null) return;
  const response = await getRandomChuckNorrisJokeByQuery(
    props.apiKey,
    query.value
  );
  data.value = response;
};
</script>

<template>
  <v-card
    title="Random joke by query"
    subtitle="/chuck-norris-jokes/random?query={query}"
  >
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6">
          <v-btn color="primary" :disabled="!query" @click="fetchData">
            Fetch Data
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="query" label="Label" />
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
