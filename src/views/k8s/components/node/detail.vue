<template>
  <div>

    <!-- Metadata -->
    <div class="rect">
      <el-collapse accordion v-model="collapseMetadata">
        <el-collapse-item name="Metadata">
          <template slot="title">
            Metadata
          </template>
          <!-- <el-divider></el-divider> -->
          <!-- metadata参数 -->
          <el-table
            :data="metadata"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="Name"
              width="180">
            </el-table-column>
            <el-table-column
              prop="creationTime"
              label="Creation Time"
              width="180">
            </el-table-column>
            <el-table-column
              prop="age"
              label="Age"
              width="180">
            </el-table-column>
            <el-table-column
              prop="uid"
              label="UID">
            </el-table-column>
          </el-table>
          <!-- metadataLabels -->
          <el-table
            :data="labels"
            style="width: 100%">
            <el-table-column
              prop="labels"
              label="Labels">
              <template slot-scope="scope">
                <el-tag type="info" v-for="data in labelsKeys" :key="data" class="tag">
                  {{data}}:{{scope.row.labels[data]}}
                </el-tag>
            </template>
            </el-table-column>
          </el-table>
          <!-- metadataAnnotations -->
          <el-table
            :data="annotations"
            style="width: 100%">
            <el-table-column
              prop="annotations"
              label="Annotations">
              <template slot-scope="scope">
                <el-tag type="info" v-for="data in annotationsKeys" :key="data" class="tag">
                  {{data}}：{{scope.row.annotations[data]}}
                </el-tag>
            </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </div>

    <!-- Resource Information -->
    <div class="rect">
      <el-collapse accordion v-model="collapseResourceInfo">
        <el-collapse-item name="resourceInfo">
          <template slot="title">
            Resource Information
          </template>
          <!-- Resource Information参数 -->
          <el-table
            :data="resourceInfo"
            style="width: 100%">
            <el-table-column
              prop="podCIDR"
              label="PodCIDR">
            </el-table-column>
          </el-table>
          <!-- Resource Information Addresses -->
          <el-table
            :data="labels"
            style="width: 100%">
            <el-table-column
              prop="addresses"
              label="Addresses">
              <template slot-scope="">
                <el-tag type="info" v-for="data in addresses" :key="data.type" class="tag">
                  {{data.type}}:{{data.address}}
                </el-tag>
            </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </div>

    <!-- System Information -->
    <div class="rect">
      <el-collapse accordion v-model="collapseSystemInfo">
        <el-collapse-item name="systemInfo">
          <template slot="title">
            System Information
          </template>
          <table-encapsulate :list="systemInfo" :tableAttributes="systemInfoAttributes"></table-encapsulate>
        </el-collapse-item>
      </el-collapse>
    </div>

    <!-- Conditions -->
    <div class="rect">
      <el-collapse accordion v-model="collapseConditions">
        <el-collapse-item name="conditions">
          <template slot="title">
            Conditions
          </template>
          <table-encapsulate :list="conditions" :tableAttributes="conditionsAttributes"></table-encapsulate>
        </el-collapse-item>
      </el-collapse>
    </div>

    <!-- Images -->
    <div class="rect">
      <el-collapse accordion v-model="collapseImages">
        <el-collapse-item name="images">
          <template slot="title">
            Images
          </template>
          <table-encapsulate :list="images" :tableAttributes="imagesAttributes"></table-encapsulate>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import TableEncapsulate from '@/components/my-components/TableEncapsulate';
import { getNodeDetail } from '@/api/k8s-monitor';
export default {
  name: 'NodeDetail',
  components: {
    TableEncapsulate
  },
  data () {
    return {
      // Metadata
      metadata: [],
      labels: [],
      labelsKeys: [],
      annotations: [],
      annotationsKeys: [],
      collapseMetadata: 'Metadata',

      // resource Information
      resourceInfo: [],
      addresses: [],
      collapseResourceInfo: 'resourceInfo',

      // System information
      systemInfo: [],
      systemInfoAttributes: [
        {
          name: 'machineID',
          columnWidth: 200,
          label: 'Machine ID'
        },
        {
          name: 'systemUUID',
          columnWidth: 200,
          label: 'System UUID'
        },
        {
          name: 'bootID',
          columnWidth: 200,
          label: 'Boot ID'
        },
        {
          name: 'containerRuntimeVersion',
          columnWidth: 200,
          label: 'Container Runtime Version'
        },
        {
          name: 'kernelVersion',
          columnWidth: 200,
          label: 'kernel Version'
        },
        {
          name: 'osImage',
          columnWidth: 200,
          label: 'OS Image'
        },
        {
          name: 'kubeletVersion',
          columnWidth: 200,
          label: 'Kubelet Version'
        },
        {
          name: 'architecture',
          columnWidth: 200,
          label: 'Architecture'
        },
        {
          name: 'operatingSystem',
          columnWidth: '',
          label: 'Operating System'
        }
      ],
      collapseSystemInfo: 'systemInfo',

      // Conditions
      conditions: [],
      collapseConditions: 'conditions',
      conditionsAttributes: [
        {
          name: 'type',
          columnWidth: 200,
          label: 'Type'
        },
        {
          name: 'status',
          columnWidth: 200,
          label: 'Status'
        },
        {
          name: 'lastHeartbeatTime',
          columnWidth: 200,
          label: 'Last Heartbeat Time'
        },
        {
          name: 'lastTransitionTime',
          columnWidth: 200,
          label: 'Last Transition Time'
        },
        {
          name: 'reason',
          columnWidth: 220,
          label: 'Reason'
        },
        {
          name: 'message',
          columnWidth: '',
          label: 'Message'
        }
      ],

      // images
      images: [],
      collapseImages: 'images',
      sizeCount: 0,
      imagesAttributes: [
        {
          name: 'name',
          columnWidth: '',
          label: 'Image Name'
        },
        {
          name: 'size',
          columnWidth: '',
          label: 'Size'
        }
      ],
      sizeDirectory: ['B', 'KB', 'MB', 'GB', 'TB']
    };
  },
  mounted () {
    this.getDetail();
  },
  methods: {
    getDetail () {
      getNodeDetail(this.$route.params.name).then((response) => {
        let data = response.data;
        this.metadata.push(data.metadata);
        this.metadata[0].creationTime = this.metadata[0].creationTimestamp.split('T')[0];

        this.labelsKeys = Object.keys(data.metadata.labels);
        this.labels.push({labels: data.metadata.labels});

        this.annotationsKeys = Object.keys(data.metadata.annotations);
        this.annotations.push({annotations: data.metadata.annotations});

        let podCIDR = data.spec.podCIDR;
        this.resourceInfo.push({podCIDR: podCIDR});
        this.addresses = data.status.addresses;

        this.systemInfo.push(data.status.nodeInfo);

        this.conditions = data.status.conditions;

        let images = data.status.images;
        for (let i = 0; i < images.length; i++) {
          console.log(images[i].names[0]);
          if (images[i].names[0].indexOf('<none>') === -1) {
            this.sizeCount = 0;
            let size = images[i].sizeBytes;
            while (size > 1000) {
              size = size / 1024;
              this.sizeCount++;
            };
            let name = images[i].names.slice(-1);
            this.images.push({size: size.toFixed(3) + this.sizeDirectory[this.sizeCount], name: name});
          };
        }
      });
    }
  }

};
</script>

<style lang="scss" scoped>
  .rect {
    margin: 20px;
  }
  .tag {
    margin:5px;
  }
</style>
