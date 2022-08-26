<template>
    <div>
        <h3>试卷：《{{records.tsName}}》</h3>
<el-descriptions>
    <el-descriptions-item label="考试总人数">{{records.totalNum}}人</el-descriptions-item>
    <el-descriptions-item label="创建人">{{records.username}}</el-descriptions-item>
    <el-descriptions-item label="总分">{{records.tsScore}}分</el-descriptions-item>
    <el-descriptions-item label="考试时间"> {{records.startTime}}至{{records.endTime}}</el-descriptions-item>
</el-descriptions>
<div class="el-search-item">
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    <el-button slot="append"  type="warning" @click="noJoin">未参加考试人员名单</el-button>
</div>
<correct-exam :isable="isable"></correct-exam>
    </div>
</template>

<script>
import {CorrectExam} from "@/components/index"
    export default {
        components:{
CorrectExam
        },
        data() {
          
return {
  isable:true,
  records: {
   tsName: "英语11",
    tsScore: 100,
    startTime:"2022-04-11T17:15:00.000+00:00",
     endTime: "2022-04-12T17:15:00.000+00:00",
      totalNum: 3,
      username: "彭彭",
  },
      value:'',
      options:[{
             value: '1',
          label: '全部'
        }, {
          value: '2',
          label: '已作答'
        }, {
          value: '3',
          label: '未作答'
        },
      ]
}
        },
        mounted() {
            let formObj = decodeURIComponent(this.$route.query.examInfo)
this.records = JSON.parse(formObj)
        },
        methods:{
          noJoin(){
            this.isable=false
          }
        }

    }
</script>

<style scoped>
h3{
    margin-bottom: 10px;
}
.new_search{
  width: 400px;
}
.el-search-item{
display:flex;
justify-content: space-between;
}
</style>