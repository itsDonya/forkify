export const state = () => ({
  recipes: [],
});

export const mutations = {
  setRecipes(state, recipes) {
    state.recipes = recipes;
  },
};

export const actions = {
  async getRecipes({ commit }) {
    await this.$axios
      .$get("https://forkify-api.herokuapp.com/api/search?q=pizza")
      .then((res) => commit("setRecipes", res.recipes))
      .catch((error) => {
        throw error;
      });
  },
};

export const getters = {
  allRecipes(state) {
    return state.recipes;
  },
};
