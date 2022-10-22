<template>
  <div class="col mt-3">
    <div class="card text-center" style="width: 18rem;">
        <div class="card-header text-bg-secondary">{{list.name}}</div>
        <div class="card-body">
            <p class="card-text">{{list.description}}</p>
            <p class="card-text">{{list.category}}</p>
            <p class="card-text">{{list.name}}</p>
            <p class="card-title">{{list.price}}</p>
            <p class="card-text">(длина {{list.length}}, ширина {{list.width}}, вес {{list.weight}})</p>
        </div>
        <div class="card-footer">
        <a href="#" class="btn btn-primary">
            <CardIcon />
            в корзину
        </a>
        </div>
    </div>
  </div>
</template>

<script>
import CardIcon from '@/icons/CardIcon.vue';

export default {
   name: 'CardList',
   props: ["list"],
   components: {
    CardIcon,
  },
}
</script>