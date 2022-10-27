<template>
  <div class="container">
    <div class="row" style="margin-top: 6%;">
      <div class="col">
        <button class="btn btn-warning float-end position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <CartIcon />
           Корзина
           <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ cart.length}}+
          </span>
        </button>
      </div>
    </div>
    <div class="row">
       <div class="col-3">
          <h3 class="text-primary">Списки тавара</h3>
          <Categoriies 
            class="list_pointer"
            v-for="list in categories"
            :key="list.id"
            :categories="list"
            @categoryId="categoryId"
          />
       </div>
       <div class="col-9">
          <div class="row">
            <CartList 
              v-for="list in filteredCategory"
              :key="list.id"
              :list="list"
              @add="add"
            />
          </div>
       </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Корзина</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="card">
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
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody v-if="cart.length > 0">
                        <tr v-for="item in cart" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.category.title}}</td>
                            <td>{{item.price}}т</td>
                            <td>{{item.qty}}</td>
                            <td>{{item.price * item.qty}}т</td>
                            <td>
                              <a href="#" @click="remove(item.id)">
                                  <Delete />
                              </a>
                            </td>
                        </tr>
                        <tr scope="col">
                           <td colspan="7" class="fw-bold">
                              Общая сумма: <span class="text-danger">{{total}} тенге</span>
                           </td>
                        </tr>
                        <tr scope="col" v-if="cart.length > 0">
                           <td colspan="7" class="fw-bold">
                              Кол-во тавара: <span class="text-danger">{{ cart.length}} шт</span>
                           </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                         <tr>
                            <td colspan="7" class="text-center text-danger">Корзина пусто!!!</td>
                         </tr>
                      </tbody>
                    </table>
                </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                <button type="button" class="btn btn-danger" @click="clearCart">Очистить</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="handleDesign">Оформить</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal-end -->
    </div>
  </div>
</template>

<script>
import categoriesService from "@/api/public/categories.service";
import productsService from "@/api/public/products.service";
import CartList from '@/components/Cart/CartList.vue';
import Categoriies from '@/components/Categories/Categoriies.vue';
import Delete from '@/icons/Delete.vue';
import CartIcon from '@/icons/CartIcon.vue';

export default {
  name: 'Home',
  components: {
    CartList,
    Categoriies,
    Delete,
    CartIcon
  },
  data() {
    return {
        products: [],
        cart: [],
        categories: [],
        sortCategory: [],
    }
  },
  methods: {
    categoryId(id){
      this.sortCategory = [];
      let c = this;
      this.products.map(function(item){
         if(item.category_id === id){
            c.sortCategory.push(item);
         }
      });
    },
    handleDesign(){
      this.$router.push("/user");
    },
    createLocalStorage(){
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    add(product){
      this.products[product.id - 1].inCart = true;
      this.products[product.id - 1].qty = product.qty;
      this.cart.push(product);
      this.createLocalStorage();
    },
    remove(id){
      for(let index = 0; index < this.cart.length; index++){
        const cart_item_id = this.cart[index].id;
        if(cart_item_id == id){
            this.cart.splice(index, 1);
            for(let i = 0; i < this.products.length; i++){
              if(cart_item_id == this.products[i].id){
                this.products[i].inCart = false;
                this.createLocalStorage();
              }
            }
        }
        let cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
        if(cartLocalStorage == 0){
          localStorage.removeItem("cart");
          console.clear();
        }
      }
    },
    clearCart(){
      this.cart = [];
      localStorage.removeItem("cart");
      console.clear();
      for(let i = 0; i < this.products.length; i++){
        this.products[i].inCart = false;
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
    async categoriesAll(){
      const {status, data} = await categoriesService.get();
      if (status === 200) {
        this.categories = data;
      }
    },
    async productsAll(){
      const {status, data} = await productsService.get();
      if (status === 200) {
        this.products = data;
      }
    },
  },
  computed: {
    total(){
      let i = 0;
      for(let index = 0; index < this.cart.length; index++){
          i += this.cart[index].price * this.cart[index].qty;
      }
      return i;
    },
    filteredCategory(){
      if(this.sortCategory.length){
        return this.sortCategory;
      }else{
        return this.products;
      }
    },
  },
  mounted() {
    this.cart = this.cartLocalStorage();
    for(let index = 0; index < this.products.length; index++){
        const product = this.products[index];
        if(localStorage.getItem("cart")){
          let cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
          for(let i = 0; i < cartLocalStorage.length; i++){
            const cartItem = cartLocalStorage[i];
            if(product.id == cartItem.id){
              product.inCart = true;
            }
          }
        }
    }
  },
  beforeMount() {
    this.categoriesAll();
    this.productsAll();
	},
}
</script>

<style scoped>
.list_pointer {
  cursor: pointer;
  line-height: 1.5;
}
</style>