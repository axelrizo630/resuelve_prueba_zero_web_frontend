<script lang="ts" setup>
import { ref } from "vue";
import { getCompoundInterest } from "@/services/our-backend/get-compoud-interest.service.ts";
import { computed } from "vue";

const principal = ref(0);
const annualRate = ref(0);
const periods = ref(0);
const result = ref<null | number>(null);

const handleClickCalculateButton = async () => {
  const data = await getCompoundInterest(
    principal.value,
    annualRate.value,
    periods.value
  );
  result.value = data.monto_total;
};

const formattedResult = computed(() => {
  if (result.value === null) return null;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(result.value);
});
</script>

<template>
  <div>
    <h1>Compound Interest Calculator</h1>
    <v-form class="mt-5">
      <v-text-field
        type="number"
        v-model.number="principal"
        label="Principal"
      />
      <v-text-field
        type="number"
        v-model.number="annualRate"
        label="Annual Interest Rate"
      />
      <v-text-field
        type="number"
        v-model.number="periods"
        label="Number of Periods"
      />
      <v-btn block @click="handleClickCalculateButton" color="primary"
        >Calculate</v-btn
      >
    </v-form>
    <template v-if="result !== null">
      <h1 class="text-center mt-5">Result</h1>
      <p class="text-center">{{ formattedResult }}</p>
    </template>
  </div>
</template>
