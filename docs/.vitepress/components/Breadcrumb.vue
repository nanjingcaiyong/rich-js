<template>
  <el-breadcrumb separator="/" style="margin-bottom: 20px">
    <el-breadcrumb-item><a href="/cupshe-js/">Home</a></el-breadcrumb-item>
    <el-breadcrumb-item>{{ category }}</el-breadcrumb-item>
    <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
defineProps({
  category: String,
  title: String
})
</script>