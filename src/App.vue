<template>
    <div id="app">
        <Header @search="performSearch" />

        <Main />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

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
            performSearch(text) {
        console.log(text);
        this.inputSearch = text;
    },
  },
};
</script>

<style lang="scss"></style>
