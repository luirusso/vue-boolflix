<template>
    <div id="app">
        <Header @search="performSearch" />

        <Main />
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
    created() {
        this.getMovie();
    },
    computed: {
        filteredSearch() {
            if (this.inputSearch === "") {
                return this.moviesList;
            }

            return this.moviesList.filter((item) => {
                return item.title.includes(this.inputSearch);
            });
        },
    },
    methods: {
        getMovie() {
            /**
             * Get movies list from api
             */
            axios
                .get("https://api.themoviedb.org/3/movie/550", {
                    params: {
                        api_key: "56dd66302a0e2a5c6c9bbd2082ac8c6d",
                        query: this.inputSearch,
                        language: "it-IT",
                    },
                })
                .then((result) => {
                    console.log(result.data);
                    this.moviesList = result.data;
                })
                .catch((error) => console.log(error));
        },
    },
    performSearch(text) {
        console.log(text);
        this.inputSearch = text;
    },
};
</script>

<style lang="scss"></style>
