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
      </el-table-column>
    </el-table>
    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.pageNumber" :limit.sync="listQuery.pageSize" @pagination="getList" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
      list: []
    };
  },
  computed: {
    ...mapGetters([
      'trainList'
    ])
  },
  watch: {
    trainList: function (val) {
      // this.total = 20; // for debug
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
    }
  }
};
</script>
