<template>
  <div>
    <el-row>
      <el-col :span="5" v-for="data in list" :key="data.id" :offset="1">
        <el-card :body-style="{ padding: '30px' }">
          <img v-if="data.coverImageUrl" :src="data.coverImageUrl" class="image">
          <img v-else src="@/assets/default1.jpg" class="image">
          <div style="padding: 14px;">
            <span>{{data.name}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ data.description }}</time>
              <el-button type="text" class="button" @click="goDatasetsDetail(data.id)">查看详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.pageNumber" :limit.sync="listQuery.pageSize" @pagination="getList" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Pagination from '@/components/Pagination'; // Secondary package based on el-pagination
export default {
  name: 'DatasetsMain',
  components: { Pagination },
  data () {
    return {
      total: 0,
      listQuery: {
        pageNumber: 1,
        pageSize: 8
      },
      list: []
    };
  },
  computed: {
    ...mapGetters([
      'datasetsList'
    ])
  },
  watch: {
    datasetsList: function (val) {
      this.total = val.totalItemsNumber;
      this.list = val.list;
    }
  },
  mounted () {
    this.getList();
  },
  methods: {
    getList () {
      this.$store.dispatch('datasets/getDatasetsList', this.listQuery);
    },
    goDatasetsDetail (datasetId) {
      this.$router.replace('detail/' + datasetId);
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
    height: 230px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
