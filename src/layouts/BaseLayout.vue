<script setup lang="ts">
import { ref } from "vue";
import { RouteLocationRaw, useRouter } from "vue-router";

const router = useRouter();

const drawer = ref(false);
const title = "My App";
const items = [
  { title: "Compound Interest Calculation", route: { name: "" } },
  { title: "Chuck Norris Jokes", route: { name: "" } },
];

const navigate = (route: RouteLocationRaw) => {
  router.push(route);
  drawer.value = false;
};

const logout = () => {
  localStorage.removeItem("token");
  router.push({ name: "Login" });
};
</script>

<template>
  <v-navigation-drawer app v-model="drawer">
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        @click="navigate(item.route)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
      <v-list-item @click="logout">Logout</v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-app-bar>

  <v-main>
    <v-container fluid>
      <router-view-view></router-view-view>
    </v-container>
  </v-main>
</template>
