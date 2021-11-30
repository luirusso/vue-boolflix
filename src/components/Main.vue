<template>
    <div class="container">
        <ul>
            <li v-for="(movie, index) in moviesArray" :key="`movie-${index}`">
                <div>Titolo: {{ movie.title }}</div>
                <div>Titolo originale: {{ movie.original_title }}</div>
                <div>Voto: {{ movie.vote_average }}</div>
                <div>
                    <img
                        v-if="movieImageSelector(movie.original_language)"
                        :src="
                            require(`../assets/${movie.original_language}.png`)
                        "
                        alt=""
                    />
                </div>
                <div>Lingua originale: {{ movie.original_language }}</div>
            </li>

            <li v-for="(series, index) in tvSeriesArray" :key="`series-${index}`">
                <div>Titolo: {{ series.name }}</div>
                <div>Titolo originale: {{ series.original_title }}</div>
                <div>Voto: {{ series.vote_average }}</div>
                <div>
                    <img
                        v-if="movieImageSelector(series.original_language)"
                        :src="
                            require(`../assets/${series.original_language}.png`)
                        "
                        alt=""
                    />
                </div>
                <div>Lingua originale: {{ series.original_language }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Main",
    props: {
        moviesArray: Array,
        tvSeriesArray: Array,
    },
    methods: {
        movieImageSelector(apiLanguage) {
            const languages = ["it", "en"];

            //operatore ternario
            return languages.includes(apiLanguage) ? true : false;
        },
    },
};
</script>

<style scoped lang="scss">
img {
    max-width: 30px;
}
</style>
