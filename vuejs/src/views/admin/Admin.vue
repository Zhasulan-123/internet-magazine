<template>
  <div class="container">
    <div class="row" style="margin-top: 6%;">
        <div class="col-2">
          <Menu />
        </div>
        <div class="col-10">
          <div class="card">
            <h5 class="card-header text-center text-bg-primary">Заказы
              <span class="float-end">
                Имя: {{username}} &nbsp;&nbsp;
                <a href="#" @click="logout" class="text-danger">Выход</a>
              </span>
            </h5>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">№</th>
                    <th scope="col">Email</th>
                    <th scope="col">Название</th>
                    <th scope="col">Категория</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Сумма</th>
                  </tr>
                </thead>
                <tbody v-if="cart.length > 0">
                  <AdminList
                    v-for="item in cart"
                    :key="item.id"
                    :item="item"
                  />
                </tbody>
                <tbody v-else>
                  <tr>
                    <td colspan="6" class="text-center text-danger">Заказы нет !!!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import orderService from "@/api/private/order.service";
import Menu from "@/components/Admin/Menu.vue";
import AdminList from "@/components/Admin/AdminList.vue";
import authAdmin from "@/api/auth.admin";

export default {
   name: 'Admin',
   components: { AdminList, Menu },
   data() {
    return {
        cart: [],
        username: localStorage.getItem("username"),
    }
  },
  methods: {
    async logout() {
      await authAdmin.logout();
    }
  },
  async beforeMount() {
	  const {status, data} = await orderService.get();
	  if (status === 200) {
	    this.cart = data;
	  }
	},
}
</script>