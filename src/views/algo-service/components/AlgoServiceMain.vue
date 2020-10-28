<template>
  <div>
    <el-table
      :data="list"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="300"
        align=center>
      </el-table-column>
      <el-table-column
        prop="creatorName"
        label="创建者"
        width="100"
        align=center>
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        width="200"
        align=center>
      </el-table-column>
      <el-table-column
        prop="modifyTime"
        label="修改时间"
        width="200"
        align=center>
      </el-table-column>
      <el-table-column
        prop="framework"
        label="深度学习框架"
        width="150"
        align=center>
      </el-table-column>
      <el-table-column
        prop="replicas"
        label="实例数目"
        width="100"
        align=center>
      </el-table-column>
      <el-table-column
        prop="availableReplicas"
        label="可用实例数目"
        width="150"
        align=center>
      </el-table-column>
      <el-table-column
        prop="serviceUrl"
        label="服务地址"
        width="210"
        align=center>
      </el-table-column>
      <el-table-column
        prop="status"
        label="在线化服务状态"
        width="200"
        align=center>
        <template slot-scope="scope">
          <el-tag
            :type="getTagColor(scope.row.status)"
            disable-transitions>{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align=center>
        <template slot-scope="scope">
          <div v-if="scope.row.status === 'SERVING'" >
            <el-button
              size="mini"
              @click="openUpdateReplicas(scope.$index, scope.row)"
              type="primary"
              plain>弹性伸缩</el-button><br>
              <el-button
              size="mini"
              @click="openUploadFileDialog(scope.row)"
              type="primary"
              plain>滚动更新</el-button><br>
          </div>
            <el-button
            size="mini"
            :type=scope.row.buttonType
            @click="controlAlgoService(scope.row)"
            plain>{{scope.row.statusText}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.pageNumber" :limit.sync="listQuery.pageSize" @pagination="getList" />

    <el-dialog
      title="弹性伸缩"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form label-width="120px">
        <el-form-item label="实例数目">
          <el-input-number v-model="replicas" :min="1" :max="20"></el-input-number>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleUpdateReplicas">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="上传代码/模型"
      :visible.sync="uploadFileDialogVisible"
      width="40%"
      center>
      <div slot style="text-align: center">
        <el-upload
          class="upload-demo"
          drag
          ref="upload"
          action="no"
          :auto-upload="false"
          :limit="1"
          :file-list="fileList"
          :before-close="closeUploadFileDialog"
          :http-request="uploadCodeModel">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">上传代码/模型zip压缩包</div>
        </el-upload>
        <el-form label-width="150px" style="margin-top: 10px">
        <el-form-item label="主类路径">
          <el-input v-model="mainClassPath"></el-input>
        </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeUploadFileDialog">取 消</el-button>
        <el-button type="primary" @click="handleUploadCodeModel()">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { controlAlgoService, updateReplicas, updateCodeModel } from '@/api/algo-service';
import Pagination from '@/components/vue-element-admin-components/Pagination';
export default {
  name: 'AlgoServiceMain',
  components: {
    Pagination
  },
  data () {
    return {
      total: 0,
      fileList: [],
      dialogVisible: false,
      replicas: '',
      serviceId: '',
      listQuery: {
        pageNumber: 1,
        pageSize: 15
      },
      list: [],
      mainClassPath: null,
      uploadFileDialogVisible: false,
      algoServiceStatusList: this.GLOBAL.algoServiceStatus
    };
  },
  computed: {
    ...mapGetters([
      'algoServiceList'
    ])
  },
  watch: {
    algoServiceList: function (val) {
      this.total = val.totalItemsNumber;
      this.list = val.list;
      var statusList = this.GLOBAL.algoServiceStatus;
      for (var i = 0; i < this.list.length; i++) {
        for (var j = 0; j < statusList.length; j++) {
          if (this.list[i].status === statusList[j].value) {
            this.list[i].statusText = statusList[j].statusText;
            this.list[i].api = statusList[j].api;
            this.list[i].buttonType = statusList[j].buttonType;
          }
        }
      }
    }
  },
  mounted () {
    this.getList();
  },
  methods: {
    getList () {
      // this.$store.dispatch('algo_service/getAlgoServiceList', this.listQuery);
    },
    getTagColor (status) {
      for (var i = 0; i < this.algoServiceStatusList.length; i++) {
        if (status === this.algoServiceStatusList[i].value) {
          return this.algoServiceStatusList[i].tagType;
        }
      }
    },
    openUpdateReplicas (index, row) {
      this.replicas = row.replicas;
      this.serviceId = row.id;
      this.dialogVisible = true;
    },
    controlAlgoService (row) {
      this.$confirm('在线化服务名称：' + row.name, '确定' + row.statusText + '?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        controlAlgoService(row.id, row.api).then((response) => {
          this.getList();
        });
        this.$message({
          type: 'success',
          message: row.statusText + '成功!'
        });
      });
    },
    handleUpdateReplicas () {
      updateReplicas(this.serviceId, this.replicas);
    },
    closeUploadFileDialog () {
      this.$refs.upload.clearFiles();
      this.uploadFileDialogVisible = false;
    },
    openUploadFileDialog (row) {
      this.fileList = [];
      this.uploadFileDialogVisible = true;
      this.serviceId = row.id;
      this.mainClassPath = row.mainClassPath;
    },
    uploadCodeModel (data) {
      const formData = new FormData();
      formData.append('codeZipFile', data.file);
      updateCodeModel(this.serviceId, this.mainClassPath, formData).then(response => {
        data.onSuccess();
        this.$refs.upload.clearFiles();
      }).catch(response => {
        data.onError();
      });
    },
    handleUploadCodeModel () {
      this.$refs.upload.submit();
    }
  }
};
</script>

<style scoped>
</style>
