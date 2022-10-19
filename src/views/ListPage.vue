<script setup>
import HomeSidebar from "../components/contents/HomeSidebar.vue";
import ImageItem from "../components/contents/items/ImageItem.vue";

import axios from "axios";
import { ref } from "vue";

const books = ref([]);

axios
  .get("http://localhost/api/book_masters/")
  .then(function(response) {
    books.value = response.data;
  })
  .catch((error) => console.log(error));

</script>

<template>
  <main>
    <HomeSidebar />
    <div v-if="books" class="list-container">
      <!-- <h3 v-for="book in books" :key="book.status">{{ book.status }}</h3> -->
      <h3></h3>
      <RouterLink to="/edit">
        <ImageItem />
      </RouterLink>
    </div>
    <p v-else>本が登録されていません</p>
  </main>
</template>

<style>
main {
  display: flex;
}
</style>
