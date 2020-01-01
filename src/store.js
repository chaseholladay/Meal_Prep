import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [],
        apiUrl: 'https://api.edamam.com/serach'
    },
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        }
    },
    actions: {
        async getRecipes({ state, commit }, plan) {
            try {
                let response = await axios.get('${state.apiUrl}', {
                        params: {
                            q: plan,
                            app_id: 'c8715a3b',
                            app_key: 'ac61d6c6a1ffbda5d0ece82ca92bf427',
                            from: 0,
                            to: 9
                        }
                });
                commit('setRecipes', respose.data.hits);
            } catch (error) {
                commit('setRecipes', []);
            }
            }
        }
    });


