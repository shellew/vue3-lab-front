<script setup>
import Sidebar from "../components/contents/Sidebar.vue";
import InfoInput from "../components/contents/items/InfoInput.vue";
import InputNumber from "../components/contents/items/InputNumber.vue";
import InputIsbnNumber from "../components/contents/items/InputIsbnNumber.vue";
import StatusOptionItem from "../components/contents/items/StatusOptionItem.vue";
import CommentInputItem from "../components/contents/items/CommentInputItem.vue";
import ButtonItem from "../components/contents/items/ButtonItem.vue";

// ①inputに入力されたデータを"v-model"で取得する
// ②保存するために定数books、（タイトル、著者、isbn、ステータス、コメント）の定数を定義する
// →v-modelで取得した値を格納するkeyを設定する
// ③ボタンにクリックイベントを設定する
import axios from "axios";
import { ref, reactive , onMounted } from "vue";
const books = ref({});  //②取得したデータを保存する定数books
const bookTitle = ref("");
const bookAuthor = ref("");
const bookStatus = ref("");
const bookComment = ref("");

const createNewBook = () => {
  axios
  .post("http://localhost/api/book_masters", {
    title: bookTitle.value,
    author: bookAuthor.value,
    // isbn: bookIsbn.value,
    status: bookStatus.value,
    comment: bookComment.value,
  })
  .then((response) => books.value(response.data))
  .catch((error) => console.log(error));
};
onMounted(() => {
  axios
    .get("http://localhost/api/book_masters")
    .then((response) => books.value = response.data)
    .catch((error) => console.log(error));
});
</script>

<template>
  <main>
    <Sidebar />
    <div class="main-container">
      <label name="title" class="contents-item" >タイトル</label>
      <InfoInput v-model="bookTitle" />

      <label name="author" class="contents-item">著者</label>
      <InfoInput v-model="bookAuthor" />
      <div class="isbn-item">
        <label name="isbn" class="contents-item">ISBN</label>
        <InputIsbnNumber />ー<InputNumber />ー<InputNumber />ー<InputNumber />ー<InputNumber />
      </div>

      <label name="status" class="contents-item">ステータス</label>
      <StatusOptionItem v-model="bookStatus" />
      <label name="comment" class="contents-item">コメント</label>
      <CommentInputItem v-model="bookComment" />
      <div class="btn-container">
        <div class="btn">
          <ButtonItem v-on:click="createNewBook()" />
        </div>
      </div>
    </div>
  </main>
</template>

<style>
main {
  display: flex;
}

.contents-item {
  display: block;
  margin: 20px 0 10px;
  font-size: 22px;
}

.select {
  font-size: 14px;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
</style>