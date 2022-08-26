<template>
  <div>
    <div class="question_bank">
      <el-table
       border
        :data="records"
        style="width: 100%;margin-top:10px"
        :row-class-name="tableRowClassName"
      >
        style="width: 100%">
        <el-table-column label="序号" type="index" width="50">
        </el-table-column>
        <el-table-column prop="question" label="题目名称"> </el-table-column>
        <el-table-column prop="type" label="题型" width="180">
        </el-table-column>
        <el-table-column prop="level" label="难易程度"> 
        </el-table-column>
        <el-table-column prop="tcId" label="使用数量"> </el-table-column>
        <el-table-column prop="username" label="老师名称"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button  type="text" size="small" icon="el-icon-edit">修改</el-button>
            <el-button type="text" @click="remove(scope.row.id)" size="small" icon="el-icon-delete" style="color:red">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer_text_data">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {selectquestion,examName,deleteQuestion} from "@/api/createExam"
import qs from 'qs'
 export default {
  data() {
    return {
      currentPage: 1,
      total:1,
      dialogVisible:true,
      deleteId:'',
      info:{ 
         typeId:'',
    levelId:'',
    question: "",
    page: '1',
    size: '10',
    prId: '',
  
},
      records: [
        {
          id: 3,
          typeId: 2,
          type: "单选题",
          level: "一般",
          levelId: 2,
          prId: 2,
          tcId: 2,
          username: "test",
          question: "What is you're name",
        },
      ],
    };
  },
  mounted() {
    this.info.prId=window.localStorage.getItem("prId")
this.question()
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
    handleCurrentChange(val) {
       this.info.page = val;
      //  console.log(this.info);
       this.question()
    },
   async question(){
    //  console.log(JSON.parse(JSON.stringify(this.info)));
const data=await selectquestion(JSON.parse(JSON.stringify(this.info)))
// console.log(data);
if(data.code ==200){
this.records=data.data.records
// this.currentPage=data.data.current
this.total=data.data.total
}
    },
    remove(id){
  this.deleteId=id
deleteQuestion(qs.stringify({
        id:this.deleteId
})).then((res) =>{
  // console.log(res);
  if(res.code ==200){
    this.$message.success('删除成功')
this.question()

  }
})
    },
   async getup(){
const data = await examName(JSON.parse(JSON.stringify(this.changeName)))
this.dialogVisible=false
if(data.code ==200){
  this.$message.success('成功')
}

    },
    cancel() {
      this.dialogVisible=false
    }
  },
};
</script>

<style scoped>
.footer_text_data {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
</style>