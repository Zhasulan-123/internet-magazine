<template>
    <nav class="navbar navbar-dark bg-primary fixed-top">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Shopping</router-link>
            <a class="nav-link justify-content-end" href="#">
                <router-link class="btn btn-success position-relative" to="/basket">
                    Корзина
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                    </span>
                </router-link>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title text-bg-light" id="offcanvasNavbarLabel">Личный кабинет</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link text-bg-light" @click="handleLogin" data-bs-dismiss="offcanvas" aria-label="Close" href="#">Вход</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-bg-light" @click="handleRegistration" data-bs-dismiss="offcanvas" aria-label="Close" href="#">Регистрация</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        handleLogin() {
          this.$router.push("/login");
        },
        handleRegistration() {
          this.$router.push("/registration");
        },
    },
}
</script>
