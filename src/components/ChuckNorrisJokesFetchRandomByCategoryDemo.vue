<script setup lang="ts">
import { getRandomChuckNorrisJokeByCategory } from "@/services/our-backend/get-random-chuck-norris-joke-by-category.service";
import { getChuckNorrisJokesCategories } from "@/services/our-backend/get-chuck-norris-jokes-categories.service";
import { ref, defineProps, onMounted } from "vue";

const props = defineProps<{
  apiKey: string;
}>();

const data = ref<Object | null>();
const categories = ref<string[] | null>(null);
const selectedCategory = ref<string | null>(null);

const fetchData = async () => {
  if (selectedCategory.value === null) return;
  const response = await getRandomChuckNorrisJokeByCategory(
    props.apiKey,
    selectedCategory.value
  );
  data.value = response;
};

onMounted(async () => {
  categories.value = await getChuckNorrisJokesCategories();
});
</script>

<template>
  <v-card
    title="Random joke by category"
    subtitle="/chuck-norris-jokes/random?category={category}"
  >
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6">
          <v-btn
            color="primary"
            :disabled="!selectedCategory"
            @click="fetchData"
          >
            Fetch Data
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6" v-if="categories">
          <v-select
            v-model="selectedCategory"
            label="category"
            :items="categories"
          />
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
