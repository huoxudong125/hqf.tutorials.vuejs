<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="p in products">
        {{ p.title }} - {{ p.price | currency }}
        <br>
        <button
          :disabled="!p.inventory"
          @click="addToCart(p)">
          Add to cart
        </button>
      </li>
    </ul>
  </div>

</template>

<script>
  /* eslint-disable space-before-function-paren */

  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'productList',
    computed: mapGetters({
      products: [], // 'allProducts',
    }),
    methods: mapActions([
      'addToCart',
    ]),
    created () {
      this.$store.dispatch('getAllProducts');
    },
  };
</script>
