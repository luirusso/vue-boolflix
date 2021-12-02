<template>
    <main>
        <div class="result-container">
            <div v-if="noResults" class="popularList">
                <h2 class="text-white">I PIÙ POPOLARI</h2>
                <ul>
                    <li
                        class="m-2"
                        v-for="(popular, index) in popularMoviesArray"
                        :key="`popularMovie-${index}`"
                    >
                        <Popular
                            :poster_path="popular.poster_path"
                            :title="popular.title"
                            :original_title="popular.original_title"
                            :vote_average="popular.vote_average"
                            :overview="popular.overview"
                        />
                    </li>
                </ul>
            </div>

            <h2 v-if="moviesArray.length !== 0" class="text-white">
                FILM BOOLFLIX
            </h2>
            <ul>
                <li
                    class="m-2"
                    v-for="(movie, index) in moviesArray"
                    :key="`movie-${index}`"
                >
                    <Movies
                        :poster_path="movie.poster_path"
                        :title="movie.title"
                        :original_title="movie.original_title"
                        :vote_average="movie.vote_average"
                        :overview="movie.overview"
                    />
                </li>
            </ul>

            <h2 v-if="tvSeriesArray.length !== 0" class="text-white pt-5">
                SERIE ORIGINALI BOOLFLIX
            </h2>
            <ul>
                <li
                    class="m-2"
                    v-for="(series, index) in tvSeriesArray"
                    :key="`series-${index}`"
                >
                    <TvSeries
                        :poster_path="series.poster_path"
                        :name="series.name"
                        :original_name="series.original_name"
                        :vote_average="series.vote_average"
                        :overview="series.overview"
                    />
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
import Movies from "../components/Movies.vue";
import TvSeries from "../components/TvSeries.vue";
import Popular from "../components/Popular.vue";

export default {
    name: "Main",
    components: {
        Movies,
        TvSeries,
        Popular,
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
        -webkit-box-shadow: 5px 5px 10px 0px #ffffff12;
        -moz-box-shadow: 5px 5px 10px 0px #ffffff12;
        -o-box-shadow: 5px 5px 10px 0px #ffffff12;
        box-shadow: 5px 5px 10px 0px #ffffff12;
    }
    .flag {
        max-width: 30px;
    }
}
</style>
