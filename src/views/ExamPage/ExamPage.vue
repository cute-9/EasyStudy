<template>
  <div class="container">
    <div class="exam_header_btn">
      <el-button type="primary" icon="el-icon-circle-plus" @click="newCreate"
        >新建</el-button
      >
      <el-button
        type="primary"
        icon="el-icon-folder-opened"
        @click="dataManagement"
        >资料库</el-button
      >
    </div>
    <hr />
    <div v-if="examdetail.length == 0" class="noclass">暂无考试</div>
    <div class="exam_detail" v-if="examdetail.length != 0">
      <div v-for="(item, index) in examdetail" :key="index">
        <exam-detail
          :examdetail="item"
          :key="item.id"
          @deletecessss="deletecessss"
        ></exam-detail>
      </div>
    </div>
    <!-- 新建 -->
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <div style="margin-bottom: 20px">
        <el-radio v-model="radio" label="1">手动组卷(重新创建卷子）</el-radio>
      </div>
      <el-radio v-model="radio" label="2">自动组卷（题库选题）</el-radio>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="nextTick">下一步</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { ExamDetail } from "@/components/index";
import { totol } from "@/api/createExam";
import qs from "qs";
export default {
  components: { ExamDetail },
  data() {
    return {
      radio: "1",
      info: {
        pr_id:3,
        page: 1,
        size: 10,
      },
      examdetail: [],
      centerDialogVisible: false,
    };
  },
  mounted() {
    //  this.info.pr_id =window.localStorage.getItem("prId")
    this.Alltotle();
  },
  methods: {
    newCreate() {
      this.centerDialogVisible = true;
      // this.$router.push('/createQuestion')
    },
    dataManagement() {
      this.$router.push("/createExam/dataManagement");
    },
    cancel() {
      this.centerDialogVisible = false;
    },
    nextTick() {
      if (this.radio == 1) {
        var id = this.info.pr_id;
        this.$router.push({
          path: "/createQuestion",
          query: {
            id: id,
          },
        });
        // this.$router.push('/createQuestion')
      }
      //  else if (this.radio == 2) {
      //   this.$router.push("/AutomaticQuestion");
      // }
    },
    Alltotle() {
      this.info.pr_id =window.localStorage.getItem("prId")
      let info = JSON.parse(JSON.stringify(this.info));
      totol(qs.stringify(info)).then((res) => {
        // console.log(res.data.records);
        this.examdetail = res.data.records;
      });
    },
    deletecessss() {
      // console.log(a);
      this.Alltotle();
    },
  },
};
</script>

<style  scoped>
.exam_header_btn {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
.exam_detail {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.noclass {
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  color: rgb(126, 126, 126);
}
</style>