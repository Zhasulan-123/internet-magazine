<template>
  <div class="container">
    <div class="row justify-content-center" style="margin-top: 15%;">
       <div class="col-4">
         <form @submit.prevent="submit">
            <h2 class="text-center mb-5">Авторизация</h2>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email:</label>
                <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Пароль:</label>
                <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="clearfix">
                 <button type="submit" class="btn btn-primary float-start">Войти</button>
                 <router-link type="submit" class="float-end" to="/registration">Регистрация</router-link>
            </div>
          </form>
       </div>
    </div>
  </div>
</template>

<script>
import authUser from "@/api/auth.user";

export default {
  name: 'Login',
  data() {
      return {
        form: {
          email: '',
          password: '',          
        },
        errors: null
      }
    },
    methods: {
      async submit() {
        const {success, errors} = await authUser.login(this.form);
        if (success) {
          this.$router.push({name: 'User'});
        } else {
          this.errors = errors;
        }
      }
    }
}
</script>
