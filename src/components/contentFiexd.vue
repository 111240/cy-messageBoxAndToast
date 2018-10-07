<template>
  <div class="box-content">
    <div class="header">header</div>
    <div style="height: 1.333333rem;"></div>
    <div class="content">
      <div class="item">content</div>
      <div class="item">content</div>
      <div class="item">content</div>
      <div class="item">content</div>
      <div class="item">content</div>
      <div class="item">content</div>
      <div class="item">content</div>
      <div class="item">content</div>
      <div class="item">content</div>
      <div class="item">content</div>
    </div>
    <div class="footer">footer</div>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="scss">
.box-content{
  position: relative;
  overflow: hidden;
  height: 100%;
  .header{
    width: 100%;
    height: 1.333333rem;
    background-color: #ccc;
    position: fixed;
    top: 0px;
    z-index: 99;
  }
  .content{
    width: 100%;
    height: 100%;
    background-color: white;
    overflow: auto;
    .item{
      height: 10rem;
    }
  }
  .footer{
    width: 100%;
    position: fixed;
    bottom: 0px;
    height: 1.333333rem;
    background-color: pink;
  }
}
</style>
