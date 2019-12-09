<template>
  <div style="box-shadow: 0 1px 4px rgba(0,21,41,.08);">
    <div class="listTitle">
      <span class="titleText">
        {{ title }}
      </span>
    </div>
    <el-table
      :data="list"
      stripe
      height="150"
      style="width: 100%">
      <el-table-column
        v-for="data in tableAttributes"
        :key="data.name"
        :prop="data.name"
        :label="data.label"
        :width="data.columnWitdh"
        :fixed="data.fixBoolean"
        align=center>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getContainerList } from '@/api/k8s-monitor';
export default {
  name: 'ListComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      list: [],
      tableAttributes: [],
      k8sMonitorList: this.GLOBAL.k8sMonitorList
    };
  },
  mounted () {
    this.getList();
  },
  methods: {
    getList () {
      for (var i = 0; i < this.k8sMonitorList.length; i++) {
        var item = this.k8sMonitorList[i];
        if (this.title === item.name) {
          this.tableAttributes = item.attributes;
          console.log(item);
          getContainerList(item.api).then(response => {
            this.list = response.data;
          });
        }
      }
    }
  }
};
</script>

<style scoped>
.listTitle {
  background: rgb(151, 192, 229);
  height: 35px;
  width: 100%;
  color: rgb(245, 243, 243);
  line-height: 35px;
}
.titleText {
  font-size: 18px;
  padding: 10px;
}
</style>
