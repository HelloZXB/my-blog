<template>
  <div class="open-breadcrumb">
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem>Layout</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'OpenBreadcrumb'
  }
</script>

<style scoped lang="less">
  .open-breadcrumb{
    position: fixed;
    width: 939px;
    overflow: hidden;
    background-color: #f5f7f9;
  }
</style>
