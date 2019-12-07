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
        prop="instanceNumer"
        label="实例数目"
        width="200"
        align=center>
      </el-table-column>
      <el-table-column
        prop="status"
        label="在线化服务状态"
        align=center>
        <template slot-scope="scope">
          <el-tag
            :type="getTagColor(scope.row.status)"
            disable-transitions>{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.pageNumber" :limit.sync="listQuery.pageSize" @pagination="getList" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Pagination from '@/components/Pagination';
export default {
  name: 'AlgoServiceMain',
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
      list: []
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
      if (status === 'WAITING') {
        return 'warning';
      } else if (status === 'SUCCESS') {
        return 'success';
      } else if (status === 'RUNNING') {
        return '';
      } else if (status === 'FAILED') {
        return 'danger';
      }
    }
  }
};
</script>

<style scoped>
</style>
