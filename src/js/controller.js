import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js'
import {async} from 'regenerator-runtime';
import RecipeView from './views/recipeView.js';
import recipeView from './views/recipeView.js';
import SearchView from './views/searchView.js';
import ResultsView from './views/resultsView'; 
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';

const controlRecipes = async function (e) {
  try {
    const id = window.location.hash.slice(1)
    if (!id) return;
    RecipeView.renderSpinner()
    await model.loadRecipe(id)

    RecipeView.render(model.state.recipe)

  } catch (err) {
    recipeView.renderError(err)
  }
}

const controlSearchResults = async function () {
  try {
    ResultsView.renderSpinner()
    const query = SearchView.getQuery()
    SearchView.clearInput()

    if(!query) return
    await model.loadSearchResults(query)

    resultsView.render(model.getSearchResultsPage(1))
    paginationView.render(model.state.search)

  } catch (err) {
    ResultsView.renderError(err)
  }
}

const init = function () {
  recipeView.addHandlerRender(controlRecipes)
  SearchView.addHandlerSearch(controlSearchResults)
}
init();