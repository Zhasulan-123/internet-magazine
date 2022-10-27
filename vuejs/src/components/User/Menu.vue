<template>
  <div class="list-group">
    <span class="list-group-item list-group-item-action active text-center">
        Меню
    </span>
    <router-link to="/user" class="list-group-item list-group-item-action">Корзина</router-link>
  </div>
</template>

<script>
export default {
   name: 'Menu',
   
}
</script>