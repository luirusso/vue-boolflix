<template>
    <main>
        <div class="result-container">
            <h2 v-if="moviesArray.length !== 0" class="text-white">FILM BOOLFLIX</h2>
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
            <h2 v-if="tvSeriesArray.length !== 0" class="text-white pt-5">SERIE ORIGINALI BOOLFLIX</h2>
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

export default {
    name: "Main",
    components: {
        Movies,
        TvSeries,
    },

    props: {
        moviesArray: Array,
        tvSeriesArray: Array,
    },
};
</script>

<style scoped lang="scss">
h2 {
    padding-left: 5rem;
}
ul {
    color: white;
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    li {
        height: 513px;
        overflow: hidden;
    }
    .flag {
        max-width: 30px;
    }
}
</style>
