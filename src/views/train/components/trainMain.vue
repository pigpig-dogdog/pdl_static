<template>
  <div>
    <el-table
      :data="list"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="180"
        align=center>
      </el-table-column>
      <el-table-column
        prop="creatorName"
        label="创建者"
        width="180"
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
        width="200"
        align=center>
      </el-table-column>
      <el-table-column
        prop="status"
        label="训练状态"
        align=center>
        <template slot-scope="scope">
          <el-tag
            :type="getTagColor(scope.row.status)"
            disable-transitions>{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
        <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="openTrainLog(scope.$index, scope.row)"
            type="primary"
            plain>查看日志</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.pageNumber" :limit.sync="listQuery.pageSize" @pagination="getList" />

    <!-- 训练日志弹窗 -->
    <div class="train-log">
      <el-dialog
        title="训练日志"
        :visible.sync="trainLogDialogVisible"
        width="40%">
        <span slot="title" class="dialog-title">
          <svg-icon icon-class = 'log' style="font-size:20px"/>
          <span>训练日志</span>
        </span>
        <el-row v-for="(data, index) in trainLog" :key="data" class="logRow" :gutter="10">
          <el-col :span="1" style="text-align:right;padding-right:5px">{{ index + 1 }}</el-col>
          <el-col :span="18" style="padding-keft:10px">{{ data }}</el-col>
        </el-row>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getTrainLog } from '@/api/train';
import Pagination from '@/components/Pagination';
export default {
  name: 'TrainMain',
  components: {
    Pagination
  },
  data () {
    return {
      total: 0,
      listQuery: {
        pageNumber: 1,
        pageSize: 20
      },
      list: [],
      trainLogDialogVisible: false,
      trainLog: [],
      trainName: '',
      trainStatusList: this.GLOBAL.trainStatus
    };
  },
  computed: {
    ...mapGetters([
      'trainList'
    ])
  },
  watch: {
    trainList: function (val) {
      this.total = val.totalItemsNumber;
      this.list = val.list;
    }
  },
  mounted () {
    this.getList();
  },
  methods: {
    getList () {
      this.$store.dispatch('train/getTrainList', this.listQuery);
    },
    openTrainLog (index, row) {
      this.trainName = row.name;
      this.trainLogDialogVisible = true;
      var data = 'Download code\neee\nddd\nssss\nssss\nssss\nssss\nssss\nssss\nssss\nssss\nssss\nssss\nssss\nssss\nssss\nssss\nssss\nssss\nssss';
      this.trainLog = data.split('\n');
      getTrainLog(row.id).then(response => {
        var data = response.data;
        this.trainLog = data.split('\n');
      });
    },
    getTagColor (status) {
      for (var i = 0; i < this.trainStatusList.length; i++) {
        if (status === this.trainStatusList[i].value) {
          console.log(status);
          return this.trainStatusList[i].tagType;
        }
      }
    }
  }
};
</script>

<style lang="scss">

.train-log {
  display: flex;
    justify-content: center;
  .el-dialog {
    // margin: 0 auto !important;
    height: 60%;
    overflow: hidden;
  }
  .el-dialog__body {
    background: black;
    color: #ffffff;
    position: absolute;
    left: 0;
    top: 50px;
    bottom: 0;
    right: 0;
    padding: 10px 0 0 0;
    z-index: 1;
    overflow: hidden;
    overflow-y: auto;
  }
  .el-dialog__header {
    padding: 16px;
    font-size: 18px;
  }
}

</style>

<style scoped>
.logRow {
  font-size: 18px;
  /* margin:5px; */
}
</style>
