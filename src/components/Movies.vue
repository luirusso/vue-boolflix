<template>
    <div class="card-content">
        <div>
            <img
                v-if="poster_path !== null"
                :src="`https://image.tmdb.org/t/p/w342${poster_path}`"
                alt=""
            />
            <img v-else src="../assets/imageError.png" alt="" />
        </div>

        <div>Titolo: {{ title }}</div>
        <div>Titolo originale: {{ original_title }}</div>
        <div>Voto: {{ vote_average }}</div>
        <div>
            <img
                class="flag"
                v-if="movieImageSelector(original_language)"
                :src="require(`../assets/${original_language}.png`)"
                alt=""
            />
        </div>
        <div>Lingua originale: {{ original_language }}</div>
    </div>
</template>

<script>
export default {
    name: "Movies",
    props: {
        poster_path: String,
        title: String,
        original_title: String,
        vote_average: Number,
        original_language: String,
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

</style>
