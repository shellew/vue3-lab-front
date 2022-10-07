<script setup>
import Sidebar from "../components/contents/Sidebar.vue";
import InputNumber from "../components/contents/items/InputNumber.vue";
import EnterDate from "../components/contents/items/EnterDate.vue";
import ButtonItem from "../components/contents/items/ButtonItem.vue";
import { ElNotification } from "element-plus";

import axios from "axios";
import { ref, onMounted } from "vue";

const books = ref([]);

let read_date = ref("");
const read_minute = ref("");

const date = new Date(read_date.value[0]);
console.log(date.toString());

const createReadTime = () => {
  axios
    .post("http://localhost/api/read_times/", {
      date: date.value.toString(),
      read_minute: read_minute.value,
      user_id: 5,
      book_id: 5,
    })
    .then((response) => console.log("log timedata"))
    .catch((error) => console.log(error));
};

onMounted(() => {
  axios
    .get("http://localhost/api/book_masters/1")
    .then((response) => books.value = response.data)
    .catch((error) => console.log(error));
});

const open = () => {
  ElNotification.success({
    title: "通知",
    message: "記録しました",
    showClose: false,
    duration: 4500,
  });
};

const multipleHandlerTime = () => {
  createReadTime();
  open();
};
</script>

<template>
  <main>
    <Sidebar />
    <div class="read-time-container">
      <h4>読書時間を入力</h4>
      <p v-for="book in books">タイトル：{{ book.title }}</p>
      <div class="read-time-date">
        <p>読書日</p>
        <EnterDate v-model="read_date" />
      </div>
      <div class="read-time-minute">
        <p class="">読書時間</p>
        <InputNumber v-model="read_minute" /><span>分</span>
      </div>
      <div class="read-time-btn">
        <div class="button">
          <ButtonItem @click="multipleHandlerTime">記録する</ButtonItem>
        </div>
        <RouterLink to="/edit">
          <ButtonItem>戻る</ButtonItem>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style>
main {
  display: flex;
  font-size: 22px;
}

.read-time-container {
  width: 400px;
  padding-bottom: 40px;
  padding-left: 150px;
  box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
}

.read-time-date {
  display: flex;
}

.read-time-date p {
  margin-right: 50px;
}

.read-time-btn {
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
  margin: 50px auto 0;
}
</style>