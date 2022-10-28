<script setup lang="ts">
import { ref } from "vue";
const props = ref();
props.value = {
  disabled: Boolean,
};
</script>
<template>
  <button type="button" class="button" :disabled="props.disabled">
    <slot />
  </button>
</template>
<style scoped>
.button {
  width: 120px;
  padding: 6px 8px;
  border: none;
  background: rgb(54, 201, 255);
  color: rgb(19, 55, 85);
  border-radius: 6px;
  transition: 0.3s;
}
.button:hover {
  background: rgb(8, 122, 163);
  color: #fff;
}
.button:disabled {
  background: rgb(205, 205, 205);
  color: rgb(88, 88, 88);
}
</style>
