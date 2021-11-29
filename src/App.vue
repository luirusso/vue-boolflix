<template>
    <div id="app">
        <Header @search="performSearch" @trigger="getMovies" />

        <Main :moviesArray="moviesList" />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import axios from "axios";

export default {
    name: "App",
    components: {
        Header,
        Main,
    },
    data() {
        return {
            inputSearch: "",
            moviesList: [],
        };
    },
    methods: {
        getMovies() {
            /**
             * Get movies list from api
             */
            axios
                .get("https://api.themoviedb.org/3/search/movie", {
                    params: {
                        api_key: "56dd66302a0e2a5c6c9bbd2082ac8c6d",
                        query: this.inputSearch,
                        language: "it-IT",
                    },
                })
                .then((result) => {
                    console.log(result.data);
                    this.moviesList = result.data.results;
                })
                .catch((error) => console.log(error));
        },
        performSearch(text) {
            console.log(text);
            this.inputSearch = text;
        },
    },
};
</script>

<style lang="scss"></style>
