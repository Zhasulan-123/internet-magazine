<template>
  <div class="container">
    <div class="row" style="margin-top: 6%;">
      <div class="col-2">
         <div class="list-group">
          <span class="list-group-item list-group-item-action active text-center">
            Меню
          </span>
          <a href="#" class="list-group-item list-group-item-action">Категорий 1</a>
          <a href="#" class="list-group-item list-group-item-action">Категорий 2</a>
          <a href="#" class="list-group-item list-group-item-action">Категорий 3</a>
        </div>
      </div>
      <div class="col-10">
          <div class="card">
            <h5 class="card-header text-center text-bg-primary">Ваш заказ <a href="#" @click="logout" class="text-danger float-end">Выход</a></h5>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">№</th>
                    <th scope="col">Название</th>
                    <th scope="col">Описание</th>
                    <th scope="col">slug</th>
                    <th scope="col">Категория</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Длина</th>
                    <th scope="col">Ширина</th>
                    <th scope="col">Вес</th>
                  </tr>
                </thead>
                <tbody>
                  <UserList
                    v-for="item in items"
                    :key="item.id"
                    :item="item"
                  />
                </tbody>
              </table>
           </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import UserList from "@/components/User/UserList.vue";
import authUser from "@/api/auth.user";

export default {
   name: 'User',
   components: { UserList },
   data() {
    return {
        items: [
          {id: 1, name: 'Название 1', description: 'Описание 1', slug: 'slug 1', category: 'Категория 1', price: '200тн', length: '1.5мм', width: '1.8мм', weight: '2.5гр'},
          {id: 2, name: 'Название 2', description: 'Описание 2', slug: 'slug 2', category: 'Категория 2', price: '250тн', length: '1.4мм', width: '1.5мм', weight: '2.3гр'},
          {id: 3, name: 'Название 3', description: 'Описание 3', slug: 'slug 3', category: 'Категория 3', price: '260тн', length: '1.7мм', width: '1.6мм', weight: '2.6гр'},
          {id: 4, name: 'Название 4', description: 'Описание 4', slug: 'slug 4', category: 'Категория 4', price: '270тн', length: '1.3мм', width: '1.7мм', weight: '2.7гр'},
          {id: 5, name: 'Название 5', description: 'Описание 5', slug: 'slug 5', category: 'Категория 5', price: '280тн', length: '1.9мм', width: '1.9мм', weight: '2.8гр'},
        ],
    }
  },
  methods: {
    async logout() {
      await authUser.logout();
    }
  },
}
</script>
