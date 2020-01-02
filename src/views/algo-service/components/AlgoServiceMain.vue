<template>
  <div>
    <el-table
      :data="list"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="120"
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
          <el-button
            size="mini"
            @click="openUpdateReplicas(scope.$index, scope.row)"
            type="primary"
            plain>弹性伸缩</el-button>
            <el-button
            size="mini"
            @click="uploadFileDialogVisible = true"
            type="primary"
            plain>滚动更新</el-button>
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
      <el-form label-width="80px">
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
          action="no">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">上传代码/模型zip压缩包</div>
        </el-upload>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="uploadFileDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="uploadFileDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { controllAlgoService, updateReplicas, updateCodeModel } from '@/api/algo-service';
import Pagination from '@/components/Pagination';
export default {
  name: 'AlgoServiceMain',
  components: {
    Pagination
  },
  data () {
    return {
      total: 0,
      dialogVisible: false,
      replicas: '',
      serviceId: '',
      listQuery: {
        pageNumber: 1,
        pageSize: 10
      },
      list: [],
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
    }
  },
  mounted () {
    this.getList();
  },
  methods: {
    getList () {
      this.$store.dispatch('algo_service/getAlgoServiceList', this.listQuery);
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
      controllAlgoService(row.id, row.api);
    },
    handleUpdateReplicas () {
      updateReplicas(this.serviceId, this.replicas);
    },
    updateCodeModel () {
      updateCodeModel();
    }
  }
};
</script>

<style scoped>
</style>
