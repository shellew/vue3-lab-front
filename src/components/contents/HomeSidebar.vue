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
            <span>ステータス</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <RouterLink to="/list">読書中</RouterLink>
            </el-menu-item>
            <el-menu-item index="1-2">
              <RouterLink to="/list">積読本</RouterLink>
            </el-menu-item>
            <el-menu-item index="1-3">
              <RouterLink to="/list">読んだ</RouterLink>
            </el-menu-item>
            <el-menu-item index="1-4">
              <RouterLink to="/list">読みたい</RouterLink>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="1-5">
          <el-icon><document /></el-icon>
          <RouterLink to="/register">新しい本を登録</RouterLink>
        </el-menu-item>
        <el-menu-item index="1-6">
          <el-icon><setting /></el-icon>
          <a href="#">読書目標を設定</a>
        </el-menu-item>
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
</style>
