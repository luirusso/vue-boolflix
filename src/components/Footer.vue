<template>
    <footer class="my-5">
        <div class="container text-white pt-5">
            <div class="row">
                <div class="text-center text-md-start col-12 col-lg-6 pb-5">
                    <div class="pb-5">
                        <img
                            class="footer_logo"
                            src="../assets/logobool.png"
                            alt=""
                        />
                    </div>
                    <div class="ms-2 pe-cursor">
                        <i class="fas fa-globe"></i> Country / Region: Italy
                    </div>
                </div>
                <div class="text-center text-md-start col-12 col-md-4 col-lg-2">
                    <h5 class="pb-3">CHI SIAMO</h5>
                    <ul>
                        <li>
                            <a href="#"> Domande frequenti </a>
                        </li>
                        <li>
                            <a href="#"> Condizioni di utilizzo </a>
                        </li>
                        <li>
                            <a href="#"> Privacy </a>
                        </li>
                        <li>
                            <a href="#"> Come guardare Netflix </a>
                        </li>
                    </ul>
                </div>
                <div class="text-center text-md-start col-12 col-md-4 col-lg-2">
                    <h5 class="pb-3">CONTATTACI</h5>
                    <ul>
                        <li>
                            <a href="#"> Domande frequenti </a>
                        </li>
                        <li>
                            <a href="#"> Rapporti con gli investitori </a>
                        </li>
                        <li>
                            <a href="#"> Informazioni sull'azienda </a>
                        </li>
                        <li>
                            <a href="#"> Centro assistenza </a>
                        </li>
                        <li>
                            <a href="#"> Opportunità di lavoro </a>
                        </li>
                        <li>
                            <a href="#"> Note legali </a>
                        </li>
                    </ul>
                </div>
                <div class="text-center text-md-start col-12 col-md-4 col-lg-2">
                    <h5 class="pb-3">SOCIAL</h5>
                    <ul class="d-flex justify-content-center justify-content-md-start">
                        <li>
                            <a href="#"> <i class="mb-3 fs-3 fab fa-facebook"></i> </a>
                        </li>
                        <li>
                            <a href="#"> <i class="px-3 mb-3 fs-3 fab fa-instagram"></i> </a>
                        </li>
                        <li>
                            <a href="#"> <i class="mb-3 fs-3 fab fa-twitter"></i> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style scoped lang="scss">
ul {
    list-style: none;
    padding: 0;
    li {
        padding-bottom: 3px;
    }
}

a {
    text-decoration: none;
    color: white;
    &:hover {
        color: #DC1A28;
    }
}
</style>
