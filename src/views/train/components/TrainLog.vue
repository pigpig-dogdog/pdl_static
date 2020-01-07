<template>
  <div class="log">
    <span v-for="data in trainLog" :key="data">{{data}}<br></span>
  </div>
</template>

<script>
import { getTrainLog } from '@/api/train';
export default {
  name: 'TrainLog',
  data () {
    return {
      trainId: this.$route.params.id,
      trainLog: ''
    };
  },
  mounted () {
    this.getLog();
  },
  methods: {
    getLog () {
      getTrainLog(this.trainId).then(response => {
        var data = response.data;
        this.trainLog = data.split('\n');
      });
    }
  }
};
</script>

<style scoped>
  .log {
    width: 100%;
    padding: 5px;
    background: black;
    color: #ffffff;
    position: absolute;
    height: 100%;
    overflow: auto;
  }
</style>
