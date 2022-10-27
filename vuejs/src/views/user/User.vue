<template>
  <div class="container">
    <div class="row" style="margin-top: 6%;">
      <div class="col-2">
         <Menu />
      </div>
      <div class="col-10">
          <div class="card">
            <h5 class="card-header text-center text-bg-primary">Ваш заказ 
              <span class="float-end">
                Имя: {{dataList.username}}&nbsp;&nbsp;
                <a href="#" @click="logout" class="text-danger">Выход</a>
              </span>
            </h5>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">№</th>
                    <th scope="col">Название</th>
                    <th scope="col">Категория</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Сумма</th>
                  </tr>
                </thead>
                <tbody v-if="dataList.cart.length > 0">
                  <UserList
                    v-for="item in dataList.cart"
                    :key="item.id"
                    :item="item"
                  />
                </tbody>
                <tbody v-else>
                  <tr>
                    <td colspan="6" class="text-center text-danger">Корзина пусто!!!</td>
                  </tr>
                </tbody>
              </table>
              <div class="row" v-if="dataList.cart.length > 0">
                <div class="col clearfix inline_text">
                  <div class="float-start">
                     <p>
                      <strong>
                        Общая сумма: {{total}} тенге
                      </strong>
                     </p>
                     <p>
                      <strong>
                        Кол-во товара: {{ dataList.cart.length}} шт
                      </strong>
                     </p>
                  </div>
                  <div class="float-end">
                    <a href="#" class="btn btn-danger margin_right" @click="clearCart">Удалить</a>
                    <a href="#" class="btn btn-primary" @click="orderCart">Купить</a>
                  </div>
                </div>
              </div>
           </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import orderService from "@/api/private/order.service";
import Menu from "@/components/User/Menu.vue";
import UserList from "@/components/User/UserList.vue";
import authUser from "@/api/auth.user";

export default {
   name: 'User',
   components: { UserList, Menu },
   data() {
    return {
        dataList: {
          cart: [],
          email: localStorage.getItem("email"),
          username: localStorage.getItem("username")
        },
    }
  },
  methods: {
    async logout() {
      await authUser.logout();
    },
    clearCart(){
      this.dataList.cart = [];
      localStorage.removeItem("cart");
      console.clear();
      for(let i = 0; i < this.dataList.cart.length; i++){
          this.dataList.cart[i].inCart = false;
      }
    },
    cartLocalStorage(){
      if(localStorage.getItem("cart")){
        let cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
        return cartLocalStorage;
      }else{
        return [];
      }
    },
    async orderCart() {
	    const {status, data} = await orderService.create(this.dataList)
	    if (status === 201) {
	       this.clearCart();
	    }
	  },
  },
  computed: {
      total(){
        let i = 0;
        for(let index = 0; index < this.dataList.cart.length; index++){
            i += this.dataList.cart[index].price * this.dataList.cart[index].qty;
        }
        return i;
      },
   },
   mounted() {
      this.dataList.cart = this.cartLocalStorage();
   },
}
</script>

<style scoped>
.margin_right{
   margin-right: 1rem;
}
.inline_text{
  display: inline;
}
</style>