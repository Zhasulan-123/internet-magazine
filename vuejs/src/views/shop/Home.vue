<template>
  <div class="container">
    <div class="row" style="margin-top: 6%;">
       <div class="col-3">
          <Categoriies 
            v-for="list in categories"
            :key="list.id"
            :categories="list"
            class="list_pointer"
          />
       </div>
       <div class="col-9">
          <div class="row">
            <CardList 
                v-for="list in items"
                :key="list.id"
                :list="list"
            />
          </div>
       </div>
    </div>
  </div>
</template>

<script>
import CardList from '@/components/Card/CardList.vue';
import Categoriies from '@/components/Categories/Categoriies.vue';

export default {
  name: 'HomeView',
  components: {
    CardList,
    Categoriies
  },
  data() {
    return {
        items: [
           {id: 1, name: 'Название 1', description: 'Описание 1', category: 'категория', price: 'Цена: 20', length: '0.4м', width: '5м', weight: '3гр'},
           {id: 2, name: 'Название 2', description: 'Описание 2', category: 'категория', price: 'Цена: 20', length: '0.4м', width: '5м', weight: '3гр'},
           {id: 3, name: 'Название 3', description: 'Описание 3', category: 'категория', price: 'Цена: 20', length: '0.4м', width: '5м', weight: '3гр'},
           {id: 4, name: 'Название 4', description: 'Описание 4', category: 'категория', price: 'Цена: 20', length: '0.4м', width: '5м', weight: '3гр'},
        ],
        categories: [
          {
            id: 1,
            name: 'Категория',
            children: [
              { name: 'Категория 1' },
              { name: 'Категория 2' },
              {
                name: 'Категория 3',
                children: [
                  {
                    name: 'Категория 4',
                    children: [{ name: 'Категория 5' }, { name: 'Категория 6' }]
                  },
                  { name: 'Категория 7' },
                  { name: 'Категория 8' },
                  {
                    name: 'Категория 9',
                    children: [{ name: 'Категория 10' }, { name: 'Категория 11' }]
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            name: 'Категория',
            children: [
              { name: 'Категория 1' },
              { name: 'Категория 2' },
              {
                name: 'Категория 3',
                children: [
                  {
                    name: 'Категория 4',
                    children: [{ name: 'Категория 5' }, { name: 'Категория 6' }]
                  },
                  { name: 'Категория 7' },
                  { name: 'Категория 8' },
                  {
                    name: 'Категория 9',
                    children: [{ name: 'Категория 10' }, { name: 'Категория 11' }]
                  }
                ]
              }
            ]
          },
        ],
    }
  },
}
</script>

<style scoped>
.list_pointer {
  cursor: pointer;
  line-height: 1.5;
}
</style>