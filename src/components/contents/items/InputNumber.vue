<template>
    <el-input-number
      v-model="num"
      class="mx-4"
      :min="1"
      :max="10"
      controls-position="right"
      @change="handleChange"
    />
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const num = ref(1)
  const handleChange = (value: number) => {
    console.log(value)
  }
  </script>
  