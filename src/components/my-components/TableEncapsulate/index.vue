<template>
  <el-table
      :data="list"
      stripe
      style="width: 100%;">
      <el-table-column
        v-for="item in tableAttributes"
        :key="item.name"
        :prop="item.name"
        :label="item.label"
        :width="item.columnWidth"
        align=center>
      </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'TableEncapsulate',
  props: {
    tableAttributes: {
      type: Array,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  }
};
</script>
