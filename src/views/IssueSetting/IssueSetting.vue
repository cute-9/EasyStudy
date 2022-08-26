<template>
  <div>
    <el-header class="header">试卷发放设置</el-header>
    <div class="main">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="试卷名称：">
          {{ title }}
        </el-form-item>
        <el-form-item label="发放对象:">
          <el-radio v-model="addstudent" label="1">已加入该课堂的学生</el-radio>
        </el-form-item>
        <el-form-item label="开始时间:">
          <div class="block">
            <el-date-picker
              v-model="form.startTime"
              type="datetime"
              placeholder="选择日期时间"
              default-time="12:00:00"
            >
            </el-date-picker>
          </div>
        </el-form-item>
               <el-form-item label="结束时间:">
          <div class="block">
            <el-date-picker
              v-model="form.endTime"
              type="datetime"
              placeholder="选择日期时间"
              default-time="12:00:00"
            >
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="考试限制时间:">
<el-input v-model="form.limitTime" style="width:150px"></el-input>
        </el-form-item>
        <el-form-item label="防作弊设置：">
     <el-radio v-model="form.jumpCount" :label="form.jumpCount">
         <template>
            允许切出屏幕<el-input  style="width:150px" v-model="form.jumpCount" ></el-input>次
        </template></el-radio> 
        <el-radio v-model="form.questionDisorder" label="1">题目乱序（学生接受到的题目显示顺序不同</el-radio>
  <el-radio v-model="form.optionDisorder" label="1">选项乱序（学生答题的时候题目的选项顺序不同）</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="foundExam">立即创建</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import {HeaderBack} from "@/components/index"
import {publicpaper} from "@/api/issueExam"
// import qs from 'qs'
export default {
  components: {
    // HeaderBack
  },
  data() {
    return {
      title: "大雾开花",
      number_:'',
      addstudent:'',
      studentId:'',
      form: {
studentList:[6,7,8],
startTime:'',
endTime:'',
limitTime:'',
jumpCount:'3',
questionDisorder:0,
optionDisorder:0
      },
    };
  },
  methods: {
    async  foundExam(){
          // console.log(this.form);
            this.form.startTime=this.GMTToStr(this.form.startTime)
            this.form.endTime=this.GMTToStr(this.form.endTime)
          // this.$message.success('创建成功')
          // console.log(this.form);
          this.studentId=this.$route.query.id
const data = await publicpaper(this.studentId,this.form)
if(data.code ==200){
   this.$message.success('创建成功')
    this.$router.push('/createExam/ExamPage')
}
          // this.$router.push('/createExam/ExamPage')
          console.log(data);
      },
      cancel(){
          this.$message.error('取消创建')

        this.$router.push('/createExam/dataManagement')
      },
      GMTToStr(time){
    let date = new Date(time)
    let Str=date.getFullYear() + '-' +
    (date.getMonth() + 1) + '-' + 
    date.getDate() + ' ' + 
    date.getHours() + ':' + 
    date.getMinutes() + ':' + 
    date.getSeconds()
    return Str
}
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 80px !important;
  background-image: url(/img/header.104d4be2.png);
  background-size: cover;
  line-height: 80px;
  color: white;
  font-size: 22px;
  /* position: fixed; */
  /* z-index: 99; */
  text-align: center;
}
.main {
  margin-top: 20px;
  width: 80%;
  /* background-color:rgb(231, 231, 231); */
  margin-left: auto;
  margin-right: auto;
}
</style>