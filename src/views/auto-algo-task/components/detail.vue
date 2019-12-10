<template>
  <div>
    <!-- 按条件查询也可以写成一个公用组件 -->
    <el-row :gutter="20" class="rowStyle" type="flex" justify="center" align="middle">
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-button type="primary">
            运行自助式算法任务
          </el-button>
        </div>
      </el-col>
    </el-row>
    <div v-if="datasetId == 2">
      <short-table v-for="data in AutoAlgoTaskDetailTableList" :key="data.id" :infoName="data.info"></short-table>
    </div>
  </div>
</template>

<script>
import ShortTable from '@/components/ShortTable/index';
export default {
  name: 'AutoAlgoTaskDetail',
  components: {
    ShortTable
  },
  data () {
    return {
      datasetId: this.$route.params.id,
      AutoAlgoTaskDetailTableList: this.GLOBAL.AutoAlgoTaskDetailTableList
    };
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
