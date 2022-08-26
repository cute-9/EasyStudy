<template>
  <div>
    <div class="question_bank">
      <el-table
        border
        :data="records"
        style="width: 100%;margin-top:10px"
        :row-class-name="tableRowClassName"
      >
        <el-table-column label="序号" type="index" width="50">
        </el-table-column>
        <el-table-column prop="stName" label="姓名" width="80"> </el-table-column>
        <el-table-column prop="phone" label="学号/工作号" width="150">
        </el-table-column>
        <el-table-column prop="stStatusId" label="学生作答状态" width="120">
          <template slot-scope="scope">
            <div v-if="scope.row.stStatusId==1">未作答</div>
            <div v-if="scope.row.stStatusId==2">已作答</div>
         </template>
        </el-table-column>
        <el-table-column prop="stStartTime" label="开始时间" width="180">
        </el-table-column>
        <el-table-column prop="stSubmitTime" label="提交时间" width="180">
        </el-table-column>
        <el-table-column prop="stIp" label="学生IP"> </el-table-column>
        <el-table-column prop="city" label="学生所在地" width="100"> </el-table-column>
        <el-table-column prop="correctRate" label="客观题正确率" width="110">
        </el-table-column>
        <el-table-column prop="stScore" label="分数" width="50"> </el-table-column>
        <el-table-column prop="approve" label="批阅状态" width="100"> </el-table-column>
        <el-table-column label="操作" v-if="isable">
          <template slot-scope="scope">
            <el-button size="small" icon="el-icon-magic-stick" type="primary" 
              >批阅</el-button
            >
            <el-button size="small" icon="el-icon-refresh-left" type="danger" @click="handleClick(scope.row.id)"
              >打回去重做</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer_text_data">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { RecycleBinExam } from "@/api/correctExam";
// import qs from 'qs'
export default {
  props:[
    "isable"],
  data() {
    return {
      currentPage: 1,
      info:{
        pub_id: "",
        st_status_id:1,
        page:1,
      size:10
      },
      total:1,
      records: [
        {
          id: 1,
          pubId: 3,
          stName: "李思佳",
          stNum: null,
          stStatusId: 1,
          status: "待作答",
          stStartTime: '2022-04-11T17:15:00.000+00:00',
          stSubmitTime: '2022-04-11T17:15:00.000+00:00',
          stIp: null,
          correctRate: null,
          stScore: 50,
          approveId: 1,
          approve: "已批阅",
          appIp: null,
          stId: null,
          username: "李思佳",
          email: "907167912@qq.com",
          city: "成都",
          phone: "15388409900",
        },
      ],
    };
  },
  mounted() {
    this.getAll()
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      } else if (row === 1) {
        return "";
      }
      return "";
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
     this.info.page=val;
     this.getAll
    },
    handleClick(a){
      console.log(a);
    },
 async getAll(){
   this.info.pub_id=window.localStorage.getItem("examId")
    const data =await RecycleBinExam(this.info)
  if(data.code ==200){
    this.records=data.data.records
    this.total=data.data.total
  }
    }
  },
};
</script>

<style>
.el-table .warning-row {
  background: rgb(243, 243, 243,0.5);
}

.el-table .success-row {
   background: rgb(243, 243, 243,0.5);
}
.footer_text_data {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
</style>
<style scoped>
.text_exam_btn {
  float: right;
  margin-bottom: 10px;
}
</style>