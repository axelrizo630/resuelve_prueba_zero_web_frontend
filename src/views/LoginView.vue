<script setup lang="ts">
import { ref } from "vue";
import { login } from "@/services/our-backend/login.service";
import { register } from "@/services/our-backend/register.service";

const username = ref("");
const password = ref("");

const handleLoginButton = async () => {
  const data = await login(username.value, password.value);
  console.log("handleLoginButton  data", data);
};

const handleRegisterButton = async () => {
  const data = await register(username.value, password.value);
  console.log("handleRegisterButton  data", data);
};
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
