<template>
  <div>
    <div v-if="datasetId == 2">
      <short-table v-for="data in AutoAlgoTaskDetailTableList" :key="data.id" :infoName="data.info" :tableHeight="300"></short-table>
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
