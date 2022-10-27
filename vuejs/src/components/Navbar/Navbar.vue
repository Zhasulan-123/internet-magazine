<template>
  <nav class="navbar navbar-dark bg-primary fixed-top">
    <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Shopping</router-link>
        <router-link to="/admin" class="btn btn-danger justify-content-end position-relative">
                Администратор
        </router-link>
        <router-link to="/user" class="btn btn-success justify-content-end position-relative">
                Пользаватель
        </router-link>
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
                    <li class="nav-item">
                        <a class="nav-link text-bg-light" @click="handleAdmin" data-bs-dismiss="offcanvas" aria-label="Close" href="#">Администратор</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-bg-light" @click="handleUser" data-bs-dismiss="offcanvas" aria-label="Close" href="#">Пользаватель</a>
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
        this.$router.push("/user");
    },
    handleRegistration() {
        this.$router.push("/registration");
    },
    handleAdmin() {
        this.$router.push("/admin");
    },
    handleUser() {
        this.$router.push("/user");
    },
  },
}
</script>
