

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
      />
    </ul>
    <pre>{{name}}</pre>
    <pre>{{productStore}}</pre>
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import products from "@/data/products.json";
import { useProductStore } from "@/stores/ProductStore";
import {storeToRefs} from "pinia"

const {obj} = storeToRefs(useProductStore)

const productStore =  useProductStore()
productStore.getData()

const name = obj

console.log(productStore,"story")
</script>