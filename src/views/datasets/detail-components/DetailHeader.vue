<template>
  <div style="margin: 20px 0 20px 20px">
    <el-row type="flex" align="middle" justify="center">
      <!-- 数据集封面查看上传 -->
      <el-col :span="4" align="middle" justify="center">
        <el-upload
          class="avatar-uploader"
          action="no"
          :http-request="uploadCover"
          :show-file-list="false"
          :on-success="handleCoverSuccess"
          :before-upload="beforeCoverUpload">
          <img v-if="coverImageUrl" :src="coverImageUrl" class="avatar">
          <img v-else src="@/assets/default2.png" class="avatar">
        </el-upload>
      </el-col>

      <!-- 数据集详细信息展示   数据集上传图片-->
      <el-col :span="9">
        <el-card class="box-card" style="width:100%">
          <div slot="header" class="clearfix">
            <span style="font-size:20px">{{detail.name}}（共{{detail.imagesNumber}}张图片）</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="uploadImageDialogVisible = true">添加图片</el-button>
          </div>
          <div class="text item">
            <el-row>
              <el-col>{{ detail.description }}</el-col>
            </el-row>
          </div>
          <div class="text item">
            <el-row>
              <el-col>创建者：{{ detail.creatorName }}</el-col>
            </el-row>
          </div>
          <div class="text item">
            <el-row>
              <el-col>创建时间：{{ detail.createTime }}</el-col>
            </el-row>
          </div>
          <div class="text item">
            <el-row>
              <el-col>算法类型：{{ detail.algoType }}</el-col>
            </el-row>
          </div>
          <div class="text item">
            <el-row>
              <el-col>标签列表：
                <el-tag
                  :key="tag"
                  v-for="tag in classesNameList"
                  :disable-transitions="false"
                  style="margin-left:2px">
                  {{tag}}
                </el-tag>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>

      <el-dialog
        title="上传图片"
        :visible.sync="uploadImageDialogVisible"
        width="40%"
        center>
        <div slot style="text-align: center">
          <el-upload
            class="upload-demo"
            drag
            action="no"
            :http-request="uploadImage"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
          </el-upload>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="uploadImageDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="uploadImageDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 去标注 -->
      <el-col :span="4" align="left" justify="center">
        <el-container>
          <el-header>
            <el-button type="primary" class="goTagBtn" @click="goImageTag">
              标注图片
              <svg-icon icon-class="Go" style="margin-left: 10px" />
            </el-button>
          </el-header>
          <el-footer>
             <el-button type="primary" class="goAutoAlgoTaskBtn" @click="goAutoAlgoTask">
              自助式算法任务
            <svg-icon icon-class="Go" style="margin-left: 10px" />
            </el-button>
          </el-footer>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getDatasetDetail, uploadImage } from '@/api/datasets';
export default {
  name: 'DetailHeader',
  data () {
    return {
      detail: '',
      tagUrl: '',
      algoTypes: this.GLOBAL.algoTypes,
      coverImageUrl: '',
      uploadQuery: { isCoverImage: false },
      uploadImageDialogVisible: false,
      classesNameList: [],
      listQuery: {
        annotated: false,
        pageNumber: 1,
        pageSize: 12
      }
    };
  },
  mounted () {
    this.getDetail();
  },
  methods: {
    getDetail () {
      getDatasetDetail(this.$route.params.id).then(response => {
        this.detail = response.data;
        this.coverImageUrl = response.data.coverImageUrl;
        for (var i = 0; i < this.algoTypes.length; i++) {
          if (response.data.algoType === this.algoTypes[i].value) {
            this.detail.algoType = this.algoTypes[i].label;
            this.tagUrl = this.algoTypes[i].tagUrl;
          }
        }
        this.classesNameList = response.data.classesNames.split(' ');
        this.$store.dispatch('datasets/getTagsList', this.classesNameList);
      });
    },
    uploadCover (param) {
      this.uploadQuery.isCoverImage = true;
      const formData = new FormData();
      formData.append('file', param.file);
      uploadImage(this.uploadQuery, this.$route.params.id, formData).then(response => {
        param.onSuccess();
      }).catch(response => {
        console.log('图片上传失败');
        param.onError();
      });
    },
    uploadImage (param) {
      this.uploadQuery.isCoverImage = false;
      const formData = new FormData();
      formData.append('file', param.file);
      uploadImage(this.uploadQuery, this.$route.params.id, formData).then(response => {
        param.onSuccess();
        this.$store.dispatch('datasets/getImagesList', { query: this.listQuery, id: this.$route.params.id });
      }).catch(response => {
        console.log('图片上传失败');
        param.onError();
      });
    },
    handleCoverSuccess (res, file) {
      this.coverImageUrl = URL.createObjectURL(file.raw);
    },
    beforeCoverUpload (file) {
      // TODO:图片格式可以为任意
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG 格式或 PNG 格式!');
      }
      return isJPG || isPNG;
    },
    goImageTag () {
      this.$router.push(this.$route.params.id + this.tagUrl);
    },
    goAutoAlgoTask () {
      this.$router.push(this.$route.params.id + '/auto-algo-task');
    }
  }
};
</script>

<style lang="scss" scoped>
$coverWidth: 250px;
$coverHeight: 250px;

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

  .box-card {
    width: 480px;
  }

  .goTagBtn {
    width: 150px;
    font-size: 18px;
  }
  .goAutoAlgoTaskBtn {
    width: 200px;
    font-size: 18px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 250px;
    height: 250px;
    line-height: 250px;
    text-align: center;
  }
  .avatar {
    width: 250px;
    height: 250px;
    display: block;
  }
</style>
