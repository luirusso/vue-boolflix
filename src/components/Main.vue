<template>
    <div class="container">
        <ul>
            <li v-for="(movie, index) in moviesArray" :key="`movie-${index}`">
                {{ movie.title }}
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
};
</script>

<style scoped lang="scss"></style>
