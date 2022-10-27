<template>
  <div class="container">
    <div class="row justify-content-center" style="margin-top: 15%;">
       <div class="col-4">
         <div v-if="errors" class="alert alert-danger alert-dismissible fade show" role="alert">
          <div>
            <Warning />&nbsp;&nbsp;&nbsp;
            <span>
              Необходимо ввести все в поле !!!
            </span>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>
         <form @submit.prevent="submit">
            <h2 class="text-center mb-5">Регистрация</h2>
            <div class="mb-3">
                <label for="exampleInputName" class="form-label">Имя:</label>
                <input type="text" v-model="form.name" class="form-control" id="exampleInputName">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email:</label>
                <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Пароль:</label>
                <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="clearfix">
                 <button type="submit" class="btn btn-primary float-start">Добавить</button>
                 <router-link type="submit" class="float-end" to="/login">Войти</router-link>
            </div>
          </form>
       </div>
    </div>
  </div>
</template>

<script>
import authUser from "@/api/auth.user";
import Warning from '@/icons/Warning.vue';

export default {
   name: 'Registration',
   components: { Warning },
   data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',          
      },
      errors: false,
    }
  },
  methods: {
    async submit() {
      const {success, errors} = await authUser.register(this.form);
      if (success) {
        this.$router.push({name: 'User'});
      } else {
        if(errors){
           this.errors = true;
        }
      }
    }
  },
}
</script>