export const state = () => ({
  recipes: [],
  recipeTitle: "",
});

export const mutations = {
  setRecipes(state, recipes) {
    state.recipes = recipes;
  },
  updateRecipeTitle(state, value) {
    state.recipeTitle = value;
  },
};

export const actions = {
  async getRecipes({ state, commit }) {
    await this.$axios
      .$get(
        `https://forkify-api.herokuapp.com/api/search?q=${state.recipeTitle}`
      )
      .then((res) => commit("setRecipes", res.recipes))
      .catch((error) => {
        throw error;
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
