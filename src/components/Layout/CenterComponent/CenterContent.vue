<template>
  <div class="center-content">
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <revolving-lantern/>
    </Content>
  </div>
</template>

<script>
  import RevolvingLantern from './RevolvingLantern'

  export default {
    name: 'CenterContent',
    components: { RevolvingLantern }
  }
</script>

<style scoped lang="less">
  .center-content {

  }
</style>
