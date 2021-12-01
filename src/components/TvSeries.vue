<template>
    <div class="card-content">
        <div>
            <img
                v-if="poster_path !== null"
                :src="`https://image.tmdb.org/t/p/w342${poster_path}`"
                alt=""
            />
            <div v-else class="noImagePlaceholder d-flex justify-content-center">
                <span class="d-flex align-items-center"> 
                    No Image Found :(
                </span>
            </div>
        </div>
        <div>Titolo: {{ name }}</div>
        <div>Titolo originale: {{ original_name }}</div>
        <div>Voto: 
            <span v-for="(element, i) in Math.ceil(vote_average / 2)" :key="`rating${i}`">
                <i class="fas fa-star"></i>
            </span>
            <span v-for="(element, i) in 5 - (Math.ceil(vote_average / 2))" :key="`emptyRating${i}`">
                <i class="fas fa-star"></i>
            </span>
        </div>
        <!-- <div>
            <img
                class="flag"
                v-if="movieImageSelector(original_language)"
                :src="require(`../assets/${original_language}.png`)"
                alt=""
            />
        </div> -->
        <div>Lingua originale: 
            <img
                class="flag"
                v-if="movieImageSelector(original_language)"
                :src="require(`../assets/${original_language}.png`)"
                alt=""
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "TvSeries",
    props: {
        poster_path: String,
        name: String,
        original_name: String,
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
.card-content {
    width: 400px;
    overflow: hidden;
}

.noImagePlaceholder {
    width: 342px;
    height: 513px;
    background-color: black;
}

.flag {
    max-width: 30px;
}
</style>
