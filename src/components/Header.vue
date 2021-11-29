<template>
    <div class="container">
        <div class="search-container">
            <form>
                <input
                    v-model="inputSearch"
                    type="text"
                    placeholder="Cerca film e serie TV"
                />
                <button
                    type="submit"
                    @click.prevent="$emit('search', inputSearch)"
                >
                    CERCA
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            inputSearch: "",
        };
    },
};
</script>

<style scoped lang="scss"></style>
