<template>
  <div>
    <el-row :gutter="20" class="rowStyle" type="flex" justify="space-around">
      <el-col :span="1">
        <div class="grid-content bg-purple">
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-input v-model="listQuery.creatorName" placeholder="请输入创建者名字"></el-input>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-input v-model="listQuery.name" placeholder="请输入训练名称"></el-input>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-select v-model="listQuery.framework" placeholder="请选择深度学习框架" style="width:100%">
            <el-option label="全部框架" value=""></el-option>
            <el-option
              v-for="item in GLOBAL.frameworkSearch"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-button type="primary" @click="searchTrain">
            搜索
          </el-button>
        </div>
      </el-col>
      <el-col :span="5"><div class="grid-content bg-purple">
        <el-button type="primary" class="buttonStyle" @click="goCreateTrain">
          新增训练
        </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TrainHeader',
  data () {
    return {
      list: [],
      total: 0,
      listQuery: {
        framework: '',
        creatorName: '',
        name: '', // 训练名称
        pageNumber: 1,
        pageSize: 20
      }
    };
  },
  methods: {
    searchTrain () {
      this.$store.dispatch('train/getTrainList', this.listQuery);
    },
    goCreateTrain () {
      this.$router.push('/train/new');
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
