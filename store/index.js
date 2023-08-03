export const state = () => ({
  // single recipe
  recipe: null,
  recipeError: "",
  // recipes
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
  setRecipesError(state, value) {
    state.recipesError = value;
  },
  resetRecipesError(state) {
    state.recipesError = "";
  },
  // single recipe
  setRecipe(state, data) {
    state.recipe = data;
  },
  resetRecipe(state) {
    state.recipe = null;
  },
  setRecipeError(state, value) {
    state.recipeError = value;
  },
  resetRecipeError(state, value) {
    state.recipeError = value;
  },
};

export const actions = {
  async getRecipes({ state, commit }) {
    await this.$axios
      .$get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${
          state.recipeTitle
        }&key=${"78c0e77f-8730-4744-a8da-e0cf2fd03494"}`
      )
      .then((res) => {
        commit("setRecipes", res.data.recipes);
        commit("resetRecipesError");
      })
      .catch((error) => {
        commit("resetRecipes");
        commit("setRecipesError", error.response.data.error);
      });
  },
  updateRecipeTitle({ commit }, value) {
    commit("updateRecipeTitle", value);
  },
  async getRecipe({ commit }, id) {
    await this.$axios
      .$get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      .then((res) => {
        commit("setRecipe", res.data.recipe);
        commit("resetRecipeError");
      })
      .catch((error) => {
        commit("setRecipeError", error.response.data.error);
      });
  },
};

export const getters = {
  allRecipes(state) {
    return state.recipes;
  },
  getRecipe(state) {
    return state.recipe;
  },
};
