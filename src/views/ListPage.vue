<script setup>
import HomeSidebar from "../components/contents/HomeSidebar.vue";
import ImageItem from "../components/contents/items/ImageItem.vue";

import axios from "axios";
import { ref, onMounted } from "vue";

const books = ref([]);
// let getBookStatus = ref();

//本のデータを取得
onMounted(() => {
  axios
    .get("http://localhost/api/book_masters/")
    .then((response) => {
      books.value = response.data;
    })
    .catch((error) => console.log(error));
});

// getBookStatus = books.value[0].status;
const message = '<span style="color: #f00;">メッセージ</span>';
</script>

<template>
  <main>
    <HomeSidebar />
    <div class="list-container">
      <!-- <h3 v-for="book in books" :key="book.status">{{ book.status }}</h3> -->
      <h3 v-html="message"></h3>
      <p v-text="message"></p>
      <p v-html="message"></p>
      <RouterLink to="/edit">
        <ImageItem />
      </RouterLink>
    </div>
  </main>
</template>

<style>
main {
  display: flex;
}
</style>
