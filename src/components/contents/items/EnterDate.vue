<template>
  <div class="demo-date-picker">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="選択してください"
      @change="changeDateTime"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value1 = ref("");

//①値の変化をchanngeDateTimeに入れる
//②changeDateTimeにvalue1を入れる
//③emitを定義
const changeDateTime = () => {
  emit("changeDateTime", value1);
};

const emit = defineEmits(["changeDateTime"]);
</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker {
  padding: 25px 0;
  text-align: center;
  flex: 1;
}
</style>
