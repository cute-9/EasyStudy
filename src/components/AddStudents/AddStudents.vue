<template>
  <div>
    <div class="question_bank">
      <el-table
        border
        :data="records"
        style="width: 100%; margin-top: 10px"
        :row-class-name="tableRowClassName"
      >
        style="width: 100%">
        <el-table-column label="序号" type="index" width="50">
        </el-table-column>
        <el-table-column prop="username" label="姓名"> </el-table-column>
        <el-table-column prop="sex" label="性别" width="180"> </el-table-column>
        <el-table-column prop="phone" label="手机号" >
        </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="city" label="所在地"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div>
            <el-button
            v-if="!scope.row.state"
              @click="handleClick(scope.row.id)"
              size="small"
              icon="el-icon-circle-plus"
               type="success"
                plain
              >添加</el-button
            >
             <el-button
            v-if="scope.row.state"
              size="small"
              icon="el-icon-circle-plus"
               type="success"
                plain
              disabled
              >已添加</el-button
            >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer_text_data">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[5]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="records.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {addstudent,tcaddstudent} from "@/api/addstudent"
// import qs from 'qs'
export default {

  data() {
    return {
      currentPage: 1,
      info:{
        name:'',
        method:1, //
        pr_id:3,
        page:1, 
        size:10
      },
      tcadd:{
        stId:'',
        prId:"",
      },
      records: [
      ],
    };
  },
  mounted() {
this.active()
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
  async  handleClick(id){
            // console.log(id);
            this.tcadd.prId=window.localStorage.getItem("prId")
            this.tcadd.stId=id
            // this.$message.success("添加成功");
            const data=await tcaddstudent(JSON.parse(JSON.stringify(this.tcadd)))
            if(data.code==200){
              this.$message.success("添加成功")
                   this.active()
            }
            else{
              this.$message.error("添加失败")
            }
    },

   async active(){
    //  console.log(JSON.stringify(this.info));
        const data= await addstudent(JSON.parse(JSON.stringify(this.info)))
        // console.log(data.data);
        this.records=data.data.records;
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