<template>
  <li class="list-group">
    <div
      @click="toggle"
      @dblclick="changeType"
      class="list-group-item list-group-item-action fw-bold text-primary"
    >
      {{ categories.name }}
      <span v-if="isFolder">{{ isOpen ? '-' : '+' }}</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <Categoriies
        v-for="categories in categories.children"
        :key="categories.id"
        :categories="categories" 
      />
    </ul>
  </li>
</template>

<script>
import Categoriies from '@/components/Categories/Categoriies.vue';

export default {
   name: 'Categories',
   props: {
      categories: Object
   },
   components: {
     Categoriies
   },
   data() {
      return {
         isOpen: false
      }
   },
   computed: {
      isFolder() {
         return this.categories.children && this.categories.children.length
      }
   },
   methods: {
      toggle() {
         if (this.isFolder) {
            this.isOpen = !this.isOpen
         }
      },
      changeType() {
         if (!this.isFolder) {
            this.categories.children = []
            this.isOpen = true
         }
      },
   }
}
</script>