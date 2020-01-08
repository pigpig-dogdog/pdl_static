<template>
  <div>
    <div style="width:100%;" align=center>
      <img src="@/assets/logo.png" class="pdlLogo"/>
    </div>
    <div class="titleStyle">
      <h1>深度学习平台</h1>
    </div>
    <module-rect v-for="item in modules" :key="item.name" :module="item"></module-rect>

    <!-- 纵向排列 -->
    <!-- <div class="footer">
      <div class="title">
        <h2>支持的深度学习框架</h2>
      </div>
      <div class="imgBox">
        <img src="@/assets/HomeLogo/tensorflow.png" class="imgStyle"/>
      </div>
      <div class="imgBox">
        <img src="@/assets/HomeLogo/pytorch.png" class="imgStyle"/>
      </div>
      <div class="imgBox">
        <img src="@/assets/HomeLogo/keras.png" class="imgStyle"/>
      </div>
    </div> -->

    <!-- 横向排列 -->
    <div class="footer">
      <div class="title">
        <h1>支持的深度学习框架</h1>
      </div>
      <div class="title">
        <el-row>
          <el-col :span="3">
             <div class="grid-content bg-purple">
               <img src="@/assets/blank.png" class="imgStyle"/>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <img src="@/assets/HomeLogo/tensorflow.png" class="imgStyle"/>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <img src="@/assets/HomeLogo/pytorch.png" class="imgStyle"/>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <img src="@/assets/HomeLogo/keras.png" class="imgStyle"/>
            </div>
          </el-col>
          <el-col :span="3">
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import ModuleRect from '@/components/ModuleRect';
export default {
  name: 'Dashboard',
  data () {
    return {
      modules: this.GLOBAL.Modules
    };
  },
  components: {
    ModuleRect
  }
};
</script>

<style scoped>
  .titleStyle {
    width: 100%;
    text-align: center;
    font-size: 23px;
    margin-bottom: 20px;
  }
  .imgStyle {
    height: 70px;
    width:100%;
  }
  .title {
    text-align: center;
    padding: 15px;
  }
  .imgBox {
    text-align: center;
    margin: 15px;
  }
  .footer {
    margin: 30px 0 50px 0;
  }
  .pdlLogo {
    display: flex;
    padding:20px;
    width: 220px;
    height: 110px;
  }
</style>
