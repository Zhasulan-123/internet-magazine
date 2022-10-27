<template>
  <div class="container">
    <div class="row justify-content-center" style="margin-top: 15%;">
        <div class="col-4">
            <div v-if="errors" class="alert alert-danger alert-dismissible fade show" role="alert">
              <div>
                <Warning />&nbsp;&nbsp;&nbsp;
                <span>Ошибка:&nbsp;{{message}}</span>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <form @submit.prevent="submit">
              <h2 class="text-center mb-5">Администратор</h2>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email:</label>
                <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Пароль:</label>
                <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1">
              </div>
              <div class="clearfix">
                <button type="submit" class="btn btn-primary float-start">Войти</button>
              </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import authAdmin from "@/api/auth.admin";
import Warning from '@/icons/Warning.vue';

export default {
  name: 'AdminLogin',
  components: { Warning },
  data() {
      return {
        form: {
          email: '',
          password: '',          
        },
        errors: false,
        message: '',
      }
  },
  methods: {
    async submit() {
      const {success, errors} = await authAdmin.login(this.form);                        
      if (success) {
        this.$router.push('/admin');
      } else {
        this.errors = errors.status;
        this.message = errors.message;
      }
    }
  },
}
</script>