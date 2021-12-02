<template>
    <header>
        <nav
            class="navbar fixed-top fixed-top-nav navbar-expand-lg navbar-dark"
        >
            <div class="container-fluid">
                <a class="navbar-brand pe-3" href="#">
                    <img src="../assets/logobool.png" alt="" />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#" role="button">
                                Serie
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                href="#"
                                role="button"
                                aria-expanded="false"
                            >
                                Film
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#"
                                role="button"
                                aria-expanded="false"
                            >
                                Servizi
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#"
                                role="button"
                                aria-expanded="false"
                            >
                                Novità
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#"
                                role="button"
                                aria-expanded="false"
                            >
                                Info Abbonamento
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#"
                                role="button"
                                aria-expanded="false"
                            >
                                Supporto
                            </a>
                        </li>
                    </ul>
                    <ul class="navbar-nav align-items-center">
                        <li class="nav-item px-2">
                            <div class="container-fluid">
                                <div class="d-flex">
                                    <input
                                        class="search form-control me-2"
                                        type="search"
                                        placeholder="Cerca film e serie"
                                        aria-label="Search"
                                        @keyup.enter="
                                            $emit('search', inputSearch)
                                        "
                                        v-model="inputSearch"
                                    />
                                    <button
                                        class="button btn btn-outline-light"
                                        type="submit"
                                        @click="
                                            $emit('search', inputSearch),
                                                $emit('triggerOne'),
                                                $emit('triggerTwo')
                                        "
                                    >
                                        <i class="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item px-2">
                            <a
                                class="nav-link"
                                href="#"
                                role="button"
                                aria-expanded="false"
                            >
                                <i class="fs-4 fas fa-bell"></i>
                            </a>
                        </li>

                        <li class="nav-item px-2">
                            <a
                                class="nav-link"
                                href="#"
                                role="button"
                                aria-expanded="false"
                            >
                                <i class="fs-1 fas fa-user-circle"></i>
                            </a>
                        </li>
                        <li class="nav-item mx-2">
                            <button type="button" class="btn btn-secondary">
                                Accedi
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
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

<style scoped lang="scss">
header {
    padding-bottom: 10rem;
    .navbar {
        background: rgb(0, 0, 0);
        background: linear-gradient(
            180deg,
            rgb(0 0 0) 0%,
            rgb(0 0 0 / 60%) 100%
        );
    }
    .navbar-brand {
        img {
            max-width: 150px;
        }
    }
    .search {
        background: transparent;
        color: rgba(255, 255, 255, 0.479);
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.144);
        transition: border 0.3s linear;
        &:focus {
            border-bottom: 1px solid white;
        }
    }
    .button {
        border: none;
        border-radius: 50%;
        color: #9b9d9e;
    }
}
</style>
