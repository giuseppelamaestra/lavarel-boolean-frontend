<script>
import axios from "axios";

export default {
  name: "CocktailsList",
  data() {
    return {
      cocktailsList: [],
      apiUrl: "http://localhost:8000/api/cocktails",
    };
  },

  methods: {
    getCocktails() {
      axios
        .get(`${this.apiUrl}`)
        .then((response) => {
          console.log(response.data.data);
          this.cocktailsList = response.data.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },

  created() {
    this.getCocktails();
  },
};
</script>
<template>
  <div>
    <h3>COCKTAILS LIST:</h3>

    <div class="mycontainer py-5 cocktails">
      <div v-for="cocktail in cocktailsList" class="singlecocktail">
        <div>
          <h3>{{ cocktail.name }}</h3>
          <h5>{{ cocktail.price }} £</h5>
          <p>
            {{ cocktail.ingredients }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
