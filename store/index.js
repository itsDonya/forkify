export const state = () => ({
  recipes: [],
  recipeTitle: "",
  recipesError: "",
});

export const mutations = {
  setRecipes(state, recipes) {
    state.recipes = recipes;
  },
  resetRecipes(state) {
    state.recipes = [];
  },
  updateRecipeTitle(state, value) {
    state.recipeTitle = value;
  },
  setError(state, value) {
    state.recipesError = value;
  },
  resetError(state) {
    state.recipesError = "";
  },
};

export const actions = {
  async getRecipes({ state, commit }) {
    await this.$axios
      .$get(
        `https://forkify-api.herokuapp.com/api/search?q=${state.recipeTitle}`
      )
      .then((res) => {
        commit("setRecipes", res.recipes);
        commit("resetError");
      })
      .catch((error) => {
        commit("resetRecipes");
        commit("setError", error.response.data.error);
      });
  },
  updateRecipeTitle({ commit }, value) {
    commit("updateRecipeTitle", value);
  },
};

export const getters = {
  allRecipes(state) {
    return state.recipes;
  },
};
