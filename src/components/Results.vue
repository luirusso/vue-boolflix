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
                    <i class="text-warning fas fa-star"></i>
                </span>
                <span
                    v-for="(element, i) in 5 - Math.ceil(vote_average / 2)"
                    :key="`emptyRating${i}`"
                >
                    <i class="text-warning far fa-star"></i>
                </span>
            </div>
            <div v-if="overview == ''">
                <strong>Overview:</strong> Non disponibile :(
            </div>
            <div v-else>
                <strong>Overview:</strong> {{ overview }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Results",
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
    height: 100%;

    img {
        object-fit: cover;
    }
    &:hover {
        cursor: pointer;
    }
    &:hover .card-info {
        opacity: 1;
    }
    &:hover .card-image {
        filter: blur(4px);
    }

    .card-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background-color: transparent;
        padding: 2rem;
        overflow-y: auto;
        transition: background 0.4s, opacity 0.5s ease-in-out;
        div {
            padding-bottom: 8px;
        }
        &:hover {
            background-color: rgba(0, 0, 0, 0.692);
        }
    }
}

.card-image,
.card-image img {
    height: 100%;
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
