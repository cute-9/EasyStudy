<template>
  <div>
    <el-header class="header">试卷发放设置</el-header>
    <div class="main">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="试卷名称：">
          {{ title }}
        </el-form-item>
        <el-form-item label="发放对象:">
          <el-button type="primary" plain v-model="form.studentList">请选择学生</el-button>
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
              <el-checkbox-group v-model="form.checkList">
    <el-checkbox :label=number_>
        <template>
            允许切出屏幕<el-input v-model="number_" style="width:150px" ></el-input>次
        </template>
    </el-checkbox>
    <el-checkbox label="0">题目乱序（学生接受到的题目显示顺序不同）</el-checkbox>
    <el-checkbox label="1">选项乱序（学生答题的时候题目的选项顺序不同）</el-checkbox>
  </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="foundExam">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import {HeaderBack} from "@/components/index"
export default {
  components: {
    // HeaderBack
  },
  data() {
    return {
      title: "大雾开花",
      number_:'',
      form: {
studentList:[],
startTime:'',
endTime:'',
limitTime:'',
checkList:[]
      },
        // pickerOptions: {
        //   shortcuts: [{
        //       text:'今天',
        //       onClick(picker) {
        //       const date = new Date();
        //       date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
        //       picker.$emit('pick', date);
        //     }
        //   },
        //   ]
        // }
    };
  },
  methods: {
      foundExam(){
          console.log(this.form);
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