<script setup>
import Sidebar from "../components/contents/Sidebar.vue";
import CommentInputItem from "../components/contents/items/CommentInputItem.vue";
import StatusOptionItem from "../components/contents/items/StatusOptionItem.vue";
import ButtonItem from "../components/contents/items/ButtonItem.vue";
import InputNumber from "../components/contents/items/InputNumber.vue";

import axios from "axios";
import { ref, reactive, onMounted } from "vue";
// ①apiからデータを取得する
// ②取得したデータを保存する変数booksを追加する
const books = ref([]);
onMounted(() => {
  axios.get("http://localhost/api/book_masters/1")
    .then((response) => books.value = response.data)
    .catch((error) => console.log(error));
});
</script>

<template>
  <main>
    <Sidebar />

    <div class="edit-container">
      <div class="edit-contents">
        <img src="/images/item1.jpg" alt="" width="150">
        <p v-for="book in books">{{ book.title }}</p>
        <p v-for="book in books">{{ book.author }}</p>
        <p v-for="book in books">{{ book.isbn }}</p>
        <p v-for="book in books">{{ book.status }}</p>
      </div>
      <div class="edit-blocks">
        <div class="edit-block-items">
          <div class="edit-block-item">
            <div class="edit-contents-item">
              <p class="edit-text">読書時間</p>
              <RouterLink to="/readtime">
                <ButtonItem>記録する</ButtonItem>
              </RouterLink>
            </div>
            <div class="edit-contents-item">
              <p>ステータス</p>
              <StatusOptionItem />
            </div>
          </div>
          <label class="edit-text">コメント</label><CommentInputItem />
        </div>
        <div class="button-item">
          <div class="button">
            <ButtonItem>更新</ButtonItem>
          </div>
          <div class="button">
            <ButtonItem>削除</ButtonItem>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
main {
  display: flex;
  font-size: 22px;
}

.edit-container {
  display: flex;
  justify-content: space-around;
  width: 1000px;
}

.edit-contents {
  width: 200px;
  text-align: center;
}

.edit-contents p {
  font-size: 16px;
}

.edit-blocks {
  display: block;
  width: 80%;
  padding: 20px;
}

.edit-block-item {
  display: flex;
  justify-content: flex-start;
}

.edit-contents-item {
  display: block;
}

.edit-contents-item:first-of-type {
  margin-right: 100px;
}

.edit-text {
  display: block;
  margin: 20px 0 10px;
  padding-bottom: 15px;
}

.button-item {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.button:first-child {
  margin-right: 50px;
}
</style>
