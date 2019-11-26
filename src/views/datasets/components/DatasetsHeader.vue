<template>
  <div>
    <el-button type="primary" class="buttonStyle" @click="getList">
      新增数据集
    </el-button>
  </div>
</template>

<script>
import { getDatasetsList } from '@/api/datasets';
export default {
  name: 'DatasetsHeader',
  data () {
    return {
      list: []
    };
  },
  methods: {
    getList () {
      getDatasetsList().then(response => {
        this.list = response.data.list;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .buttonStyle {
    margin: 30px 0 50px 30px; // 上右下左
  }
</style>
