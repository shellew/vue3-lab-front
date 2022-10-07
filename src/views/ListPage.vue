<script setup>
import Sidebar from "../components/contents/Sidebar.vue";
import ImageItem from "../components/contents/items/ImageItem.vue";

import axios from "axios";
import { ref } from "vue";

const books = ref([]);

axios
  .get("http://localhost/api/book_masters/")
  .then((response) => books.value = response.data)
  .catch((error) => console.log(error));
</script>

<template>
  <main>
    <Sidebar />
    <RouterLink to="/edit">
      <div class="list-container">
        <h3 v-for="book in books">{{ book.status }}</h3>
        <ImageItem />
      </div>
    </RouterLink>
  </main>
</template>

<style>
main {
  display: flex;
}
</style>