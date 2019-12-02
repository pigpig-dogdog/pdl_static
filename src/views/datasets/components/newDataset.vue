<template>
  <div class="form">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-form-item label="数据集名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="数据集描述" prop="description">
        <el-input type="textarea" v-model="form.description" placeholder="请对该数据集做简要描述"></el-input>
      </el-form-item>
      <el-form-item label="算法类型" prop="algoType">
        <el-select v-model="form.algoType" placeholder="请选择算法类型">
          <el-option v-for="data in GLOBAL.algoTypes" :key="data.value" :label="data.label" :value="data.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签总数">
        <el-input-number v-model="form.classesNumber" :min="0" :max="10" @change="showInput" ></el-input-number>
      </el-form-item>
      <el-form-item label="标签列表">
        <el-tag
          :key="tag"
          v-for="tag in form.classesNameList"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="newTagValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="goDatasetsIndex">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { createDataset } from '@/api/datasets';
export default {
  name: 'NewDataset',
  data () {
    return {
      form: {
        name: '',
        algoType: '',
        description: '',
        classesNumber: 0,
        classesNameList: []
      },
      rules: {
        name: [
          { required: true, message: '请输入数据集名称', trigger: 'blur' }
        ],
        algoType: [
          { required: true, message: '请选择数据集算法类型', trigger: 'change' }
        ],
        description: [
          { required: true, message: '请对数据集做简要描述', trigger: 'change' }
        ]
      },
      newTagValue: '',
      inputVisible: false
    };
  },
  methods: {
    onSubmit () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          createDataset(this.form).then(response => {
            this.$message({
              message: '创建数据集成功！',
              type: 'success'
            });
            this.$router.push('/datasets/index');
          });
        } else {
          return false;
        }
      });
    },
    goDatasetsIndex () {
      this.$router.push('index');
    },
    handleClose (tag) {
      this.form.classesNameList.splice(this.form.classesNameList.indexOf(tag), 1);
    },
    showInput () {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm () {
      let newTagValue = this.newTagValue;
      if (newTagValue) {
        this.form.classesNameList.push(newTagValue);
      }
      this.form.classesNumber = this.form.classesNameList.length;
      this.inputVisible = false;
      this.newTagValue = '';
    }
  }
};
</script>

<style lang="scss" scoped>
  .form{
    margin-top: 30px;
    width:80%;
   }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
