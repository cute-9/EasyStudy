<template>
  <div>
    <el-button type="primary" class="text_exam_btn" @click="creatExam"> 创建试卷</el-button>
    <div class="question_bank">
      <el-table
        border
        :data="records"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column label="序号" type="index" width="80">
        </el-table-column>
        <el-table-column prop="tsName" label="试卷名称"> </el-table-column>
        <el-table-column prop="levelId" label="难易程度" width="120">
          <template slot-scope="scope">
            <div v-if="scope.row.levelId==1">简单</div>
            <div v-if="scope.row.levelId==2">一般</div>
            <div v-if="scope.row.levelId==3">困难</div>
          </template>
        </el-table-column>
        <el-table-column prop="tsScore" label="总分" width="120">
        </el-table-column>
        <!-- <el-table-column prop="username" label="创建者" width="180">
        </el-table-column> -->
        <el-table-column prop="createTime" label="创建时间"> </el-table-column>
        <el-table-column prop="tsName" label="创建老师"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="revamp(scope.row.id)"
              type="text"
              size="small"
              icon="el-icon-edit"
              >修改</el-button
            >
            <el-button
              type="text"
              size="small"
              icon="el-icon-delete"
              style="color: red"
              @click="deleteExam(scope.row.id)"
              >删除</el-button
            >
            <el-button
              size="small"
              icon="el-icon-s-opportunity"
              type="success"
              @click="sealPaper(scope.row.id)"
              v-if="scope.row.tsPassword==null"
              >封存</el-button
            >
             <el-button
              size="small"
              icon="el-icon-s-opportunity"
              type="success"
              @click="sealPaper(scope.row.id)"
              v-else-if="scope.row.tsPassword==''"
              >封存</el-button
            >
              <el-button
              size="small"
              icon="el-icon-circle-close"
              type="danger"
              @click="nosealPaper(scope.row.id)"
              v-else
              >已封存</el-button
            >
            <el-button
              size="small"
              icon="el-icon-s-promotion"
              type="success"
              @click="issue(scope.row.id)"
              >发布</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="更改试卷名字" :visible.sync="dialogVisible" width="30%">
      <el-input
        v-model="changeName.newname"
        placeholder="请输入新的试卷名称"
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="getup">确 定</el-button>
      </span>
    </el-dialog>
        <el-dialog title="解封试卷" :visible.sync="nosalVisible" width="30%">
      <el-input
        v-model="nosealExamPaper.password"
        placeholder="请输入密码"
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="nosalCancel">取 消</el-button>
        <el-button type="primary" @click="nosalGetup">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="封存试卷" :visible.sync="dialogSeal" width="30%">
      <el-input
        v-model="sealExamPaper.password"
        placeholder="请输入密码"
        style="margin-bottom: 20px"
      ></el-input>
      <el-input
        v-model="sealExamPaper.comfirePassword"
        placeholder="请确认密码"
      ></el-input>

      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelSeal">取 消</el-button>
        <el-button type="primary" @click="getupSeal">确 定</el-button>
      </span>
    </el-dialog>
    <div class="footer_text_data">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="records.length"
      >
      </el-pagination>
      <el-button type="danger" plain icon="el-icon-delete" @click="recycleBin">
        回收站
      </el-button>
    </div>
  </div>
</template>

<script>
// import {selectcallpaper} from "@/api/createExam"
import { selectcallpaper, examName, sealExam ,delelePaper ,nosealExamPaper} from "@/api/createExam";
import qs from "qs";
export default {
  data() {
    
    return {
      total:'',
      dialogVisible: false,
      dialogSeal: false,
      nosalVisible:false,
      currentPage: 1,

      records: [],
      datainfo: {
        projectId: 12,
        tsName: "",
      },
      changeName: {
        newname: "",
        id: 2,
      },
      sealExamPaper: {
        paperId: 12,
        password: "",
        comfirePassword: "",
      },
      nosealExamPaper:{
        paperId: 12,
        password: "",
      }

    };
  },
  mounted() {
    // this.projectId =window.localStorage.getItem("prId")
    this.getDateAll();
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
    recycleBin() {
      this.$router.push("/RecycleBin");
    },
    async getDateAll() {
      this.datainfo.projectId = window.localStorage.getItem("prId");
      // console.log(this.datainfo.projectId);
      const data = await selectcallpaper(qs.stringify(this.datainfo));
      if (data.code == 200) {
        this.records = data.data;
      }

      // console.log(data);
    },
    issue(id) {
      this.$router.push({
        path: "/issueSetting",
        query: {
          id: id,
        },
      });
    },
    revamp(id) {
      this.changeName.id = id;
      this.dialogVisible = true;
      //  const data =await selectquestion()
      //  console.log(this.changeName);
    },
    async getup() {
      examName(
        qs.stringify({
          newname: this.changeName.newname,
          id: this.changeName.id,
        })
      ).then((res) => {
        if (res.code == 200) {
          this.getDateAll();
          this.dialogVisible = false;
        }
      })
      this.changeName.newname = "";
    },
    cancel() {
      this.dialogVisible = false;
    },
    sealPaper(id) {
      this.sealExamPaper.paperId = id;
      this.dialogSeal = true;
    },
    cancelSeal() {
      this.dialogSeal = false;
    },
    // 封存试卷
    async getupSeal() {
      // console.log(JSON.stringify(this.sealExamPaper));
      sealExam(
        qs.stringify({
          paperId: this.sealExamPaper.paperId,
          password: this.sealExamPaper.password,
          comfirePassword: this.sealExamPaper.comfirePassword,
        })
      ).then((res) => {
        if (res.code == 200) {
          (this.sealExamPaper.password = ""),
            (this.sealExamPaper.comfirePassword = "");
             this.$message.success('封存成功')
          this.dialogSeal = false;
          this.getDateAll()
        }
      })
      ;
    },
  async  deleteExam(id){
     const num=[];
     num.push(id)
       const data= await delelePaper(num); 
   if(data.code==200){
     this.getDateAll()
     this.$message.success('删除成功')
   }else{
     this.$message.error('删除失败')
   }
    },
    creatExam(){
      this.$router.push('/createExam/ExamPage')
    },
   async nosealPaper(id){
          this.nosalVisible = true;
this.nosealExamPaper.paperId=id
    },
    nosalCancel(){
      this.nosalVisible = false;
    },
    nosalGetup(){
      nosealExamPaper(
        qs.stringify({
          paperId: this.nosealExamPaper.paperId,
          password: this.nosealExamPaper.password,
        })
      ).then((res) => {
        if (res.code == 200) {
          (this.nosealExamPaper.password = ""),
             this.$message.success('解封封存成功')
          this.nosalVisible = false;
          this.getDateAll()
        }
      })
    }
  },
};
</script>

<style>
/* .el-table .warning-row {
  background: rgb(238, 238, 238);
}

.el-table .success-row {
  background: rgb(238, 238, 238);

} */
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