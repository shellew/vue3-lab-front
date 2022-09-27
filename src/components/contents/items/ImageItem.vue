<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";

// ①取得したデータを保存する変数booksを追加する
// ②APIからデータを取得する
// ③（booksからtitleを取り出して）タイトルをリストで表示する
const books = ref([]);
onMounted(() => {
  axios.get("http://localhost/api/book_masters")
    .then((response) => books.value = response.data)
    .catch((error) => console.log(error))
});


  // {
  //   bookTitle: "",
  //   image: "/images/item1.jpg",
  // },
  // {
  //   bookTitle: "",
  //   image: "/images/item2.jpg",
  // },
  // {
  //   bookTitle: "",
  //   image: "/images/item3.jpg",
  // },
  // {
  //   bookTitle: "",
  //   image: "/images/item4.jpg",
  // },
  // {
  //   bookTitle: "",
  //   image: "/images/item3.jpg",
  // },
  // {
  //   bookTitle: "",
  //   image: "/images/item3.jpg",
  // },

</script>

<template>
  <main class="main">
    <template v-for="book in books">
      <div class="item">
        <div class="thumbnail">
          <img :src="book.image" alt="">
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

#app {
  width: 90%;
  margin: 0 5%;
  color: #242424;
}

.main {
  /* display: grid;
    grid-template-columns: 3fr 3fr 3fr 3fr;
    column-gap: 24px;
    row-gap: 24px; */
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.item {
  width: 200px;
  padding: 10px;
  cursor: pointer;
}

.item:hover {
  transition: 0.2s transform ease-out;
  transform: scale(1.05);
}

.item > div.thumbnail > img {
  display: flex;
  flex: wrap;
  width: 200px;
  height: calc(100%);
  object-fit: cover;
}

.item > div.title {
  text-align: center;
  margin-top: 20px;
}

/* .item > div.title > p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 18px;
    line-height: 25px;
} */

/* .item > div.title > span {
    display: block;
    margin-top: 10px;
    font-size: 20px;
} */
</style>