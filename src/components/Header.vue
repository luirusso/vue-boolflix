<template>
    <div class="container">
        <div class="search-container">
            <input
                @keyup.enter="
                    $emit('search', inputSearch),
                        $emit('triggerOne'),
                        $emit('triggerTwo')
                "
                v-model="inputSearch"
                type="text"
                placeholder="Cerca film e serie TV"
            />
            <button
                @click="
                    $emit('search', inputSearch),
                        $emit('triggerOne'),
                        $emit('triggerTwo')
                "
            >
                CERCA
            </button>
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
