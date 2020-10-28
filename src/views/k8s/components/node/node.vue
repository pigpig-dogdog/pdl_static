<template>
  <div>
    <table-rect :items="list" infoName="nodeTable"></table-rect>
    <pagination v-show="total > 0" :total="total" :page.sync="page.pageNumber" :limit.sync="page.pageSize" @pagination="getList" />
  </div>
</template>

<script>
import Pagination from '@/components/vue-element-admin-components/Pagination';
import { getNodeList } from '@/api/k8s-monitor';
import TableRect from '@/components/my-components/TableRect';
export default {
  name: 'K8s-node',
  components: {
    TableRect,
    Pagination
  },
  data () {
    return {
      list: [],
      total: 0,
      page: {
        total: 0,
        pageNumber: 1,
        pagesize: 15
      }
    };
  },
  mounted () {
    this.getList();
  },
  methods: {
    getList () {
      getNodeList().then((response) => {
        this.total = response.data.totalItemsNumber;
        let list = response.data.list;
        for (let i = 0; i < list.length; i++) {
          let conditions = list[i].status.conditions;
          let j = 0;
          let readyStatus = true;
          for (; j < conditions.length && conditions[j].type !== 'Ready'; j++);
          if (conditions[j].type === 'Ready') {
            readyStatus = conditions[j].status;
          }
          let node = {
            name: list[i].metadata.name,
            Ready: readyStatus,
            OS: list[i].status.nodeInfo.osImage,
            CpuCores: list[i].status.capacity.cpu,
            Memory: list[i].status.capacity.memory,
            CreationTime: list[i].metadata.creationTimestamp
          };
          this.list.push(node);
        }
      });
    }
  }
};
</script>
