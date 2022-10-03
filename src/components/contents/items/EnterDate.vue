<template>
    <div class="demo-date-picker">
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="選択してください"
            :size="size"
        />
    </div>
</template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const size = ref<'large'>('')
  
  const value1 = ref('')
  
  const disabledDate = (time: Date) => {
    return time.getTime() > Date.now()
  }
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
  