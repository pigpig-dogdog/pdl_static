<template>
  <div class="form">
    <el-form ref="form" :model="createQuery" :rules="rules" label-width="150px" class="demo-ruleForm">
      <el-form-item label="在线化服务名称" prop="name">
        <el-input v-model="createQuery.name"></el-input>
      </el-form-item>
      <el-form-item label="深度学习框架" prop="framework">
        <el-select v-model="createQuery.framework" placeholder="请选择深度学习框架">
          <el-option v-for="data in GLOBAL.framework" :key="data" :label="data" :value="data"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="代码压缩文件" prop="codeZipFile">
        <input type="file" @change="getZipFile"/>
      </el-form-item>
      <el-form-item label="主类路径" prop="mainClassPath">
        <el-input v-model="createQuery.mainClassPath"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="goAlgoServiceIndex">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { createAlgoService } from '@/api/algo-service';
export default {
  name: 'NewAlgoService',
  data () {
    return {
      createQuery: {
        name: '',
        framework: '',
        mainClassPath: ''
      },
      codeZipFile: '',
      rules: {
        name: [
          { required: true, message: '请输入在线化服务名称', trigger: 'blur' }
        ],
        framework: [
          { required: true, message: '请选择深度学习框架', trigger: 'change' }
        ],
        mainClassPath: [
          { required: true, message: '请指定主类路径', trigger: 'change' }
        ]
      }
    };
  },
  methods: {
    onSubmit () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (!this.codeZipFile) {
            this.$message({
              message: '请上传代码压缩文件！',
              type: 'error'
            });
            return;
          };
          createAlgoService(this.createQuery, this.codeZipFile).then(response => {
            this.$message({
              message: '创建在线化服务成功！',
              type: 'success'
            });
            this.$router.push('index');
          });
        } else {
          return false;
        }
      });
    },
    goAlgoServiceIndex () {
      this.$router.push('index');
    },
    getZipFile (e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      };
      console.log(files[0]);
      const formData = new FormData();
      formData.append('codeZipFile', files[0]);
      this.codeZipFile = formData;
    }
  }
};
</script>

<style lang="scss" scoped>
  .form{
    margin-top: 30px;
    width:80%;
   }
</style>
