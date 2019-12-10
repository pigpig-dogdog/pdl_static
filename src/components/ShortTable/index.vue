<template>
  <div style="box-shadow: 0 1px 4px rgba(0,21,41,.08);">
    <div class="listTitle">
      <span class="titleText">
        {{ info.name }}
      </span>
    </div>
    <el-table
      :data="list"
      stripe
      height="300"
      style="width: 100%">
      <el-table-column
        v-for="data in tableAttributes"
        :key="data.name"
        :prop="data.name"
        :label="data.label"
        :width="data.columnWidth"
        :fixed="data.fixBoolean"
        align=center>
      </el-table-column>
      <el-table-column
        v-if="statusInfo"
        :prop="statusInfo.name"
        :label="statusInfo.label"
        :width="statusInfo.columnWidth"
        align=center>
        <template slot-scope="scope">
          <el-tag
            :type="getTagColor(scope.row.status, GLOBAL[statusInfo.statusList])"
            disable-transitions>{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        v-if="operations"
        :prop="operations.name"
        :label="operations.label"
        align=center>
        <template>
          <el-button
            size="mini"
            v-for="data in operations.data"
            :key="data.title"
            :type="data.type"
            plain>{{ data.title }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { getList } from '@/api/common';
export default {
  name: 'ShortTable',
  props: {
    infoName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      list: [],
      info: this.GLOBAL[this.infoName],
      tableAttributes: [],
      statusInfo: '',
      operations: ''
    };
  },
  mounted () {
    this.getList();
  },
  methods: {
    getList () {
      this.tableAttributes = this.info.attributes;
      console.log(this.info.status);
      this.statusInfo = this.info.status ? this.info.status : '';
      this.operations = this.info.operations ? this.info.operations : '';
      // TODO：本地数据测试
      this.list = this.GLOBAL[this.info.data];
      // getList(this.info.api).then(response => {
      //   this.list = response.data;
      // });
    },
    getTagColor (status, list) {
      for (var i = 0; i < list.length; i++) {
        if (status === list[i].value) {
          return list[i].tagType;
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
