<template>
    <div class="container">
        <ul>
            <li v-for="(movie, index) in moviesArray" :key="`movie-${index}`">
                <div>Titolo: {{ movie.title }}</div>
                <div>Titolo originale: {{ movie.original_title }}</div>
                <div>Voto: {{ movie.vote_average }}</div>
                <div>
                    <img v-if="movieImageSelector(movie.original_language)" :src="require(`../assets/${movie.original_language}.png`)" alt="">
                </div>
                <div>Lingua originale: {{ movie.original_language }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Main",
    props: {
        moviesArray: Array,
    },
    methods: {
        movieImageSelector(apiLanguage) {
            const languages = ['it', 'en'];

            if(languages.includes(apiLanguage)) {
                return true;
            } else {
                return false;
            }
        },
    }
};
</script>

<style scoped lang="scss"></style>
