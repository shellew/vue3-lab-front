<script setup>
import Sidebar from "../components/contents/Sidebar.vue";
import InfoInput from "../components/contents/items/InfoInput.vue";
import StatusOptionItem from "../components/contents/items/StatusOptionItem.vue";
import CommentInputItem from "../components/contents/items/CommentInputItem.vue";
import ButtonItem from "../components/contents/items/ButtonItem.vue";

// ①inputに入力されたデータを"v-model"で取得
// ②保存するために定数books、（タイトル、著者、ステータス、コメント）の定数を定義
// →v-modelで取得した値を格納するkeyを設定
// ③ボタンにクリックイベントを設定
import axios from "axios";
import { ref } from "vue";
const books = ref([]);
const user_id = ref("");
const title = ref("");
const author = ref("");
const status = ref("");
const memo = ref("");

const createNewBook = () => {
  axios
  .post("http://localhost/api/book_masters", {
    user_id: user_id.value,
    title: title.value,
    author: author.value,
    status: status.value,
    memo: memo.value,
  })
  .then((response) => books.value(response.data))
  .catch((error) => console.log(error));
};
</script>

<template>
  <main>
    <Sidebar />
    <div class="main-container">
      <label name="userId" class="contents-item">ユーザーID*後に削除予定</label>
      <InfoInput v-model="user_id" />

      <label name="title" class="contents-item">
        タイトル<span class="required">必須</span>
      </label>
      <InfoInput v-model="title" />

      <label name="author" class="contents-item">著者</label>
      <InfoInput v-model="author" />

      <label name="status" class="contents-item">
        ステータス<span class="required">必須</span>
      </label>
      <StatusOptionItem v-model="status" />

      <label name="comment" class="contents-item">コメント</label>
      <CommentInputItem v-model="memo" />

      <div class="btn-container">
        <ButtonItem @click="createNewBook()" />
      </div>
    </div>
  </main>
</template>

<style>
main {
  display: flex;
}

.main-container {
  width: 50%;
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

.required {
  padding: 3px 5px;
  margin: 0 0 10px 7px;
  background-color: #F56C6C;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
</style>