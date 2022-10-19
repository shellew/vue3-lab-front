<script setup>
import HomeSidebar from "../components/contents/HomeSidebar.vue";
import InputNumber from "../components/contents/items/InputNumber.vue";
import EnterDate from "../components/contents/items/EnterDate.vue";
import ButtonItem from "../components/contents/items/ButtonItem.vue";
import { ElNotification } from "element-plus";

import axios from "axios";
import { ref, onMounted } from "vue";

//①子コンポーネント（EnterDate.vue）の値を受け取る
//②受け取った値をdate型に変更する
//③read_dateに代入する
const changeDateTimeP = (element) => {
  const date = new Date(element.value);
  console.log("changeDateTimeP:" + date);
  read_date.value = date;
};

const books = ref([]);
const read_date = ref(0);
const read_minute = ref("");

const createReadTime = () => {
  axios
    .post("http://localhost/api/read_times/", {
      read_date: read_date.value,
      read_minute: read_minute.value,
      user_id: 8,
      book_id: 8,
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

onMounted(() => {
  axios
    .get("http://localhost/api/book_masters/8")
    .then((response) => (books.value = response.data))
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
    <HomeSidebar />
    <div class="read-time-container">
      <h4>読書時間を入力</h4>
      <p v-for="(book, key) in books" :key="key">タイトル：{{ book.title }}</p>
      <div class="read-time-date">
        <p>読書日</p>
        <EnterDate v-model="read_date" @changeDateTime="changeDateTimeP" />
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
  margin-left: 100px;
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