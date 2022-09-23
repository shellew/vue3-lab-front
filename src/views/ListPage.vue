<script setup>
import Sidebar from "../components/contents/Sidebar.vue";
import ImageItem from "../components/contents/items/ImageItem.vue";

const status = "読んでる本";
</script>

<template>
  <main>
    <Sidebar />
    <div class="list-container">
      <h3>{{ status }}</h3>
      <ImageItem />
    </div>
  </main>
</template>

<style>
main {
  display: flex;
}
</style>