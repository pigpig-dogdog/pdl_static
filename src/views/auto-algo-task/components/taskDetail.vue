<template>
  <div>
    <div class="main">
      <table-rect :items="autoAlgoTaskList" infoName="AutoAlgoTaskInfo" :isDetail="true"></table-rect>
      <table-rect :items="trainList" infoName="trainInfo" :isDetail="true"></table-rect>
      <table-rect :items="algoServiceList" infoName="algoServiceInfo" :isDetail="true"></table-rect>
    </div>
  </div>
</template>

<script>
import { getAutoAlgoTaskDetail } from '@/api/auto-algo-task';
import TableRect from '@/components/TableRect/index';
export default {
  name: 'AutoAlgoTaskDetail',
  components: {
    TableRect
  },
  data () {
    return {
      infoList: this.GLOBAL.AutoAlgoTaskDetailList,
      datasetId: this.$route.params.id,
      trainList: [],
      algoServiceList: [],
      autoAlgoTaskList: []
    };
  },
  mounted () {
    this.getAutoAlgoTaskDetail();
  },
  methods: {
    getAutoAlgoTaskDetail () {
      getAutoAlgoTaskDetail(this.datasetId).then((response) => {
        let trainList = response.data.algoTrainList;
        let trainAcc = response.data.algoTrainIdToAcc;
        trainList.forEach((item) => {
          item.acc = trainAcc[item.id];
          this.trainList.push(item);
        });
        let algoService = response.data.algoDeploy;
        let autoAlgoTask = response.data.autoAlgoTask;
        this.algoServiceList.push(algoService);
        this.autoAlgoTaskList.push(autoAlgoTask);
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
