<template>
    <div class="container">
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Main",

    data() {
        return {
            inputSearch: '',
            moviesList: [],
        };
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
};
</script>

<style scoped lang="scss"></style>
