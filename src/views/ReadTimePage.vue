<script setup>
import Sidebar from "../components/contents/Sidebar.vue";
import InputNumber from "../components/contents/items/InputNumber.vue";
import EnterDate from "../components/contents/items/EnterDate.vue";
import ButtonItem from "../components/contents/items/ButtonItem.vue";

import axios from "axios";
import { ref, reactive, onMounted } from "vue";

// メモ
// const createReadTime = () => {
//   axios
//   .post("http://localhost/api/read_times/"), {
//     read_date: '',
//     read_time: '',
//   }
//   .then((response) => )
// }

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
    <div class="read-time-container">
      <h4>読書時間を入力</h4>
      <p v-for="book in books">{{ book.title }}</p>
      <div class="read-time-date">
        <p>読書日</p>
        <EnterDate />
      </div>
      <div class="read-time-minute">
        <p class="">読書時間</p>
        <InputNumber /><span>分</span>
      </div>
      <div class="read-time-btn">
        <div class="button">
          <ButtonItem v-on="createReadTime">記録する</ButtonItem>
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
  width: 100%;
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
}
</style>