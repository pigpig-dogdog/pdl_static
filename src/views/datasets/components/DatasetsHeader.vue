<template>
  <div>
    <el-row :gutter="20" class="rowStyle" type="flex" justify="space-around">
      <el-col :span="1">
        <div class="grid-content bg-purple">
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-select v-model="listQuery.algoType" placeholder="请选择算法类型" style="width:100%">
            <el-option
              v-for="item in GLOBAL.algoTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-input v-model="listQuery.creatorName" placeholder="请输入创建者名字"></el-input>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-input v-model="listQuery.name" placeholder="请输入数据集名称"></el-input>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-button type="primary" @click="searchDatasets">
            搜索
          </el-button>
        </div>
      </el-col>
      <el-col :span="5"><div class="grid-content bg-purple">
        <el-button type="primary" class="buttonStyle" @click="goCreateDataset">
          新增数据集
        </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DatasetsHeader',
  data () {
    return {
      list: [],
      total: 0,
      listQuery: {
        algoType: '',
        creatorName: '',
        name: '', // 数据集名称
        pageNumber: 1,
        pageSize: 8
      }
    };
  },
  methods: {
    searchDatasets () {
      this.$store.dispatch('datasets/getDatasetsList', this.listQuery);
    },
    goCreateDataset () {
      this.$router.replace('new');
    }
  }
};
</script>

<style lang="scss" scoped>
  .buttonStyle {
    width: 90%;
  }
  .rowStyle {
     margin: 30px 0 30px 0; // 上右下左
  }
</style>
