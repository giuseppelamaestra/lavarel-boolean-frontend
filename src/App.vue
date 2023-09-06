<script>
import AppHeader from "./components/partials/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<template>
  <div class="container">
    <AppHeader />
    <main>
      <router-view> </router-view>
    </main>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/partials/general.scss";
</style>
