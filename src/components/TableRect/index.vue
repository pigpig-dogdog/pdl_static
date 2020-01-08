<template>
  <div class="rect">
    <div class="listTitle">
      <span class="titleText">
        {{ info.name }}
      </span>
    </div>
    <el-table
      :data="list"
      stripe
      style="width: 100%;">
      <el-table-column
        v-if="statusInfo"
        :prop="statusInfo.name"
        label=""
        width="50px"
        align=center>
        <template slot-scope="scope">
          <svg-icon :icon-class="listStatus[scope.status].iconClass"/>
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in tableAttributes"
        :key="item.name"
        :prop="item.name"
        :label="item.label"
        :width="item.columnWidth"
        :fixed="item.fixBoolean"
        align=center>
        <template slot-scope="scope">
          <p @click="judgeJump(item, scope.row)" :title="item.jumpTitle" :class="item.jump? 'jumpCell': ''">{{scope.row[item.name]}}</p>
        </template>
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
        v-if="operations && !operations.detailHidden"
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
export default {
  name: 'ShortTable',
  props: {
    items: {
      type: Array,
      required: true
    },
    infoName: {
      type: String,
      required: true
    },
    isDetail: {
      type: Boolean
    }
  },
  data () {
    return {
      list: [],
      jumpCellClass: '',
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
      if (this.isDetail) {
        for (let i = 0; i < this.info.attributes.length; i++) {
          if (!this.info.attributes[i].detailHidden) {
            this.tableAttributes.push(this.info.attributes[i]);
          }
        }
      } else {
        this.tableAttributes = this.info.attributes;
      }
      this.statusInfo = this.info.status ? this.info.status : '';
      this.operations = this.info.operations ? this.info.operations : '';
      this.list = this.items;
    },
    getTagColor (status, list) {
      for (var i = 0; i < list.length; i++) {
        if (status === list[i].value) {
          return list[i].tagType;
        }
      }
    },
    judgeJump (columnInfo, data) {
      if (columnInfo.jump) {
        this.$router.replace(columnInfo.jump + data[columnInfo.jumpUrlId]);
      }
    }
  }
};
</script>

<style scoped>
.rect {
  /* margin: 20px;
  margin-right: 20px; */
  width: 100%;
  background: #ffffff;
  box-shadow: 5px 5px 3px rgba(0,21,41,.08),0 -3px 1px rgba(0,21,41,.08);
  overflow: auto;
}
.listTitle {
  height: 35px;
  width: 100%;
  border: 1px solid #e9e5e5;
  line-height: 35px;
}
.titleText {
  font-size: 14px;
  padding: 10px;
}
.jumpCell {
  text-decoration:underline;
  color: #409eff;
  cursor: pointer;
}
</style>
