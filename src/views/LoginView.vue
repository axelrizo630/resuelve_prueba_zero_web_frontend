<script setup lang="ts">
import { ref, onMounted, inject } from "vue";
import { useRouter } from "vue-router";
import { login } from "@/services/our-backend/login.service";
import { register } from "@/services/our-backend/register.service";

const { showSnackbar } = inject("snackBarProvider") as {
  showSnackbar: (messageText: string) => void;
};
// const showSnackbar = (string: string) => {};

const router = useRouter();

const username = ref("");
const password = ref("");

const handleLoginButton = async () => {
  try {
    const data = await login(username.value, password.value);
    localStorage.setItem("token", data.token);
    router.push({ name: "ChuckNorrisJokes" });
  } catch (error) {
    showSnackbar("there was a problem with your login");
  }
};

const handleRegisterButton = async () => {
  try {
    const data = await register(username.value, password.value);
    localStorage.setItem("token", data.token);
    router.push({ name: "ChuckNorrisJokes" });
  } catch (error) {
    showSnackbar("there was a problem with your register");
  }
};

onMounted(() => {
  if (localStorage.getItem("token")) {
    router.push({ name: "ChuckNorrisJokes" });
  }
});
</script>
<template>
  <v-container fluid>
    <v-row justify="center" align-content="center" class="h-screen">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Auth</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="">
              <v-text-field
                v-model="username"
                label="Username"
                type="text"
                required
              />
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              />
              <v-btn
                type="submit"
                color="primary"
                @click="handleLoginButton"
                class="mb-3"
                block
              >
                Login
              </v-btn>
              <v-btn
                type="submit"
                color="primary"
                @click="handleRegisterButton"
                block
              >
                Register
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
