<template>
  <div class="col mt-3">
    <div class="card text-center fw-bold" style="width: 18rem;">
        <div class="card-header text-bg-secondary">{{list.name}}</div>
        <div class="card-body">
            <p class="card-text"><span class="text-danger">Описание:</span>{{list.description}}</p>
            <p class="card-text"><span class="text-danger">Категория:</span>{{list.category.title}}</p>
            <p class="card-text"><span class="text-danger">Slug:</span>{{list.slug}}</p>
            <p class="card-title"><span class="text-danger">Цена:</span>{{list.price}}</p>
            <p class="card-text">
              <span class="text-danger">Длина:</span> {{list.leng}}, <span class="text-danger">Ширина:</span> {{list.width}}, <span class="text-danger">Вес:</span> {{list.weight}}
            </p>
            <p>
              Кол-во:
              <input type="number" class="form-control number_w" v-model="list.qty" min="1" max="30" step="1" />
              <InCart v-if="list.inCart" />
            </p>
            <span v-if="list.inCart" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
              <CartIcon />+
            </span>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-primary position-relative" @click="this.$emit('add', list)" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <CartIcon />
              в корзину
          </a>
        </div>
    </div>
  </div>
</template>

<script>
import CartIcon from '@/icons/CartIcon.vue';
import InCart from '@/icons/InCart.vue';

export default {
   name: 'CartList',
   props: ["list"],
   components: {
    CartIcon,
      InCart
   },
}
</script>

<style scoped>
.number_w{
   width: 4rem;
   display: inline;
}
</style>