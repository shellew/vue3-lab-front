<script setup>
import Sidebar from "../components/contents/Sidebar.vue";
import InfoInput from "../components/contents/items/InfoInput.vue";
import InputNumber from "../components/contents/items/InputNumber.vue";
import InputIsbnNumber from "../components/contents/items/InputIsbnNumber.vue";
import StatusOptionItem from "../components/contents/items/StatusOptionItem.vue";
import CommentInputItem from "../components/contents/items/CommentInputItem.vue";
import ButtonItem from "../components/contents/items/ButtonItem.vue";
</script>

<template>
  <main>
    <Sidebar />
    <div class="main-container">
      <label name="title" class="contents-item" >タイトル</label>
      <InfoInput />

      <label name="author" class="contents-item">著者</label>
      <InfoInput />
      <div class="isbn-item">
        <label name="isbn" class="contents-item">ISBN</label>
        <InputIsbnNumber />ー<InputNumber />ー<InputNumber />ー<InputNumber />ー<InputNumber />
      </div>

      <label name="status" class="contents-item">ステータス</label>
      <StatusOptionItem />
      <label name="comment" class="contents-item">コメント</label>
      <CommentInputItem />
      <div class="btn-container">
        <div class="btn">
          <ButtonItem />
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