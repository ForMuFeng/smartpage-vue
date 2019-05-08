<template>
  <div class="element">
  <el-upload
    class="upload-demo"
    :on-success="uploadsuccess"
    :on-error="uploadFail"
    drag
    action="http://localhost:2001/ocr"
    multiple>
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
  </el-upload>
    <big>带格式</big>
    <el-input
      type="textarea"
      :rows="5"
      placeholder="识别结果"
      v-model="textarea">
    </el-input>
    <big>不带格式</big>
    <el-input
      type="textarea"
      :rows="5"
      placeholder="识别结果"
      v-model="ftextarea">
    </el-input>
  </div>
</template>

<script>

    export default {
        name: "ocr",
      data() {
        return {
          ftextarea: '',
          textarea: '',
          response: '',
          file: '',
          fileList: ''
        }
      },
      methods :{
          uploadsuccess(response, file, fileList){
            this.$notify({
              title: '成功',
              type: 'success'
            });
              for(var i=0;i<response.length;i++){
                this.textarea=this.textarea+response[i]+'\r\n';
                this.ftextarea=this.ftextarea+response[i];
              }
          },
        uploadFail(){
          this.$notify({
            title: '失败',
            message: '识别失败，可能是文件类型问题，请仅上传图片文件！',
            type: 'warning'
          });
        }

      }
    }
</script>

<style scoped>
.element{
  margin: auto;
  padding: auto;
  text-align: center;
  width: 500px;
}


</style>
