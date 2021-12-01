<template>
    <div class="card-content">
        <div class="card-image">
            <img
                v-if="poster_path !== null"
                :src="`https://image.tmdb.org/t/p/w342${poster_path}`"
                alt=""
            />
            <div
                v-else
                class="noImagePlaceholder d-flex justify-content-center"
            >
                <span class="d-flex align-items-center">
                    No Image Found :(
                </span>
            </div>
        </div>

        <div class="card-info">
            <div>Titolo: {{ title }}</div>
            <div>Titolo originale: {{ original_title }}</div>
            <div>
                Voto:
                <span
                    v-for="(element, i) in Math.ceil(vote_average / 2)"
                    :key="`rating${i}`"
                >
                    <i class="fas fa-star"></i>
                </span>
                <span
                    v-for="(element, i) in 5 - Math.ceil(vote_average / 2)"
                    :key="`emptyRating${i}`"
                >
                    <i class="far fa-star"></i>
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
            <div>
                Lingua originale:
                <img
                    class="flag"
                    v-if="movieImageSelector(original_language)"
                    :src="require(`../assets/${original_language}.png`)"
                    alt=""
                />
            </div>
        </div>
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
.card-content {
    position: relative;
    // width: 400px;
    img {
        object-fit: cover;
    }
    &:hover {
        cursor: pointer;
    }
    &:hover .card-info {
        display: block;
        background-color: rgba(0, 0, 0, 0.76);
    }
    .card-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: none;
        background-color: transparent;
        transition: background-color 0.3s linear;
        padding: 5rem;
    }
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
