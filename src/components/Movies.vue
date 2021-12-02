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
            <div><strong>Titolo:</strong> {{ title }}</div>
            <div><strong>Titolo originale:</strong> {{ original_title }}</div>
            <div>
                <strong>Voto: </strong>
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
            <div v-if="overview !== ''">
                <strong>Overview:</strong> {{ overview }}
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
        overview: String,
    },
};
</script>

<style scoped lang="scss">
.card-content {
    position: relative;
    overflow-y: auto;
    div {
        padding-bottom: 8px;
    }
    img {
        object-fit: cover;
    }
    &:hover {
        cursor: pointer;
    }
    &:hover .card-info {
        display: block;
        background-color: rgba(0, 0, 0, 0.877);
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
        padding: 2rem;
    }
}

.noImagePlaceholder {
    width: 342px;
    height: 513px;
    background-color: black;
    border: 0.5px solid white;
}

.flag {
    max-width: 30px;
}
</style>
