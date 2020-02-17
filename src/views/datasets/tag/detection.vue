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
            <el-button type="primary" icon="el-icon-arrow-left" @click="getPrevImage()">上一张</el-button>
            <el-button type="primary" @click="getNextImg()">下一张<i class="el-icon-arrow-right el-icon--right"></i></el-button>
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
            top: data.y + 'px',
            left: data.x + 'px',
            width: data.width + 'px',
            height: data.height + 'px' }">
            <span class="boxStyle">
            {{data.className}}
            </span>
        </div>
        <div class="newBox" id="newBox" name="newBox"></div>
        <div
          id="img"
          class="imgBox"
          @mousedown="imageMouseDown($event)"
          @mousemove="imageMouseMove($event)"
          @mouseup="imageMouseUp($event)">
          <img
            :src="imgUrl"
            alt="图片"
            :width=imgWidth
            :height=imgHeight
            ondragstart="return false;"/>
          </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import variables from '@/common/styles/variables.scss';
import { getNextImage, getPrevImage } from '@/api/datasets';
export default {
  name: 'ImageDetection',
  data () {
    return {
      imgBoxWidth: 1000,
      imgBoxHeight: 700,
      imgWidth: '',
      imgHeight: '',
      scale: '',
      tagsList: this.$store.state.datasets.tagsList,
      tag: '',
      imgUrl: '',
      datasetId: this.$route.params.id,
      listQuery: {
        currentImageId: 0
      },
      height: {
        height: window.innerHeight - 106 + 'px' // 用于全屏适应
      },
      box: {
        x: '',
        y: '',
        width: '',
        height: '',
        className: ''
      },
      startActive: {
        x: '',
        y: ''
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
  mounted () {
    this.getNextImg();
  },
  methods: {
    getNextImg () {
      this.boxes = [];
      getNextImage(this.listQuery, this.datasetId).then(response => {
        let data = response.data;
        this.imgUrl = data.imageDO.url;
        let img = new Image();
        img.src = data.imageDO.url;
        let w = img.width;
        let h = img.height;
        let imgBoxScale = (this.imgBoxWidth * 1.00 / this.imgBoxHeight * 1.00).toFixed(2);
        let imgScale = w / h;
        console.log(imgBoxScale, w, h, imgScale);
        if (imgScale >= imgBoxScale) {
          this.imgHeight = this.imgBoxWidth * h / w + 'px';
          this.imgWidth = this.imgBoxWidth + 'px';
        } else {
          this.imgWidth = this.imgBoxHeight * w / h + 'px';
          this.imgHeight = this.imgBoxHeight + 'px';
        }
        this.listQuery.currentImageId = data.imageDO.id;
        // let bboxes = data.bboxes;
      });
      // var image = document.getElementById('img');
      // let box = {
      //   x: image.offsetLeft,
      //   y: image.offsetTop,
      //   width: image.offsetWidth,
      //   height: image.offsetHeight,
      //   className: '111'
      // };
      // this.boxes.push(box);
    },
    getPrevImage () {
      getPrevImage(this.listQuery, this.datasetId).then(response => {
        let data = response.data;
        this.imgUrl = data.imageDO.url;
        this.listQuery.currentImageId = data.imageDO.id;
        // let bboxes = data.bboxes;
      });
    },
    imageMouseDown (e) {
      this.$notify.warning('down');
      if (!this.tag) {
        this.$notify.warning('请先选择标签！');
        return;
      }
      this.box.x = e.pageX - this.sidebarWidth; // box相对界面的初始横坐标
      this.box.y = e.pageY - this.navbarHeight; // box相对界面的初始纵坐标
      var activeBox = document.getElementsByName('newBox')[0];
      activeBox.id = 'activeBox';
      activeBox.className = 'newBox';
      activeBox.setAttribute('ondragover', 'allowDrop($event');
      this.startActive.x = e.pageX;
      this.startActive.y = e.pageY;
      activeBox.style.top = e.pageY + 'px';
      activeBox.style.left = e.pageX + 'px';
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
          var activeBox = document.getElementById('activeBox');
          activeBox.style.width = Math.max(e.pageX, this.startActive.x) - Math.min(e.pageX, this.startActive.x) + 'px';
          activeBox.style.height = Math.max(e.pageY, this.startActive.y) - Math.min(e.pageY, this.startActive.y) + 'px';
          // e.pageX - this.sidebarWidth - this.box.x + 'px';
          // activeBox.style.height = e.pageY - this.navbarHeight - this.box.y + 'px';
          activeBox.style.top = Math.min(e.pageY, this.startActive.y) + 'px';
          activeBox.style.left = Math.min(e.pageX, this.startActive.x) + 'px';
        }
      }
    },
    imageMouseUp (e) {
      if (!this.tag) {
        return;
      }
      this.$notify.warning('up');
      if (document.getElementById('activeBox') !== null) {
        var confirmBox = document.getElementById('activeBox');
        confirmBox.id = '';
        if (confirmBox.offsetWidth < 10 || confirmBox.offsetHeight < 10) {
          document.body.removeChild(confirmBox);
        }
        if (confirmBox.offsetWidth > 10 && confirmBox.offsetHeight > 10) {
          this.box.width = e.pageX - this.sidebarWidth - this.box.x;
          this.box.height = e.pageY - this.navbarHeight - this.box.y;
          this.box.className = this.tag;
          this.boxes.push(this.box);
          this.box = {
            x: '',
            y: '',
            width: '',
            height: '',
            className: ''
          };
          confirmBox.style = '';
        }
      }
    },
    allowDrop (e) {
      e.preventDefault();
    },
    drop (e) {
      e.preventDefault();
      // var data = event.dataTransfer.getData('Text');
    }
  }
};
// TODO:拉框不跟随图片无法自适应，一旦网页结构改变，框就偏离了原来的位置
// TODO:有时候会出现无法坚持mouseup的情况
</script>

<style lang="scss" scoped>
$imgBoxWidth: 1000px;
$imgBoxHeight: 700px;

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
    border: 3px solid red;
}

.boxStyle {
   font-size:30px;
  //  color:rgb(40, 13, 158)
   color:red
}

.imgBox {
  width: $imgBoxWidth;
  height: $imgBoxHeight;
  background: #FAFAFA;
}
</style>
