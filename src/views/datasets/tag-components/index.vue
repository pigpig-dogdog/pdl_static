<template>
  <div>
    <el-container :style="height" class="containerStyle">
      <!-- 侧边 -->
      <el-aside style="background: transparent;" align="middle" justify=center>
        <!-- 标签集 -->
        <el-card class="box-card" >
          <div slot="header" class="clearfix">
            <span>标签集</span>
          </div>
          <div v-for="data in tagsList" :key="data" class="text item">
            <el-radio  v-model="tag" :label="data">
                <el-tag>
                  {{data}}
                </el-tag>
              </el-radio>
          </div>
        </el-card>
        <!-- 操作 -->
        <el-card style="margin-top: 20px">
          <div slot="header" class="clearfix">
            <span>操作</span>
          </div>
          <el-button-group class="text item">
            <el-button type="primary" icon="el-icon-arrow-left">上一张</el-button>
            <el-button type="primary">下一张<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-button-group>
          <div class="text item">
            <el-button type="success" style="width:100%">提交标注</el-button>
          </div>
        </el-card>
      </el-aside>
      <!-- 图片部分 -->
      <el-main align="middle" justify="center">
        <div
          class="newBox"
          v-for="(data, $index) in boxes"
          :key="$index"
          :style="{
            top: data.y1 + 'px',
            left: data.x1 + 'px',
            width: data.x2 - data.x1 + 'px',
            height: data.y2 - data.y1 + 'px' }">
            <span style=" font-size:30px; color:rgb(40, 13, 158)">
            {{data.tag}}
            </span>
        </div>
        <div
          id="img"
          @mousedown="imageMouseDown($event)"
          @mousemove="imageMouseMove($event)"
          @mouseup="imageMouseUp($event)">
          <img
            src="@/assets/test-images/2.jpg"
            alt="图片"
            ondragstart="return false;"/>
          </div>
      </el-main>
    </el-container>
    <div class="newBox" id="newBox" name="newBox"></div>
  </div>
</template>

<script>
import variables from '@/common/styles/variables.scss';
export default {
  name: 'ImageTag',
  data () {
    return {
      tagsList: this.$store.state.datasets.tagsList,
      tag: '',
      height: {
        height: window.innerHeight - 106 + 'px' // 用于全屏适应
      },
      box: {
        x1: '',
        x2: '',
        y1: '',
        y2: '',
        tag: ''
      },
      boxes: [],
      sidebarWidth: 210,
      navbarHeight: 50
    };
  },
  computed: {
    variables () {
      return variables;
    }
  },
  methods: {
    imageMouseDown (e) {
      if (!this.tag) {
        return;
      }
      this.box.x1 = e.pageX - this.sidebarWidth; // box相对界面的初始横坐标
      this.box.y1 = e.pageY - this.navbarHeight; // box相对界面的初始纵坐标
      var activeBox = document.getElementsByName('newBox')[0];
      console.log(activeBox);
      activeBox.id = 'activeBox';
      activeBox.className = 'newBox';
      activeBox.style.top = this.box.y1 + this.navbarHeight + 'px';
      activeBox.style.left = this.box.x1 + this.sidebarWidth + 'px';
      document.body.appendChild(activeBox);
    },
    imageMouseMove (e) {
      if (!this.tag) {
        return;
      }
      var image = document.getElementById('img');
      if (e.pageX >= image.offsetLeft &&
        e.pageX <= image.offsetLeft + image.offsetWidth &&
        e.pageY >= image.offsetTop &&
        e.pageY <= image.offsetTop + image.offsetHeight
      ) {
        if (document.getElementById('activeBox') !== null) {
          var dragBox = document.getElementById('activeBox');
          dragBox.style.width = e.pageX - this.sidebarWidth - this.box.x1 + 'px';
          dragBox.style.height = e.pageY - this.navbarHeight - this.box.y1 + 'px';
        }
      }
    },
    imageMouseUp (e) {
      if (!this.tag) {
        return;
      }
      alert('up');
      if (document.getElementById('activeBox') !== null) {
        var confirmBox = document.getElementById('activeBox');
        confirmBox.id = '';
        if (confirmBox.offsetWidth < 10 || confirmBox.offsetHeight < 10) {
          document.body.removeChild(confirmBox);
        }
        if (confirmBox.offsetWidth > 10 && confirmBox.offsetHeight > 10) {
          this.box.x2 = e.pageX - this.sidebarWidth;
          this.box.y2 = e.pageY - this.navbarHeight;
          this.box.tag = this.tag;
          this.boxes.push(this.box);
          console.log(this.boxes);
          this.box = {
            x1: '',
            y1: '',
            x2: '',
            y2: '',
            tag: ''
          };
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .containerStyle {
    margin: 30px;
  }

  .newBox {
    background:transparent;
    width: 0px;
    height: 0px;
    position: absolute;
    opacity: 0.5;
    cursor: move;
    border: 3px solid rgb(40, 13, 158);
}
  // .box-card {
  //   // width: 480px;
  //   height: 60%
  // }
</style>
