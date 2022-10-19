<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// ①取得したデータを保存する変数booksを設定
// ②APIからデータを取得
// ③タイトルをリストで表示
const books = ref([]);
onMounted(() => {
  axios
    .get("http://localhost/api/book_masters")
    .then((response) => (books.value = response.data))
    .catch((error) => console.log(error));
});
</script>

<template>
  <main class="main">
    <template v-for="(book, key) in books" :key="key">
      <div class="book-list">
        <div class="thumbnail">
          <img :src="book.image" alt="" />
        </div>
        <div class="title">
          <p>{{ book.title }}</p>
        </div>
      </div>
    </template>
  </main>
</template>

<style>
body {
  font-family: sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.book-list {
  width: 200px;
  padding: 10px;
  cursor: pointer;
}

.book-list:hover {
  transition: 0.2s transform ease-out;
  transform: scale(1.05);
}

.book-list > div.thumbnail > img {
  display: flex;
  flex: wrap;
  width: 200px;
  height: calc(100%);
  object-fit: cover;
}

.book-list > div.title {
  text-align: center;
  margin-top: 20px;
}
</style>
