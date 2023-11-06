<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
import { getMyApiKey } from "@/services/our-backend/get-my-api-key.service.ts";
import { getMyRemainingRequests } from "@/services/our-backend/get-my-remaining-requests.service.ts";
import ChuckNorrisJokesFetchRandomDemo from "@/components/ChuckNorrisJokesFetchRandomDemo.vue";
import ChuckNorrisJokesFetchRandomByCategoryDemo from "@/components/ChuckNorrisJokesFetchRandomByCategoryDemo.vue";
import ChuckNorrisJokesFetchRandomByQueryDemo from "@/components/ChuckNorrisJokesFetchRandomByQueryDemo.vue";

let refetchInterval: NodeJS.Timeout | null = null;

const apiKey = ref<string | null>(null);
const requestRemaining = ref<number | null>(null);

const refetchRequestRemaining = async () => {
  const data = await getMyRemainingRequests();
  requestRemaining.value = data ?? null;
};

onMounted(async () => {
  const data = await getMyApiKey();
  apiKey.value = data?.apiKey || null;

  refetchRequestRemaining();
  refetchInterval = setInterval(() => {
    refetchRequestRemaining();
  }, 5000);
});

onBeforeUnmount(() => {
  refetchInterval && clearInterval(refetchInterval);
});
</script>

<template>
  <h1>Chuck Norris Jokes API</h1>

  <h2 v-if="apiKey" class="text-wrap text-subtitle-2 text-md-h5">
    Your API Key: {{ apiKey }}
  </h2>
  <h2 v-else>Something happened with your API Key</h2>
  <template v-if="requestRemaining !== null">
    <p>
      You have <b>{{ requestRemaining }}</b> requests remaining.
    </p>
  </template>
  <v-container>
    <v-row>
      <v-col>
        <ChuckNorrisJokesFetchRandomDemo v-if="apiKey" :api-key="apiKey" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ChuckNorrisJokesFetchRandomByCategoryDemo
          v-if="apiKey"
          :api-key="apiKey"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ChuckNorrisJokesFetchRandomByQueryDemo
          v-if="apiKey"
          :api-key="apiKey"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
