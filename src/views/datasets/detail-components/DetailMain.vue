<template>
  <div style="margin: 0 0 0 20px">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="'未标注' + '(共' + noAnnotatedNum + '张图片)'" name="noAnnotated">
        <el-row :gutter="20">
          <el-col :span="4" v-for="data in list" :key="data.id" class="cardBottomMargin">
            <el-card :body-style="{ padding: '30px' }">
              <img :src="data.url" class="image">
            </el-card>
          </el-col>
        </el-row>
        <pagination v-show="total > 0" :total="total" :page.sync="listQuery.pageNumber" :limit.sync="listQuery.pageSize" @pagination="getList" />
      </el-tab-pane>
      <el-tab-pane :label="'已标注' + '(共' + annotatedNum + '张图片)'" name="annotated" v-if="datasetAlgoType == 'DETECTION'">
        <el-row :gutter="20">
          <el-col :span="4" v-for="data in list" :key="data.id" class="cardBottomMargin">
            <el-card :body-style="{ padding: '30px' }">
              <img :src="data.url" class="image">
            </el-card>
          </el-col>
        </el-row>
      <pagination v-show="total > 0" :total="total" :page.sync="listQuery.pageNumber" :limit.sync="listQuery.pageSize" @pagination="getList" />
      </el-tab-pane>
      <el-tab-pane v-else v-for="data in datasetTags" :key="data" :label="data + '(共' + imagesNumArray[data] + '张图片)'" :name="data">
        <el-row :gutter="20">
          <el-col :span="4" v-for="data in list" :key="data.id" class="cardBottomMargin">
            <el-card :body-style="{ padding: '30px' }">
              <img :src="data.url" class="image">
            </el-card>
          </el-col>
        </el-row>
      <pagination v-show="total > 0" :total="total" :page.sync="listQuery.pageNumber" :limit.sync="listQuery.pageSize" @pagination="getList" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Pagination from '@/components/vue-element-admin-components/Pagination'; // Secondary package based on el-pagination
import { getImagesNumber } from '@/api/datasets';

export default {
  name: 'DetailMain',
  components: { Pagination },
  data () {
    return {
      currentDate: new Date(),
      total: 0,
      listQuery: {
        annotated: false,
        pageNumber: 1,
        pageSize: 12,
        className: null
      },
      list: [],
      datasetAlgoType: '',
      datasetTags: [],
      activeName: 'noAnnotated',
      imagesNumArray: '',
      noAnnotatedNum: '',
      annotatedNum: ''
    };
  },
  computed: {
    ...mapGetters([
      'imagesList',
      'tagsList',
      'algoType'
    ])
  },
  watch: {
    imagesList: function (val) {
      this.total = val.totalItemsNumber;
      this.list = val.list;
    },
    tagsList: function (val) {
      console.log(val);
      this.datasetTags = val;
    },
    algoType: function (val) {
      console.log('qqq');
      this.datasetAlgoType = val;
    }
  },
  mounted () {
    this.getList();
    this.getImagesNum();
  },
  methods: {
    getList () {
      this.$store.dispatch('datasets/getImagesList', { query: this.listQuery, id: this.$route.params.id });
    },
    getImagesNum () {
      getImagesNumber(this.$route.params.id).then((response) => {
        this.imagesNumArray = response.data.classNameToAnnotatedNumber;
        this.annotatedNum = response.data.annotatedNumber;
        this.noAnnotatedNum = response.data.unAnnotatedNumber;
      });
    },
    handleClick (tab) {
      if (tab.name === 'noAnnotated') {
        this.listQuery.annotated = false;
        this.listQuery.className = null;
      } else if (tab.name === 'annotated') {
        this.listQuery.annotated = true;
        this.listQuery.className = null;
      } else {
        this.listQuery.annotated = true;
        this.listQuery.className = tab.name;
      }
      this.getList();
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
    height:210px;
    display: block;
  }

  .cardBottomMargin {
    margin-bottom: 5px;
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
