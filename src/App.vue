<template>
    <div id="app">
        <Header @search="performSearch" />

        <Main
            :moviesArray="moviesList"
            :tvSeriesArray="tvSeriesList"
            :popularMoviesArray="popularMoviesList"
        />

        <Footer />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue"
import axios from "axios";

export default {
    name: "App",
    components: {
        Header,
        Main,
        Footer,
    },
    data() {
        return {
            inputSearch: "",
            moviesList: [],
            tvSeriesList: [],
            popularMoviesList: [],
        };
    },
    created() {
        this.getPopularMovies();
    },
    methods: {
        /**
         * Get current popular movies
         */
        getPopularMovies() {
            axios
                .get("https://api.themoviedb.org/3/movie/popular", {
                    params: {
                        api_key: "56dd66302a0e2a5c6c9bbd2082ac8c6d",
                        page: 1,
                        language: "it-IT",
                    },
                })

                .then((result) => {
                    this.popularMoviesList = result.data.results;
                });
        },
        performSearch(text) {
            console.log(text);
            this.inputSearch = text;

            if (this.inputSearch !== "") {
                const apiParams = {
                    api_key: "56dd66302a0e2a5c6c9bbd2082ac8c6d",
                    query: this.inputSearch,
                    language: "it-IT",
                };

                /**
                 * Get movies list from api
                 */
                axios
                    .get("https://api.themoviedb.org/3/search/movie", {
                        params: apiParams,
                    })
                    .then((result) => {
                        console.log(result.data);
                        this.moviesList = result.data.results;
                    })
                    .catch((error) => console.log(error));

                /**
                 * Get tv series list from api
                 */
                axios
                    .get("https://api.themoviedb.org/3/search/tv", {
                        params: apiParams,
                    })
                    .then((result) => {
                        console.log(result.data);
                        this.tvSeriesList = result.data.results;
                    })
                    .catch((error) => console.log(error));
            }
        },
    },
};
</script>

<style lang="scss"></style>
