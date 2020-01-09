<template>
  <div>
    <el-container class="containerStyle">
      <!-- 侧边 -->
      <el-aside style="background: transparent;" align="middle" justify=center>
        <!-- 标签集 -->
        <el-card class="box-card" >
          <div slot="header" class="clearfix">
            <span>标签集</span>
          </div>
          <div v-for="data in tagsList" :key="data" class="text item">
            <el-radio v-model="tag" :label="data">
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
          <div class="predictBox">
            <el-switch
              v-model="predictOn"
              active-text="预测标注"
              inactive-text="自行标注"
              @change="handlePredict()">
            </el-switch>
          </div>
          <div class="text item">
            <el-button type="success" style="width:100%" @click="handleSubmit()">提交标注</el-button>
          </div>
        </el-card>
      </el-aside>
      <!-- 图片部分 -->
      <el-main align="middle" justify="center">
        <el-row>
          <el-col :span="5" v-for="data in imagesList" :key="data.id" :offset="1">
            <el-card :body-style="{ padding: '0px' }">
              <div class="clearfix" slot="header" style="height:40px;line-height:40px">
                <span style="font-size:30px;color:#409eff" v-if="data.annotation">{{ data.annotation }}</span>
                <span style="font-size:14px;color:#999" v-else>待标注</span>
              </div>
              <img :src="data.url" class="image" @click="classify(data)">
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { getClassifyImagesList, submitClassify } from '@/api/datasets';

export default {
  name: 'ImageTag',
  data () {
    return {
      tagsList: this.$store.state.datasets.tagsList,
      tag: '',
      nowTag: '',
      predictOn: false,
      datasetId: this.$route.params.id,
      imagesList: [],
      listQuery: {
        batchSize: 8,
        clusterNumber: 0,
        startImageId: 0
      },
      classifyList: []
    };
  },
  mounted () {
    let predict = localStorage.getItem('predictOn');
    if (predict !== null) {
      if (predict === 'true') {
        this.predictOn = true;
      } else {
        this.predictOn = false;
      }
    }
    this.getClassifyImages();
  },
  methods: {
    getClassifyImages () {
      if (localStorage.getItem('clusterNumber') !== null) {
        if (localStorage.getItem('clusterNumber') === 'null') {
          this.listQuery.clusterNumber = null;
        } else {
          this.listQuery.clusterNumber = parseInt(localStorage.getItem('clusterNumber'));
        }
      } else {
        this.listQuery.clusterNumber = 0;
      };
      getClassifyImagesList(this.listQuery, this.datasetId).then(response => {
        let data = response.data;
        this.imagesList = data.list;
        let clusterNumber = data.clusterNumber;
        if (clusterNumber === null) {
          this.listQuery.clusterNumber = null;
          localStorage.setItem('clusterNumber', null);
        } else if (data.clusterNumber === parseInt(localStorage.getItem('clusterNumber'))) {
          this.listQuery.clusterNumber = (this.listQuery.clusterNumber + 1) % this.tagsList.length;
          localStorage.setItem('clusterNumber', this.listQuery.clusterNumber);
        } else {
          this.listQuery.clusterNumber = data.clusterNumber;
          localStorage.setItem('clusterNumber', data.clusterNumber);
        }
      });
    },
    handlePredict () {
      localStorage.setItem('predictOn', this.predictOn);
      for (let i = 0; i < this.imagesList.length; i++) {
        let item = this.imagesList[i];
        item.annotation = (item.annotation == null && localStorage.getItem('predictOn')) ? item.predictClassName : item.annotation;
      }
    },
    classify (data) {
      data.annotation = this.tag;
      this.$forceUpdate();
    },
    handleSubmit () {
      for (let i = 0; i < this.imagesList.length; i++) {
        let item = this.imagesList[i];
        if (!item.annotation) {
          this.$notify.warning('还有图片尚未标注！');
          return;
        }
        let img = {
          className: item.annotation,
          imageId: item.id
        };
        this.classifyList.push(img);
      };
      let classifyResult = {
        'imageIdToClassNameList': this.classifyList
      };
      submitClassify(this.datasetId, classifyResult).then(() => {
        this.$notify.success('提交成功');
        this.getClassifyImages();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 250px;
    display: block;
  }

  .text {
    font-size: 14px;
    color: #999
  }

  .predictBox {
    height: 50px;
    width: 100%;
    line-height: 50px;
    font-size: 14px;
    margin-bottom:15px;
    border: 1px solid #d7d7d7;
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
</style>
