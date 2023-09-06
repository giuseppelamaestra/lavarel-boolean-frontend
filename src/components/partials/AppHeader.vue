<script>
export default {
  name: "AppHeader",
  data() {
    return {
      links: [
        {
          route: "CocktailsList",
          name: "CocktailsList",
        },
        {
          route: "AppAbout",
          name: "AppAbout",
        },
        {
          route: "AppContacts",
          name: "AppContacts",
        },
      ],
    };
  },
};
</script>

<template>
  <nav>
    <div class="logo">BUSKER'S BROWN</div>
    <div>
      <ul>
        <li v-for="link in links">
          <router-link :to="{ name: link.route }">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss"></style>
