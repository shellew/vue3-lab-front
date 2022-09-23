<template>
  <el-select v-model="value" class="m-2" placeholder="Select" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template> 

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");

const options = [
  {
    value: 978,
    label: 978,
  },
  {
    value: 979,
    label: 979,
  },
];
</script>