<template>
    <main>
        <!-- POPULAR SECTION LANDING PAGE, LOADED AT START -->
        <div class="result-container">
            <div v-if="noResults" class="popularList">
                <h2 class="text-white">I PIÙ POPOLARI</h2>
                <ul>
                    <li
                        class="m-2"
                        v-for="(popular, index) in popularMoviesArray"
                        :key="`popularMovie-${index}`"
                    >
                        <Results
                            :poster_path="popular.poster_path"
                            :title="popular.title"
                            :original_title="popular.original_title"
                            :vote_average="popular.vote_average"
                            :overview="popular.overview"
                        />
                    </li>
                </ul>
            </div>

            <!-- MOVIES LIST -->
            <h2 v-if="moviesArray.length !== 0" class="text-white">
                FILM BOOLFLIX
            </h2>
            <ul>
                <li
                    class="m-2"
                    v-for="(movie, index) in moviesArray"
                    :key="`movie-${index}`"
                >
                    <Results
                        :poster_path="movie.poster_path"
                        :title="movie.title"
                        :original_title="movie.original_title"
                        :vote_average="movie.vote_average"
                        :overview="movie.overview"
                    />
                </li>
            </ul>

            <!-- SERIES LIST -->
            <h2 v-if="tvSeriesArray.length !== 0" class="text-white pt-5">
                SERIE ORIGINALI BOOLFLIX
            </h2>
            <ul>
                <li
                    class="m-2"
                    v-for="(series, index) in tvSeriesArray"
                    :key="`series-${index}`"
                >
                    <Results
                        :poster_path="series.poster_path"
                        :title="series.name"
                        :original_title="series.original_name"
                        :vote_average="series.vote_average"
                        :overview="series.overview"
                    />
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
import Results from "./Results.vue";

export default {
    name: "Main",
    components: {
        Results,
    },

    props: {
        moviesArray: Array,
        tvSeriesArray: Array,
        popularMoviesArray: Array,
    },
    computed: {
        noResults() {
            return (
                this.moviesArray.length == 0 && this.tvSeriesArray.length == 0
            );
        },
    },
};
</script>

<style scoped lang="scss">
h2 {
    padding-left: 5rem;
}
ul {
    padding: 0;
    color: white;
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    li {
        width: 342px;
        height: 513px;
        overflow: hidden;
        border-radius: 30px;
        transition: transform 0.4s ease-in-out;
        &:hover {
            transform: scale(1.2);
            -webkit-box-shadow: 5px 5px 10px 0px #00000012;
            -moz-box-shadow: 5px 5px 10px 0px #00000012;
            -o-box-shadow: 5px 5px 10px 0px #00000012;
            box-shadow: 5px 5px 10px 0px #00000012;
            z-index: 1;
        }
    }
    .flag {
        max-width: 30px;
    }
}
</style>
