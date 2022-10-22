<template>
  <h3>{{ getBookTitle }}</h3>
  <h3>{{ getBookAuthor }}</h3>
  <el-input v-model="input" size="large" placeholder="入力してください" />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const input = ref("");
defineProps({
  getBookTitle: String,
  getBookAuthor: String,
});
</script>
