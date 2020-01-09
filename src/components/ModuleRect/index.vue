<template>
  <div class="rect" @click="jump">
    <el-container>
      <el-aside class="left">
        <svg-icon :icon-class="module.icon" class="iconStyle"/>
      </el-aside>
      <el-main class="right">
        <div class="title">
          <p>{{module.title}}</p>
        </div>
        <div class="content">
          <p>{{module.content}}</p>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'ModuleRect',
  props: {
    module: {
      type: Object,
      required: true
    }
  },
  methods: {
    jump () {
      this.$router.push(this.module.id + '/index');
    }
  }
};
</script>

<style scoped>
  .rect {
    margin: 20px;
    width: 95%;
    height:130px;
    background: #ffffff;
    box-shadow: 5px 5px 3px rgba(0,21,41,.08),0 -3px 1px rgba(0,21,41,.08);
  }
  .left {
    overflow: hidden;
    height: 130px;
    width: 200px;
    padding: 10px;
    background: #ffffff;
    text-align: center;
  }
  .right {
    overflow: hidden;
    height: 130px;
    width: 100%;
    padding: 10px;
  }
  .title {
    font-family: "Roboto",sans-serif;
    font-size: 18px;
  }
  .iconStyle {
    width: 70%;
    height: 70px;
    margin-top: 20px;
  }
  .content {
    white-space: pre-line;
  }
</style>
