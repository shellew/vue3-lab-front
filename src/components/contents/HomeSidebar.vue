<template>
  <el-aside class="tac">
    <el-col :span="16">
      <h5 class="mb-2"></h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span class="sidebar">ステータス</span>
          </template>
          <el-menu-item-group>

            <RouterLink to="/list" class="sidebar">
              <el-menu-item index="1-1">
                <p>読書中</p>
              </el-menu-item>
            </RouterLink>

            <RouterLink to="/list" class="sidebar">
              <el-menu-item index="1-2">
                <p>積読本</p>
              </el-menu-item>
            </RouterLink>

            <RouterLink to="/list" class="sidebar">
              <el-menu-item index="1-3">
                <p>読んだ</p>
              </el-menu-item>
            </RouterLink>

            <RouterLink to="/list" class="sidebar">
              <el-menu-item index="1-4">
                <p>読みたい</p>
              </el-menu-item>
            </RouterLink>

          </el-menu-item-group>
        </el-sub-menu>

        <RouterLink to="/register" class="sidebar">
          <el-menu-item index="1-5">
            <el-icon><document /></el-icon>
            <p>新しい本を登録</p>
          </el-menu-item>
        </RouterLink>

        <a href="#" class="sidebar">
          <el-menu-item index="1-6">
            <el-icon><setting /></el-icon>
            <p>読書目標を設定</p>
          </el-menu-item>
        </a>

      </el-menu>
    </el-col>
  </el-aside>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { Document, Menu as IconMenu, Setting } from "@element-plus/icons-vue";
const handleOpen = (value) => {
  console.log(value);
};
const handleClose = (value) => {
  console.log(value);
};
</script>

<style>
a {
  color: #000;
  text-decoration: none;
}

.sidebar {
  display: block;
}
</style>
