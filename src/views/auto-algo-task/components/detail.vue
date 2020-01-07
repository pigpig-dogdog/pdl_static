<template>
  <div>
    <div>
      <short-table v-for="data in AutoAlgoTaskDetailTableList" :key="data.id" :infoName="data.info" tableHeight="300px"></short-table>
    </div>
  </div>
</template>

<script>
import { getAutoAlgoTaskDetail } from '@/api/auto-algo-task';
import ShortTable from '@/components/ShortTable/index';
export default {
  name: 'AutoAlgoTaskDetail',
  components: {
    ShortTable
  },
  mounted () {
    this.getAutoAlgoTaskDetail();
  },
  data () {
    return {
      datasetId: this.$route.params.id,
      AutoAlgoTaskDetailTableList: this.GLOBAL.AutoAlgoTaskDetailTableList
    };
  },
  methods: {
    getAutoAlgoTaskDetail () {
      getAutoAlgoTaskDetail(this.datasetId).then((data) => {
        // this.AutoAlgoTaskDetailTableList = data.data;
        // console.log(data.data.algoTrainIdToAcc[80]);
      });
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
