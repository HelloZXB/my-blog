<template>
  <div class="menu-msg">
    <Row>
      <Col span="24">
        <Card>
          <p slot="title">博客信息</p>
          <p>
            <Icon type="md-bonfire"/>
            文章条数
            <Badge :count="20" class-name="demo-badge-alone"></Badge>
          </p>
          <p>
            <Icon type="md-bonfire"/>
            评论条数
            <Badge :count="20" class-name="demo-badge-alone"></Badge>
          </p>
          <p>
            <Icon type="md-bonfire"/>
            github天数
            <Badge :count="20" class-name="demo-badge-alone"></Badge>
          </p>
          <p>
            <Icon type="md-bonfire"/>
            运行天数
            <Badge :count="20" class-name="demo-badge-alone"></Badge>
          </p>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'MenuMsg'
  }
</script>

<style scoped lang="less">
  .menu-msg {
    padding: 0 10px;

    .ivu-card-body p{
      padding: 5px 0;
    }
  }
</style>
