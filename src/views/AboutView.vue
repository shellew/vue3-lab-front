<script setup>
import Sidebar from "../components/contents/Sidebar.vue";
import CommentInputItem from "../components/contents/items/CommentInputItem.vue";
import StatusOptionItem from "../components/contents/items/StatusOptionItem.vue";
import ButtonItem from "../components/contents/items/ButtonItem.vue";
import InfoInput from "../components/contents/items/InfoInput.vue";

import axios from "axios";
import { ref, onMounted } from "vue";

const books = ref([]);
const title = ref("");
const author = ref("");
const status = ref("");
const memo = ref("");

const updateBook = () => {
  axios
    .put("http://localhost/api/book_masters/21", { //←idに固定の数字を入れている
      title: title.value,
      author: author.value, 
      status: status.value,
      memo: memo.value,
    })
    .then((response) => {
      const book = books.value.find((book) => book.id === 21);
      book.title = response.data.title;
      book.author = response.data.author;
      book.status = response.data.status;
      book.memo = response.data.memo;
    })
    .catch((error) => console.log(error));
};

const deleteBook = (id) => {
  axios
    .delete("http://localhost/api/book_masters/12")  //←idに固定の数字を入れている
    .then((response) => console.log("delete book" + id.value))
    .catch((error) => console.log(error));
};

// ①apiからデータを取得
// ②取得したデータを保存する変数booksを追加
onMounted(() => {
  axios
    .get("http://localhost/api/book_masters/21")  //←idに固定の数字を入れている
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
        <p v-for="book in books">タイトル：{{ book.title }}</p>
        <p v-for="book in books">著者：{{ book.author }}</p>
        <p v-for="book in books">ステータス：{{ book.status }}</p>
        <p v-for="book in books">コメント<br>{{ book.memo }}</p>
      </div>
      <div class="edit-blocks">
        <div class="edit-block-items">
          <div class="edit-block-item">
            <div class="edit-contents-item">
              <p>タイトル</p>
              <InfoInput v-model="title" />
            </div>
            <div class="edit-contents-item">
              <p>著者</p>
              <InfoInput v-model="author" />
            </div>
            <div class="edit-contents-item">
              <p>ステータス</p>
              <StatusOptionItem v-model="status" />
            </div>
          </div>
          <label class="edit-text">コメント</label>
          <CommentInputItem v-model="memo" />
        </div>
        <div class="button-item">
          <div class="button">
            <ButtonItem @click="updateBook()">更新</ButtonItem>
          </div>
          <div class="button">
            <ButtonItem @click="deleteBook(books.id)">削除</ButtonItem>
          </div>
          <RouterLink to="/readtime">
            <ButtonItem>読書時間を記録する</ButtonItem>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
  <div class="table">
    <table>
      <tr>
        <th>タイトル</th> <td v-for="book in books">{{ book.title }}</td>
      </tr>
      <tr>
        <th>著者</th> <td v-for="book in books">{{ book.author }}</td>
      </tr>
      <tr>
        <th>ステータス</th> <td v-for="book in books">{{ book.status }}</td>
      </tr>
      <tr>
        <th>コメント</th> <td v-for="book in books">{{ book.memo }}</td>
      </tr>
    </table>
  </div>
  <div class="edit-contents-item">
    <p class="edit-text">読書時間</p>
    <RouterLink to="/readtime">
      <ButtonItem>記録する</ButtonItem>
    </RouterLink>
  </div>
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
  display: block;
}

.edit-contents-item {
  display: block;
  margin-right: 100px;
}
/* 
.edit-contents-item:first-of-type {
  margin-right: 100px;
} */

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

.button {
  margin-right: 50px;
}
</style>
