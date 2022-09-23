<script setup>
import Sidebar from "../components/contents/Sidebar.vue";
import CommentInputItem from "../components/contents/items/CommentInputItem.vue";
import ButtonItem from "../components/contents/items/ButtonItem.vue";
import InputNumber from "../components/contents/items/InputNumber.vue";

import axios from "axios";
import { reactive, onMounted } from "vue";

// onMounted(async () => {
//   try {
//     const response = await axios.get(
// "http://localhost/api/book_masters/5"
// );
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// });

let url = "http://localhost/api/book_masters/10";

const data = reactive({
  title: "Axios",
  message: "This is axios sample.",
  json_data: null,
});
const getData = () => {
  let id = 10;
  axios.get(url + id).then((result) => {
    console.log(result.data);
    data.json_data = result.data;
  });
};
onMounted(() => {
  getData();
});
</script>

<template>
  <main>
    <Sidebar />

    <div class="edit-container">
      <div class="edit-contents">
        <img src="/images/item1.jpg" alt="" width="150">
        <p>{{ data.json_data ? data.json_data.title : "-" }}</p>
        <p>{{ data.json_data ? data.json_data.author : "-" }}</p>
        <p>{{ data.json_data ? data.json_data.isbn : "-" }}</p>
        <p>読んでる本</p>
      </div>

      <div class="read-time-contents">
        <div class="read-time-contents-items">
          <div class="read-time-contents-item">
            <label class="read-time-text">読書時間</label>
            <InputNumber /><span>分</span>
          </div>
          <label class="read-time-text">コメント</label><CommentInputItem />
        </div>
        <div class="button button-item">
          <ButtonItem>更新</ButtonItem>
          <ButtonItem>削除</ButtonItem>
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

.read-time-contents {
  display: block;
  width: 80%;
  padding: 20px;
}

.read-time-contents-item {
  display: block;
}

.read-time-text {
  display: block;
  margin: 20px 0 10px;
}

.button-item {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>