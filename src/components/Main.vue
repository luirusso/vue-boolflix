<template>
    <div class="container">
        <ul>
            <li v-for="(movie, index) in moviesArray" :key="`movie-${index}`">

                <Movies 
                :poster_path="movie.poster_path"
                :title="movie.title"
                :original_title="movie.original_title"
                :vote_average="movie.vote_average"
                :original_language="movie.original_language"
                />

                <!-- <div class="card-content">
                    <div>
                        <img
                            v-if="movie.poster_path !== null"
                            :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
                            alt=""
                        />
                        <img v-else src="../assets/imageError.png" alt="" />
                    </div>

                    <div>Titolo: {{ movie.title }}</div>
                    <div>Titolo originale: {{ movie.original_title }}</div>
                    <div>Voto: {{ movie.vote_average }}</div>
                    <div>
                        <img
                            class="flag"
                            v-if="movieImageSelector(movie.original_language)"
                            :src="
                                require(`../assets/${movie.original_language}.png`)
                            "
                            alt=""
                        />
                    </div>
                    <div>Lingua originale: {{ movie.original_language }}</div>
                </div> -->
            </li>

            <li
                v-for="(series, index) in tvSeriesArray"
                :key="`series-${index}`"
            >

                <TvSeries 
                :poster_path="series.poster_path"
                :name="series.title"
                :original_name="series.original_title"
                :vote_average="series.vote_average"
                :original_language="series.original_language"
                />

                <!-- <div class="card-content">
                    <div>
                        <img
                            v-if="series.poster_path !== null"
                            :src="`https://image.tmdb.org/t/p/w342${series.poster_path}`"
                            alt=""
                        />
                        <img v-else src="../assets/imageError.png" alt="" />
                    </div>
                    <div>Titolo: {{ series.name }}</div>
                    <div>Titolo originale: {{ series.original_name }}</div>
                    <div>Voto: {{ series.vote_average }}</div>
                    <div>
                        <img
                            class="flag"
                            v-if="movieImageSelector(series.original_language)"
                            :src="
                                require(`../assets/${series.original_language}.png`)
                            "
                            alt=""
                        />
                    </div>
                    <div>Lingua originale: {{ series.original_language }}</div>
                </div> -->
            </li>
        </ul>
    </div>
</template>

<script>
import Movies from '../components/Movies.vue';
import TvSeries from '../components/TvSeries.vue';

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
    // methods: {
    //     movieImageSelector(apiLanguage) {
    //         const languages = ["it", "en"];

    //         //operatore ternario
    //         return languages.includes(apiLanguage) ? true : false;
    //     },
    // },
};
</script>

<style scoped lang="scss">
// ul {
//     list-style: none;
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;
//     li {
//         padding: 1rem 1.5rem;
//         background-color: lightgray;
//     }
//     .flag {
//         max-width: 30px;
//     }
// }
</style>
