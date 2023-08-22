import Vue from "vue";

export const state = () => ({
  // app
  loading: false,
  recipeLoading: false,
  // single recipe
  recipe: null,
  recipeError: "",
  // recipes
  recipes: [],
  recipeTitle: "",
  recipesError: "",
  // bookmarks
  bookmarks: [],
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
  setLoading(state, value) {
    state.loading = value;
  },
  setRecipeLoading(state, value) {
    state.recipeLoading = value;
  },
  addBookmark(state, data) {
    const bookmarks = state.bookmarks;
    bookmarks.unshift(data);
    Vue.set(state, "bookmarks", bookmarks);
  },
  setBookmarks(state, list) {
    state.bookmarks = list;
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
        if (state.recipes.length) {
          // OK, pass
          commit("resetRecipesError");
        } else {
          commit(
            "setRecipesError",
            "No recipes found for your query! Please try again ;)"
          );
        }
        commit("setLoading", false);
      })
      .catch((error) => {
        commit("resetRecipes");
        commit("setLoading", false);
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
        commit("setRecipeLoading", false);
        commit("setRecipe", res.data.recipe);
        commit("resetRecipeError");
      })
      .catch((error) => {
        commit("setRecipeLoading", false);
        commit("setRecipeError", error.response.data.error);
      });
  },
  addBookmark({ state, commit }, recipeData) {
    const identifiedRecipe = state.bookmarks.find(
      (recipe) => recipe.id === recipeData.id
    );

    if (!identifiedRecipe) {
      const bookmarkData = {
        id: recipeData.id,
        image: recipeData.image_url,
        title: recipeData.title,
        publisher: recipeData.publisher,
      };

      commit("addBookmark", bookmarkData);

      localStorage.setItem(
        "Forkify_Bookmarks",
        JSON.stringify(state.bookmarks)
      );
    }
  },
  getBookmarks({ commit }) {
    const bookmarks = localStorage.getItem("Forkify_Bookmarks");
    if (bookmarks) {
      commit("setBookmarks", JSON.parse(bookmarks));
    } else {
      commit("setBookmarks", []);
      localStorage.setItem("Forkify_Bookmarks", JSON.stringify([]));
    }
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
